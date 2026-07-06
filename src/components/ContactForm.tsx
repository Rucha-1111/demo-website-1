import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Building2, User2, CheckCircle2, Loader2, FileCheck, Phone } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    corporateEmail: '',
    phone: '',
    companyName: '',
    serviceArea: 'Tax Advisory',
    valuationRange: '£10M - £50M',
    confidentialMessage: '',
    requestNda: false,
    consentPrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStep, setSubmissionStep] = useState(0); // 0 = Idle, 1 = Encrypting/Securing, 2 = Success
  const [inquiryToken, setInquiryToken] = useState('');

  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setValidationError('');
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.corporateEmail || !formData.companyName || !formData.consentPrivacy) {
      setValidationError('Please specify a corporate email, company name, and accept the compliance disclosure.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStep(1);

    // Simulate multi-tier secure verification handshake
    setTimeout(() => {
      // Generate a realistic secure advisory hash token
      const token = 'VGD-' + Math.floor(100000 + Math.random() * 900000) + '-SEC';
      setInquiryToken(token);
      setSubmissionStep(2);
      setIsSubmitting(false);
    }, 2400);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      corporateEmail: '',
      phone: '',
      companyName: '',
      serviceArea: 'Tax Advisory',
      valuationRange: '£10M - £50M',
      confidentialMessage: '',
      requestNda: false,
      consentPrivacy: false
    });
    setValidationError('');
    setSubmissionStep(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl shadow-2xl relative border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Block */}
        <div className="p-6 sm:p-8 bg-[#1A365D] text-white flex justify-between items-center shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[#3182CE]">
              <ShieldCheck className="w-5 h-5 text-[#3182CE]" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Confidential Secure Channel</span>
            </div>
            <h3 className="serif text-xl sm:text-2xl font-bold text-white">
              Executive Briefing Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-2 border border-white/10 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Container */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          
          {submissionStep === 0 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {validationError && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-xs text-red-800 font-bold">
                  {validationError}
                </div>
              )}

              {/* Row 1: Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">First Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full text-xs bg-slate-50 border border-slate-200 p-3 pl-10 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all placeholder-slate-400"
                      placeholder="e.g. Richard"
                    />
                    <User2 className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 p-3 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all placeholder-slate-400"
                    placeholder="e.g. Sterling"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Corporate Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="corporateEmail"
                      required
                      value={formData.corporateEmail}
                      onChange={handleInputChange}
                      className="w-full text-xs bg-slate-50 border border-slate-200 p-3 pl-10 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all placeholder-slate-400"
                      placeholder="richard@sterling-enterprises.com"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Secure Callback Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full text-xs bg-slate-50 border border-slate-200 p-3 pl-10 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all placeholder-slate-400"
                      placeholder="+44 20 7946 0958"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Row 3: Corporate particulars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Company Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full text-xs bg-slate-50 border border-slate-200 p-3 pl-10 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all placeholder-slate-400"
                      placeholder="Sterling Enterprises Ltd"
                    />
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Primary Advisory Area</label>
                  <select
                    name="serviceArea"
                    value={formData.serviceArea}
                    onChange={handleInputChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 p-3 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all"
                  >
                    <option value="Audit & Assurance">Audit & Assurance</option>
                    <option value="Tax Advisory">Bespoke Tax Advisory</option>
                    <option value="Corporate Finance">Corporate Finance & M&A</option>
                    <option value="Strategic Wealth">Strategic Wealth & Family Office</option>
                  </select>
                </div>
              </div>

              {/* Enterprise Valuation Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Approximate Enterprise Valuation</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Under £10M', '£10M - £50M', '£50M - £250M', '£250M+'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, valuationRange: range }))}
                      className={`py-2 px-3 text-xs border text-center transition-all ${
                        formData.valuationRange === range
                          ? 'border-[#1A365D] bg-[#1A365D] text-white font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Briefing text area */}
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-widest font-bold text-slate-700 block">Confidential Briefing Message</label>
                <textarea
                  name="confidentialMessage"
                  rows={4}
                  value={formData.confidentialMessage}
                  onChange={handleInputChange}
                  className="w-full text-xs bg-slate-50 border border-slate-200 p-3 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all placeholder-slate-400"
                  placeholder="Outline key advisory parameters, timeline considerations, or transaction frameworks (avoid precise account numbers)..."
                />
              </div>

              {/* NDA Checkbox and privacy consent */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="requestNda"
                    checked={formData.requestNda}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#1A365D] border-slate-300 rounded-none focus:ring-[#1A365D] mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#3182CE]" />
                      <span>Request mutual NDA execution prior to call</span>
                    </span>
                    <span className="block text-[10px] text-slate-500 font-light mt-0.5">
                      Our legal department will forward a standard bilateral Non-Disclosure Agreement for electronic signature.
                    </span>
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentPrivacy"
                    required
                    checked={formData.consentPrivacy}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#1A365D] border-slate-300 rounded-none focus:ring-[#1A365D] mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900">
                      Privacy Disclosure & Corporate Compliance
                    </span>
                    <span className="block text-[10px] text-slate-500 font-light mt-0.5">
                      By submitting, you consent to Vanguard & Co. utilizing these data parameters to conduct initial public registries conflict checks. No data is shared with third parties.
                    </span>
                  </div>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-center text-xs uppercase tracking-widest font-bold px-6 py-3 border border-slate-200 hover:border-slate-400 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-center text-xs uppercase tracking-widest font-bold px-8 py-3.5 bg-[#1A365D] hover:bg-[#3182CE] text-white transition-all shadow-md"
                >
                  Dispatch Advisory Request
                </button>
              </div>

            </form>
          )}

          {submissionStep === 1 && (
            <div className="py-20 flex flex-col items-center justify-center space-y-6 text-center">
              <Loader2 className="w-12 h-12 text-[#1A365D] animate-spin" />
              <div className="space-y-2">
                <h4 className="serif text-lg font-bold text-slate-950">Establishing Secure Handshake</h4>
                <p className="text-xs text-slate-500 max-w-sm font-light leading-relaxed">
                  Enforcing TLS 1.3 encryption matrices and dispatching conflict-of-interest query parameters across Vanguard databases...
                </p>
              </div>
            </div>
          )}

          {submissionStep === 2 && (
            <div className="py-12 space-y-8 max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 flex items-center justify-center rounded-full mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>

              <div className="space-y-3">
                <h4 className="serif text-2xl font-bold text-slate-950">Dispatch Confirmed</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Your corporate advisory briefing has been registered under absolute confidentiality protocols. A unique transaction hash has been generated for your record tracking:
                </p>
              </div>

              {/* Encryption token card */}
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-none font-mono text-xs text-slate-800 select-all font-semibold tracking-wider">
                {inquiryToken}
              </div>

              <div className="p-5 bg-[#F8FAFC] border border-[#1A365D]/10 text-left rounded-none space-y-2">
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#1A365D]">Next Action Sequences:</h5>
                <ul className="text-[10px] text-[#1A365D] font-light list-disc pl-4 space-y-1.5 leading-relaxed">
                  <li>Our compliance team will conduct automated conflict registries checks.</li>
                  {formData.requestNda && (
                    <li>A bilateral NDA document will be issued to <strong className="font-bold">{formData.corporateEmail}</strong> via DocuSign.</li>
                  )}
                  <li>A Vanguard Partner will contact you to establish secure callback verification within 2 business hours.</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full text-center text-xs uppercase tracking-widest font-bold py-3.5 bg-[#1A365D] hover:bg-[#3182CE] text-white transition-all shadow-sm"
              >
                Return to Portal
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
