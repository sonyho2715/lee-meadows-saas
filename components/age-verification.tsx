"use client";

import { useState, useEffect } from "react";
import { Shield, AlertTriangle, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const verified = localStorage.getItem("age_verified");
    if (verified === "true") {
      setIsVerified(true);
    } else {
      // Show modal after 1 second
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("age_verified", "true");
    setIsVerified(true);
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirect to a warning page or close the site
    window.location.href = "https://www.google.com";
  };

  if (isVerified || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Modal */}
      <div className="relative max-w-md w-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-2xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-hidden">
        {/* Header with icon */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-600/20 p-6 border-b border-yellow-500/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">Age Verification Required</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-amber-500 mb-1">Important Notice</p>
              <p>
                This website offers cryptocurrency investment services. You must be at least 18 years old
                to access this platform and participate in investment activities.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-400">
            <p>By clicking "I Confirm", you certify that:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                <span>You are 18 years of age or older</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                <span>You understand the risks associated with cryptocurrency investment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                <span>You are legally permitted to invest in your jurisdiction</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                <span>You have read and accept our Terms of Service and Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleConfirm}
              className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold py-6"
            >
              I Confirm (18+)
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-red-500/30 text-red-500 hover:bg-red-500/10 py-6"
            >
              I Decline
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500 pt-2">
            Your confirmation will be stored locally. We do not collect or store age verification data.
          </p>
        </div>
      </div>
    </div>
  );
}
