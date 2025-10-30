import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Lee Meadows - BG Wealth Sharing",
  description: "Terms and conditions for using BG Wealth Sharing cryptocurrency investment services through Lee Meadows.",
};

export default function TermsPage() {
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
            Legal Agreement
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-lg">
            Last Updated: October 30, 2025
          </p>
        </div>

        {/* Important Notice */}
        <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-amber-950/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-yellow-400">
              <AlertCircle className="h-6 w-6" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 space-y-3">
            <p className="font-semibold">
              Please read these Terms of Service carefully before using our services.
            </p>
            <p>
              By accessing or using the BG Wealth Sharing investment services through Lee Meadows, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* 1. Acceptance of Terms */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <FileText className="h-5 w-5 text-yellow-500" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and BG Wealth Sharing Investment Group, DSJ Exchange, and Lee Meadows (collectively, "we", "us", or "our") concerning your access to and use of our investment services, trading platform, and website.
              </p>
              <p>
                By creating an account, making a deposit, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and Disclaimer.
              </p>
            </CardContent>
          </Card>

          {/* 2. Eligibility */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">2. Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>To use our services, you must meet the following requirements:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Be at least 18 years of age or the legal age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into a binding contract</li>
                <li>Not be a resident of a restricted jurisdiction</li>
                <li>Comply with all applicable local, state, national, and international laws</li>
                <li>Not be listed on any trade or economic sanctions list</li>
                <li>Provide accurate and complete registration information</li>
                <li>Have a valid email address and phone number</li>
              </ul>
              <p className="font-semibold text-white mt-4">
                We reserve the right to refuse service to anyone at any time without prior notice.
              </p>
            </CardContent>
          </Card>

          {/* 3. Account Registration */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">3. Account Registration and Security</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Account Creation</h3>
              <p>
                To access our investment services, you must create an account by contacting Lee Meadows and completing our registration process. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="font-semibold text-white mt-4">Know Your Customer (KYC)</h3>
              <p>
                As part of our compliance with anti-money laundering (AML) and counter-terrorism financing (CTF) regulations, you may be required to complete identity verification procedures. This may include providing:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Government-issued identification documents</li>
                <li>Proof of address</li>
                <li>Source of funds documentation</li>
                <li>Additional information as required by regulatory authorities</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Use a strong, unique password</li>
                <li>Not share your account credentials with others</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Enable two-factor authentication if available</li>
              </ul>
            </CardContent>
          </Card>

          {/* 4. Investment Services */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">4. Investment Services and Trading</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Service Description</h3>
              <p>
                We provide cryptocurrency investment services through our partnership with DSJ Exchange, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>AI-powered trading signals</li>
                <li>Managed investment accounts</li>
                <li>Wealth management planning</li>
                <li>Referral and rewards programs</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Minimum Investment</h3>
              <p>
                The minimum investment amount is $300 USDT. Different investment stages have different minimum requirements as outlined on our website.
              </p>

              <h3 className="font-semibold text-white mt-4">Trading Signals</h3>
              <p>
                While we provide trading signals with stated accuracy rates, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Past performance does not guarantee future results</li>
                <li>Trading signals are for informational purposes only</li>
                <li>You are responsible for your own investment decisions</li>
                <li>Market conditions can change rapidly</li>
                <li>No guarantee of profit is provided or implied</li>
              </ul>
            </CardContent>
          </Card>

          {/* 5. Deposits and Withdrawals */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">5. Deposits and Withdrawals</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Deposits</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Deposits are processed in USDT (Tether)</li>
                <li>Minimum deposit: $300 USDT</li>
                <li>Deposits are credited after blockchain confirmation</li>
                <li>You are responsible for sending to the correct wallet address</li>
                <li>We are not responsible for deposits sent to incorrect addresses</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Withdrawals</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Withdrawals require completion of 1x trading volume</li>
                <li>Processing time: typically 15-30 minutes</li>
                <li>Withdrawal fees may apply as per platform policy</li>
                <li>We reserve the right to request additional verification</li>
                <li>Withdrawals may be delayed or denied if suspicious activity is detected</li>
                <li>Large withdrawals may require additional processing time</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Anti-Money Laundering</h3>
              <p>
                All deposits and withdrawals are subject to AML checks. Suspicious transactions will be reported to relevant authorities.
              </p>
            </CardContent>
          </Card>

          {/* 6. Fees and Charges */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">6. Fees and Charges</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                By using our services, you agree to pay all applicable fees, which may include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Trading fees</li>
                <li>Withdrawal fees</li>
                <li>Platform maintenance fees</li>
                <li>Network transaction fees (blockchain gas fees)</li>
              </ul>
              <p>
                We reserve the right to change our fee structure at any time with advance notice. Continued use of our services after fee changes constitutes acceptance of the new fees.
              </p>
            </CardContent>
          </Card>

          {/* 7. Referral Program */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">7. Referral and Rewards Program</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Referral Terms</h3>
              <p>
                Our referral program allows you to earn rewards for referring new users. By participating, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Only refer genuine users who meet eligibility requirements</li>
                <li>Not engage in spam or misleading promotional activities</li>
                <li>Not create fake accounts or engage in referral fraud</li>
                <li>Comply with all applicable advertising and marketing laws</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Reward Distribution</h3>
              <p>
                Referral rewards are subject to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Verification of the referred user's identity and deposit</li>
                <li>Completion of any required trading volume</li>
                <li>Our anti-fraud review process</li>
                <li>Terms and conditions in effect at the time of referral</li>
              </ul>

              <p className="font-semibold text-white mt-4">
                We reserve the right to suspend or terminate referral accounts suspected of fraud or abuse, and to withhold any pending rewards.
              </p>
            </CardContent>
          </Card>

          {/* 8. Risks and Disclaimers */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5 text-yellow-500" />
                8. Risks and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="font-semibold text-white">
                You acknowledge and agree that cryptocurrency trading involves substantial risk.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>You may lose some or all of your invested capital</li>
                <li>Cryptocurrency values are highly volatile</li>
                <li>Past performance does not indicate future results</li>
                <li>No investment strategy guarantees profit or protects against loss</li>
                <li>You are solely responsible for your investment decisions</li>
                <li>You should only invest funds you can afford to lose</li>
              </ul>
              <p className="mt-4">
                For complete risk disclosures, please see our <Link href="/disclaimer" className="text-yellow-500 hover:underline">Legal Disclaimer</Link>.
              </p>
            </CardContent>
          </Card>

          {/* 9. Prohibited Activities */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">9. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Money laundering or terrorist financing</li>
                <li>Fraudulent activities or misrepresentation</li>
                <li>Market manipulation or insider trading</li>
                <li>Creating multiple accounts to abuse promotions</li>
                <li>Using our services from restricted jurisdictions</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with or disrupting our services</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Harassing or threatening other users or staff</li>
              </ul>
              <p className="font-semibold text-white mt-4">
                Violation of these terms may result in immediate account suspension or termination and reporting to law enforcement.
              </p>
            </CardContent>
          </Card>

          {/* 10. Intellectual Property */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">10. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                All content, features, and functionality on our website and platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of BG Wealth Sharing, DSJ Exchange, or their licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our services without prior written consent.
              </p>
            </CardContent>
          </Card>

          {/* 11. Privacy and Data Protection */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">11. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Your privacy is important to us. Our collection, use, and disclosure of your personal information is governed by our <Link href="/privacy" className="text-yellow-500 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>
              <p>
                By using our services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy and as required by applicable law.
              </p>
            </CardContent>
          </Card>

          {/* 12. Account Suspension and Termination */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">12. Account Suspension and Termination</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Our Right to Suspend or Terminate</h3>
              <p>
                We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Violation of these Terms of Service</li>
                <li>Suspected fraudulent or illegal activity</li>
                <li>Request by law enforcement or regulatory authorities</li>
                <li>Extended period of inactivity</li>
                <li>Risk management purposes</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Your Right to Terminate</h3>
              <p>
                You may terminate your account at any time by contacting customer support. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>You must withdraw all remaining funds (subject to withdrawal requirements)</li>
                <li>Outstanding obligations must be settled</li>
                <li>Your personal data will be handled according to our Privacy Policy</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Effect of Termination</h3>
              <p>
                Upon termination, your right to use our services will immediately cease. Provisions of these Terms that by their nature should survive termination will survive, including disclaimers, limitations of liability, and dispute resolution provisions.
              </p>
            </CardContent>
          </Card>

          {/* 13. Limitation of Liability */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">13. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="font-semibold text-white">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
              </p>
              <p>
                IN NO EVENT SHALL BG WEALTH SHARING, DSJ EXCHANGE, LEE MEADOWS, OR THEIR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Trading losses or investment losses</li>
                <li>Loss of use or downtime</li>
                <li>Cost of substitute services</li>
                <li>Damages resulting from unauthorized access to accounts</li>
              </ul>
              <p className="mt-4">
                WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="font-semibold text-white mt-4">
                AGGREGATE LIABILITY CAP: Our total liability to you for all claims arising from or related to these Terms or our services shall not exceed the amount of fees paid by you to us in the six (6) months preceding the claim.
              </p>
            </CardContent>
          </Card>

          {/* 14. Indemnification */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">14. Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                You agree to defend, indemnify, and hold harmless BG Wealth Sharing, DSJ Exchange, Lee Meadows, and their affiliates, officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Your violation of these Terms of Service</li>
                <li>Your use or misuse of our services</li>
                <li>Your violation of any law, regulation, or third-party rights</li>
                <li>Your trading activities and investment decisions</li>
                <li>Any content you submit or transmit through our services</li>
              </ul>
            </CardContent>
          </Card>

          {/* 15. Dispute Resolution */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">15. Dispute Resolution and Arbitration</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Informal Resolution</h3>
              <p>
                Before filing a formal claim, you agree to first contact us at support@bgwealthsharing.com to attempt to resolve the dispute informally. We will attempt to resolve the dispute within 30 days.
              </p>

              <h3 className="font-semibold text-white mt-4">Binding Arbitration</h3>
              <p>
                If we cannot resolve the dispute informally, any dispute arising from or relating to these Terms or our services shall be resolved through binding arbitration, rather than in court, except that either party may seek injunctive relief in court.
              </p>

              <h3 className="font-semibold text-white mt-4">Class Action Waiver</h3>
              <p>
                You agree that any arbitration or proceeding shall be limited to the dispute between you and us individually. To the full extent permitted by law, you agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>No arbitration or proceeding shall be joined with any other</li>
                <li>There is no right or authority for any dispute to be arbitrated on a class-action basis</li>
                <li>There is no right or authority for any dispute to be brought in a purported representative capacity</li>
              </ul>
            </CardContent>
          </Card>

          {/* 16. Governing Law */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">16. Governing Law and Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Colorado, without regard to its conflict of law provisions.
              </p>
              <p>
                Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Colorado, and you irrevocably consent to personal jurisdiction and venue there.
              </p>
            </CardContent>
          </Card>

          {/* 17. Changes to Terms */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">17. Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after revisions become effective, you agree to be bound by the revised terms.
              </p>
              <p className="font-semibold text-white">
                It is your responsibility to check these Terms periodically for changes.
              </p>
            </CardContent>
          </Card>

          {/* 18. Miscellaneous */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">18. Miscellaneous Provisions</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy and Disclaimer, constitute the entire agreement between you and us regarding our services and supersede all prior agreements.
              </p>

              <h3 className="font-semibold text-white mt-4">Severability</h3>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
              </p>

              <h3 className="font-semibold text-white mt-4">Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h3 className="font-semibold text-white mt-4">Assignment</h3>
              <p>
                You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may assign these Terms at any time without notice.
              </p>

              <h3 className="font-semibold text-white mt-4">Force Majeure</h3>
              <p>
                We shall not be liable for any failure to perform our obligations where such failure results from circumstances beyond our reasonable control, including but not limited to acts of God, war, riot, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">19. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-semibold text-white">BG Wealth Sharing Investment Group</p>
                <p>Email: <span className="text-yellow-500">support@bgwealthsharing.com</span></p>
                <p>Representative: Lee Meadows</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acceptance Acknowledgment */}
        <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-amber-950/20 mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">By using our services, you acknowledge that:</h3>
            <ul className="text-gray-200 space-y-2 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>You have read and understood these Terms of Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>You agree to be bound by these Terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>You understand the risks associated with cryptocurrency trading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>You meet all eligibility requirements</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Bottom Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/disclaimer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            View Disclaimer
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
