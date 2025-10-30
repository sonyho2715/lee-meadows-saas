import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Lee Meadows - BG Wealth Sharing",
  description: "Privacy policy explaining how BG Wealth Sharing collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
            Privacy & Data Protection
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Last Updated: October 30, 2025
          </p>
        </div>

        {/* Privacy Commitment */}
        <Card className="border-2 border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-blue-950/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-blue-400">
              <Shield className="h-6 w-6" />
              Our Commitment to Your Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 space-y-3">
            <p>
              BG Wealth Sharing Investment Group, DSJ Exchange, and Lee Meadows ("we", "us", or "our") are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our investment services and website.
            </p>
            <p className="font-semibold">
              By using our services, you consent to the data practices described in this policy.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {/* 1. Information We Collect */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Database className="h-5 w-5 text-yellow-500" />
                1. Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h3 className="font-semibold text-white">Personal Information</h3>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Identity Information:</strong> Full name, date of birth, nationality, government-issued ID</li>
                <li><strong>Contact Information:</strong> Email address, phone number, mailing address</li>
                <li><strong>Financial Information:</strong> Bank account details, cryptocurrency wallet addresses, transaction history</li>
                <li><strong>Verification Documents:</strong> Passport, driver's license, utility bills for address verification</li>
                <li><strong>Account Credentials:</strong> Username, password, security questions</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Automatically Collected Information</h3>
              <p>When you access our website or use our services, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, click patterns, referring website</li>
                <li><strong>Transaction Information:</strong> Trading activity, deposit/withdrawal history, order details</li>
                <li><strong>Cookies and Tracking:</strong> Session cookies, preference cookies, analytics cookies</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Information from Third Parties</h3>
              <p>We may receive information from:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Identity verification services</li>
                <li>Credit reporting agencies</li>
                <li>Fraud prevention services</li>
                <li>Blockchain analytics providers</li>
                <li>Public databases and government records</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. How We Use Your Information */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <UserCheck className="h-5 w-5 text-yellow-500" />
                2. How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>We use the information we collect for the following purposes:</p>

              <h3 className="font-semibold text-white">Service Provision</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Create and manage your account</li>
                <li>Process deposits, withdrawals, and trades</li>
                <li>Provide trading signals and investment services</li>
                <li>Process referral rewards and bonuses</li>
                <li>Facilitate customer support</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Compliance and Security</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Verify your identity (KYC/AML compliance)</li>
                <li>Prevent fraud, money laundering, and illegal activities</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Detect and prevent security threats</li>
                <li>Maintain audit trails and records</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Communication</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Send you service-related notifications</li>
                <li>Provide trading signals and market updates</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Notify you of changes to our services or policies</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Improvement and Analytics</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Analyze usage patterns and trends</li>
                <li>Improve our services and user experience</li>
                <li>Develop new features and products</li>
                <li>Conduct market research</li>
                <li>Monitor and analyze the effectiveness of our marketing</li>
              </ul>
            </CardContent>
          </Card>

          {/* 3. How We Share Your Information */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">3. How We Share Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>We may share your information in the following circumstances:</p>

              <h3 className="font-semibold text-white">Service Providers</h3>
              <p>
                We share information with third-party service providers who perform services on our behalf:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Payment processors and financial institutions</li>
                <li>Identity verification and KYC service providers</li>
                <li>Cloud hosting and data storage providers</li>
                <li>Customer support and communication platforms</li>
                <li>Analytics and marketing services</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Legal and Regulatory Compliance</h3>
              <p>
                We may disclose your information when required by law or to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Comply with legal obligations, court orders, or government requests</li>
                <li>Respond to regulatory inquiries or investigations</li>
                <li>Report suspicious activities to law enforcement</li>
                <li>Cooperate with tax authorities</li>
                <li>Enforce our Terms of Service and other agreements</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
              </p>

              <h3 className="font-semibold text-white mt-4">With Your Consent</h3>
              <p>
                We may share your information with other parties when you provide explicit consent to do so.
              </p>

              <h3 className="font-semibold text-white mt-4">Aggregated Data</h3>
              <p>
                We may share aggregated or de-identified information that cannot reasonably be used to identify you for research, analytics, or marketing purposes.
              </p>
            </CardContent>
          </Card>

          {/* 4. Data Security */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Lock className="h-5 w-5 text-yellow-500" />
                4. Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information:
              </p>

              <h3 className="font-semibold text-white">Technical Measures</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Two-factor authentication (2FA) options</li>
                <li>Regular security audits and penetration testing</li>
                <li>Firewalls and intrusion detection systems</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Organizational Measures</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Access controls and role-based permissions</li>
                <li>Employee training on data protection</li>
                <li>Confidentiality agreements with staff and vendors</li>
                <li>Incident response procedures</li>
                <li>Regular security policy reviews</li>
              </ul>

              <p className="font-semibold text-white mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* 5. Data Retention */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">5. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h3 className="font-semibold text-white">Retention Periods</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
                <li><strong>Closed Accounts:</strong> Data retained for 7 years after account closure (regulatory requirement)</li>
                <li><strong>Transaction Records:</strong> Retained for 7 years for compliance purposes</li>
                <li><strong>KYC Documents:</strong> Retained for 7 years after last transaction</li>
                <li><strong>Marketing Data:</strong> Retained until you withdraw consent or 2 years of inactivity</li>
              </ul>

              <p className="mt-4">
                After the retention period expires, we will securely delete or anonymize your personal information.
              </p>
            </CardContent>
          </Card>

          {/* 6. Your Rights and Choices */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">6. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <h3 className="font-semibold text-white">Access and Portability</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Request access to your personal information</li>
                <li>Receive a copy of your data in a portable format</li>
                <li>Request information about how we process your data</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Correction and Updates</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Update or correct inaccurate information</li>
                <li>Complete incomplete information</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Deletion (Right to be Forgotten)</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Request deletion of your personal information</li>
                <li>Subject to legal retention requirements</li>
                <li>May prevent use of certain services</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Restriction and Objection</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Object to processing of your information</li>
                <li>Restrict certain uses of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Withdraw Consent</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Withdraw consent for data processing where consent was the legal basis</li>
                <li>Does not affect lawfulness of processing before withdrawal</li>
              </ul>

              <p className="font-semibold text-white mt-4">
                To exercise these rights, please contact us at support@bgwealthsharing.com. We will respond to your request within 30 days.
              </p>
            </CardContent>
          </Card>

          {/* 7. Cookies and Tracking */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">7. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We use cookies and similar tracking technologies to collect and use personal information about you. For detailed information about the cookies we use, see below:
              </p>

              <h3 className="font-semibold text-white">Types of Cookies</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white">Essential Cookies</p>
                  <p className="text-sm">Required for the website to function. Cannot be disabled.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Performance Cookies</p>
                  <p className="text-sm">Help us understand how visitors use our website (e.g., Google Analytics).</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Functionality Cookies</p>
                  <p className="text-sm">Remember your preferences and settings.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Marketing Cookies</p>
                  <p className="text-sm">Track your visits across websites to deliver targeted advertising.</p>
                </div>
              </div>

              <h3 className="font-semibold text-white mt-4">Managing Cookies</h3>
              <p>
                You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
            </CardContent>
          </Card>

          {/* 8. International Data Transfers */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">8. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
              </p>
              <p>
                When we transfer your personal information internationally, we implement appropriate safeguards, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions for data transfers to certain countries</li>
                <li>Privacy Shield certification (where applicable)</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
            </CardContent>
          </Card>

          {/* 9. Children's Privacy */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>
              <p>
                If we discover that we have collected personal information from a child under 18, we will take steps to delete such information as soon as possible.
              </p>
              <p>
                If you believe we have collected information from a child under 18, please contact us immediately at support@bgwealthsharing.com.
              </p>
            </CardContent>
          </Card>

          {/* 10. Third-Party Links */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">10. Third-Party Websites and Services</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Our website may contain links to third-party websites, applications, or services that are not operated by us. This Privacy Policy does not apply to third-party websites.
              </p>
              <p>
                We are not responsible for the privacy practices of third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </CardContent>
          </Card>

          {/* 11. California Privacy Rights */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">11. California Privacy Rights (CCPA)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
              </p>

              <h3 className="font-semibold text-white">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Right to know what personal information we collect, use, and disclose</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>

              <p className="mt-4">
                To exercise these rights, contact us at support@bgwealthsharing.com with "California Privacy Rights" in the subject line.
              </p>
            </CardContent>
          </Card>

          {/* 12. European Privacy Rights */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">12. European Privacy Rights (GDPR)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
              </p>

              <h3 className="font-semibold text-white">Legal Basis for Processing</h3>
              <p>We process your personal information based on:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Contract:</strong> To provide services you requested</li>
                <li><strong>Legal Obligation:</strong> To comply with laws and regulations</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li><strong>Consent:</strong> For marketing communications and optional features</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Data Protection Officer</h3>
              <p>
                You can contact our Data Protection Officer at: dpo@bgwealthsharing.com
              </p>

              <h3 className="font-semibold text-white mt-4">Supervisory Authority</h3>
              <p>
                You have the right to lodge a complaint with your local data protection supervisory authority.
              </p>
            </CardContent>
          </Card>

          {/* 13. Changes to Privacy Policy */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-white">13. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons.
              </p>
              <p>
                We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending an email notification (for significant changes)</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="font-semibold text-white mt-4">
                Your continued use of our services after changes are posted constitutes your acceptance of the updated Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Eye className="h-5 w-5 text-yellow-500" />
                14. Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-3 mt-4 p-4 bg-[#0a0e27]/50 rounded-lg">
                <p className="font-semibold text-white">BG Wealth Sharing Investment Group</p>
                <p><strong>General Inquiries:</strong> <span className="text-yellow-500">support@bgwealthsharing.com</span></p>
                <p><strong>Privacy Matters:</strong> <span className="text-yellow-500">privacy@bgwealthsharing.com</span></p>
                <p><strong>Data Protection Officer:</strong> <span className="text-yellow-500">dpo@bgwealthsharing.com</span></p>
                <p><strong>Representative:</strong> Lee Meadows</p>
              </div>

              <p className="text-sm italic mt-4">
                We aim to respond to all privacy inquiries within 30 days.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/disclaimer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            View Disclaimer
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            View Terms of Service
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
