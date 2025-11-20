import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Info } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Legal Disclaimer | TradePulse AI - TradePulse AI AI Trading",
  description: "Important legal disclaimers and risk warnings for TradePulse AI AI Trading cryptocurrency investment services.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Header */}
      <header className="border-b border-yellow-500/20 bg-[#0a0e27]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-yellow-500/30 text-yellow-500">
            Legal Information
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legal Disclaimer
          </h1>
          <p className="text-gray-300 text-lg">
            Last Updated: October 30, 2025
          </p>
        </div>

        {/* Risk Warning Banner */}
        <Card className="border-2 border-red-500/50 bg-gradient-to-br from-red-900/20 to-red-950/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="h-6 w-6" />
              Important Risk Warning
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 space-y-3">
            <p className="font-semibold">
              Trading and investing in cryptocurrencies involves substantial risk and may not be suitable for all investors.
            </p>
            <p>
              The value of cryptocurrencies can be extremely volatile and unpredictable. You could lose some or all of your invested capital. Past performance is not indicative of future results. No trading system or investment strategy is guaranteed to generate profits or avoid losses.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimer Sections */}
        <div className="space-y-8">
          {/* General Disclaimer */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Info className="h-5 w-5 text-yellow-500" />
                General Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                The information provided on this website is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </CardContent>
          </Card>

          {/* Investment Risk Disclosure */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Investment Risk Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Cryptocurrency Trading Risks</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Cryptocurrency markets are highly volatile and can experience significant price fluctuations</li>
                <li>You may lose your entire investment or more than your initial deposit</li>
                <li>Leverage and margin trading amplify both potential gains and losses</li>
                <li>Market conditions can change rapidly without warning</li>
                <li>Technical issues, hacking, or exchange failures may result in loss of funds</li>
                <li>Regulatory changes may affect the value and legality of cryptocurrencies</li>
                <li>Lack of liquidity may prevent you from exiting positions at desired prices</li>
              </ul>

              <h3 className="font-semibold text-white mt-6">Trading Signals Disclaimer</h3>
              <p>
                While we strive to provide accurate trading signals with our AI-powered system, no trading signal or strategy can guarantee profits. The stated 99.6% win rate is based on historical performance and does not guarantee future results. Individual results may vary significantly.
              </p>

              <h3 className="font-semibold text-white mt-6">Financial Advice Disclaimer</h3>
              <p>
                The information provided does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the website's content as such. We do not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
              </p>
            </CardContent>
          </Card>

          {/* Regulatory Information */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5 text-yellow-500" />
                Regulatory Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                TradePulse AI AI Trading Investment Group and licensed cryptocurrency exchanges operate under various regulatory frameworks. However, regulatory oversight does not eliminate all risks associated with cryptocurrency trading and investment.
              </p>

              <h3 className="font-semibold text-white">Licensing Information</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>SEC (United States Securities and Exchange Commission) oversight</li>
                <li>ASIC (Australian Securities and Investments Commission) registration</li>
                <li>MAS (Monetary Authority of Singapore) compliance</li>
                <li>International licensing in 30+ countries</li>
              </ul>

              <p className="text-sm italic">
                Please verify all licensing information independently and ensure services are available in your jurisdiction before investing.
              </p>
            </CardContent>
          </Card>

          {/* Geographic Restrictions */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">Geographic Restrictions</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Our services may not be available in all countries or jurisdictions. It is your responsibility to ensure that your use of our services complies with local laws and regulations. We do not offer services to residents of countries where such services are prohibited by law.
              </p>
              <p className="font-semibold">
                Restricted jurisdictions may include but are not limited to: North Korea, Iran, Syria, Cuba, and other countries subject to international sanctions.
              </p>
            </CardContent>
          </Card>

          {/* No Guarantee of Profits */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">No Guarantee of Profits</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Any references to past performance, historical returns, future projections, or anticipated returns are hypothetical in nature and may not reflect actual future performance. All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns.
              </p>
              <p>
                The projected returns and profit estimates shown on this website are for illustrative purposes only and should not be considered as guaranteed returns. Actual results may differ materially from these projections.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">Third-Party Links and Content</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                This website may contain links to third-party websites or services that are not owned or controlled by TradePulse AI AI Trading or TradePulse AI. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
              </p>
            </CardContent>
          </Card>

          {/* Professional Advice */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">Professional Advice</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                The website cannot and does not contain investment advice. The investment information is provided for general informational and educational purposes only and is not a substitute for professional financial advice.
              </p>
              <p>
                Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate licensed professionals, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Licensed financial advisors</li>
                <li>Tax professionals</li>
                <li>Legal counsel</li>
                <li>Certified accountants</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                To the maximum extent permitted by applicable law, in no event shall TradePulse AI AI Trading, licensed cryptocurrency exchanges, TradePulse AI, or their affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Your access to or use of or inability to access or use the services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Any content obtained from the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Trading losses or investment losses of any kind</li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Disclaimer */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">Changes to This Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Questions About This Disclaimer?</h3>
            <p className="text-gray-300 mb-4">
              If you have any questions about this disclaimer, please contact our support team through the platform.
            </p>
          </CardContent>
        </Card>

        {/* Bottom Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/terms"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            View Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            View Privacy Policy
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium transition-all"
          >
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
}
