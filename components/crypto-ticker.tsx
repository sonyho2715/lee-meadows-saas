"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const CRYPTO_IDS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "cardano", symbol: "ADA", name: "Cardano" },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
  { id: "tether", symbol: "USDT", name: "Tether" },
];

export function CryptoTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([
    { symbol: "BTC", name: "Bitcoin", price: 67234.50, change: 2.34 },
    { symbol: "ETH", name: "Ethereum", price: 3456.78, change: -1.23 },
    { symbol: "ADA", name: "Cardano", price: 0.58, change: 5.67 },
    { symbol: "DOGE", name: "Dogecoin", price: 0.12, change: 3.45 },
    { symbol: "USDT", name: "Tether", price: 1.00, change: 0.01 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch live crypto prices from CoinGecko API
  const fetchCryptoPrices = async () => {
    try {
      setIsLoading(true);
      const ids = CRYPTO_IDS.map(c => c.id).join(',');
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
        { next: { revalidate: 60 } } // Cache for 60 seconds
      );

      if (!response.ok) {
        throw new Error('Failed to fetch crypto prices');
      }

      const data = await response.json();

      const updatedData: CryptoData[] = CRYPTO_IDS.map(crypto => {
        const coinData = data[crypto.id];
        return {
          symbol: crypto.symbol,
          name: crypto.name,
          price: coinData?.usd || 0,
          change: coinData?.usd_24h_change || 0,
        };
      });

      setCryptoData(updatedData);
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
      // Keep using fallback data on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchCryptoPrices();

    // Fetch every 60 seconds
    const priceInterval = setInterval(fetchCryptoPrices, 60000);

    // Rotate display every 3 seconds
    const rotateInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CRYPTO_IDS.length);
    }, 3000);

    return () => {
      clearInterval(priceInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className="border-y border-yellow-500/20 bg-[#0a0e27]/80 py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 overflow-x-auto">
          {cryptoData.map((crypto, index) => (
            <div
              key={crypto.symbol}
              className={`flex items-center gap-3 min-w-fit transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 font-bold">{crypto.symbol}</span>
                  <span className="text-xs text-gray-400">{crypto.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">${crypto.price.toLocaleString()}</span>
                  <span
                    className={`text-xs flex items-center gap-1 ${
                      crypto.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {crypto.change >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(crypto.change)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
