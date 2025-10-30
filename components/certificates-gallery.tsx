import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Shield, Award, FileCheck } from "lucide-react";

export function CertificatesGallery() {
  const certificates = [
    {
      title: "SEC License",
      organization: "U.S. Securities & Exchange Commission",
      image: "/images/certificates/sec-license-bg.jpg",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "ASIC Registration",
      organization: "Australian Securities & Investments Commission",
      image: "/images/certificates/asic-registration.jpg",
      icon: Award,
      color: "text-green-400"
    },
    {
      title: "DSJ Authorization",
      organization: "DSJ Exchange Partnership",
      image: "/images/certificates/dsjex-authorization.png",
      icon: FileCheck,
      color: "text-yellow-400"
    },
    {
      title: "Stock Certificate",
      organization: "BG Wealth Sharing LTD - Stephen Beard",
      image: "/images/certificates/stock-certificate.jpg",
      icon: FileCheck,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Shield className="h-3 w-3 mr-1" />
            Regulatory Compliance
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Licensed & Certified
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fully licensed and registered with major financial regulatory authorities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all overflow-hidden group"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} - ${cert.organization}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full bg-black/50 flex items-center justify-center ${cert.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-white font-bold text-sm">{cert.title}</h3>
                    </div>
                    <p className="text-xs text-gray-300">{cert.organization}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Legal Documents */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/images/certificates/five-advantages.jpg"
                alt="Five advantages of BG Wealth Sharing"
                fill
                className="object-cover"
              />
            </div>
          </Card>
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/images/certificates/investment-commitment-letter.png"
                alt="Investment Partnership Commitment Letter"
                fill
                className="object-cover"
              />
            </div>
          </Card>
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/images/certificates/colorado-certificate.jpg"
                alt="Colorado State Certificate"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
