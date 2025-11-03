'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.preferredDate.trim()) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Please select a preferred time';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredDate: '',
      preferredTime: '',
    });
    setErrors({});
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success state
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const ampm = hour < 12 ? 'AM' : 'PM';
      const hour12 = hour <= 12 ? hour : hour - 12;
      timeSlots.push(`${hour12}:00 ${ampm}`);
      if (hour !== 17) {
        timeSlots.push(`${hour12}:30 ${ampm}`);
      }
    }
    return timeSlots;
  };
  
  // Generate dates for the next 14 days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toISOString().split('T')[0];
        dates.push(formattedDate);
      }
    }
    
    return dates;
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-deep-slate/30 p-6 sm:p-8 rounded-lg text-center border border-deep-slate/30">
        <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4 text-pale-stone">Thank You</h3>
        <p className="mb-5 sm:mb-6 text-sm sm:text-base text-pale-stone/90">
          We've received your consultation request and will be in touch within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-normal tracking-wide bg-golden-ochre text-midnight-moss rounded-full border border-golden-ochre hover:bg-golden-ochre/90 transition-all duration-300"
          style={{ borderRadius: '12px' }}
        >
          Schedule Another Consultation
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm sm:text-base text-pale-stone">Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
            className={`w-full p-2.5 sm:p-3 text-sm sm:text-base border ${errors.name ? 'border-red-500' : 'border-pale-stone/30'} rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60`}
          />
          {errors.name && <p id="name-error" className="text-red-400 text-xs sm:text-sm mt-1" aria-live="polite">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1 text-sm sm:text-base text-pale-stone">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="your.email@example.com"
            className={`w-full p-2.5 sm:p-3 text-sm sm:text-base border ${errors.email ? 'border-red-500' : 'border-pale-stone/30'} rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60`}
          />
          {errors.email && <p id="email-error" className="text-red-400 text-xs sm:text-sm mt-1" aria-live="polite">{errors.email}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block mb-1 text-sm sm:text-base text-pale-stone">Phone</label>
        <input 
          type="tel" 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : "phone-format"}
          className={`w-full p-2.5 sm:p-3 text-sm sm:text-base border ${errors.phone ? 'border-red-500' : 'border-pale-stone/30'} rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60`}
          placeholder="(123) 456-7890"
        />
        <p id="phone-format" className="text-pale-stone/60 text-xs mt-1">Format: (123) 456-7890</p>
        {errors.phone && <p id="phone-error" className="text-red-400 text-xs sm:text-sm mt-1" aria-live="polite">{errors.phone}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="preferredDate" className="block mb-1 text-sm sm:text-base text-pale-stone">Preferred Date</label>
          <select
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className={`w-full p-2.5 sm:p-3 text-sm sm:text-base border ${errors.preferredDate ? 'border-red-500' : 'border-pale-stone/30'} rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone`}
          >
            <option value="" className="text-charred-plum bg-white">Select a date</option>
            {generateAvailableDates().map(date => (
              <option key={date} value={date} className="text-charred-plum bg-white">
                {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </option>
            ))}
          </select>
          {errors.preferredDate && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.preferredDate}</p>}
        </div>
        
        <div>
          <label htmlFor="preferredTime" className="block mb-1 text-sm sm:text-base text-pale-stone">Preferred Time</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`w-full p-2.5 sm:p-3 text-sm sm:text-base border ${errors.preferredTime ? 'border-red-500' : 'border-pale-stone/30'} rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone`}
          >
            <option value="" className="text-charred-plum bg-white">Select a time</option>
            {generateTimeSlots().map(time => (
              <option key={time} value={time} className="text-charred-plum bg-white">{time}</option>
            ))}
          </select>
          {errors.preferredTime && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.preferredTime}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-1 text-sm sm:text-base text-pale-stone">Tell us about your needs <span className="text-pale-stone/60 font-normal">(optional)</span></label>
        <textarea 
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can assist you..."
          className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-pale-stone/30 rounded-lg bg-transparent focus:border-pale-stone focus:outline-none text-pale-stone placeholder:text-pale-stone/60 resize-none"
        ></textarea>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
        <button
          type="button"
          onClick={handleClear}
          className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-normal tracking-wide text-pale-stone/80 hover:text-pale-stone transition-all duration-300 bg-transparent border-none outline-none order-2 sm:order-1"
        >
          Clear Form
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-5 py-2.5 text-sm sm:text-base font-normal tracking-wide bg-golden-ochre text-midnight-moss rounded-full border border-golden-ochre hover:bg-golden-ochre/90 transition-all duration-300 order-1 sm:order-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          style={{ borderRadius: '12px' }}
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
        </button>
      </div>
    </form>
  );
}