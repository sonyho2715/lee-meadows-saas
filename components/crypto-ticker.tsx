"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const CRYPTO_SYMBOLS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "cardano", symbol: "ADA", name: "Cardano" },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
  { id: "tether", symbol: "USDT", name: "Tether" },
];

export function CryptoTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([
    { symbol: "BTC", name: "Bitcoin", price: 101445, change: -1.72 },
    { symbol: "ETH", name: "Ethereum", price: 3316.73, change: -2.59 },
    { symbol: "ADA", name: "Cardano", price: 0.53, change: -1.41 },
    { symbol: "DOGE", name: "Dogecoin", price: 0.16, change: -2.10 },
    { symbol: "USDT", name: "Tether", price: 1.00, change: -0.03 },
  ]);
  const [isLive, setIsLive] = useState(false);

  // Fetch live crypto prices from CoinCap API
  const fetchCryptoPrices = async () => {
    try {
      // Fetch all cryptocurrencies at once from CoinCap
      const ids = CRYPTO_SYMBOLS.map(c => c.id).join(',');
      const response = await fetch(
        `https://api.coincap.io/v2/assets?ids=${ids}`,
        {
          cache: 'no-cache',
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`CoinCap API error: ${response.status}`);
      }

      const result = await response.json();
      const data = result.data;

      const updatedData: CryptoData[] = CRYPTO_SYMBOLS.map(crypto => {
        const ticker = data.find((t: any) => t.id === crypto.id);
        return {
          symbol: crypto.symbol,
          name: crypto.name,
          price: ticker ? parseFloat(ticker.priceUsd) : 0,
          change: ticker ? parseFloat(ticker.changePercent24Hr) : 0,
        };
      });

      setCryptoData(updatedData);
      setIsLive(true);
    } catch (error) {
      console.error('Error fetching crypto prices from CoinCap:', error);
      setIsLive(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchCryptoPrices();

    // Fetch every 60 seconds
    const priceInterval = setInterval(fetchCryptoPrices, 60000);

    // Rotate display every 3 seconds
    const rotateInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CRYPTO_SYMBOLS.length);
    }, 3000);

    return () => {
      clearInterval(priceInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className="border-y border-blue-500/10 bg-[#0a0e1a]/80 py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 overflow-x-auto">
          {isLive && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/30">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs text-blue-400 font-medium">LIVE</span>
            </div>
          )}
          {cryptoData.map((crypto, index) => (
            <div
              key={crypto.symbol}
              className={`flex items-center gap-3 min-w-fit transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold text-sm">{crypto.symbol}</span>
                  <span className="text-xs text-gray-500">{crypto.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 font-medium text-sm">
                    ${crypto.price >= 1
                      ? crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                      : crypto.price.toFixed(crypto.price < 0.01 ? 6 : 4)
                    }
                  </span>
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
                    {Math.abs(crypto.change).toFixed(2)}%
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
