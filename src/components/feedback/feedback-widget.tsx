'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/button';

type FeedbackType = 'positive' | 'suggestion' | 'issue' | null;

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackType || !feedbackText.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFeedbackText('');
      setFeedbackType(null);
      
      // Auto close after feedback submission
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setFeedbackType(null);
    setFeedbackText('');
    setIsSubmitted(false);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg border border-moss-olive/20 w-80">
          <div className="bg-forest-charcoal text-soft-ivory p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-mortuary">Share Your Feedback</h3>
            <button 
              onClick={() => {
                setIsOpen(false);
                resetForm();
              }}
              className="text-soft-ivory/70 hover:text-soft-ivory"
              aria-label="Close feedback form"
            >
              &times;
            </button>
          </div>
          
          <div className="p-4">
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="text-moss-olive text-2xl mb-2">Thank You</div>
                <p className="text-forest-charcoal">Your feedback helps us improve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">What type of feedback do you have?</label>
                  <div className="space-y-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          name="feedbackType" 
                          className="text-moss-olive" 
                          checked={feedbackType === 'positive'}
                          onChange={() => setFeedbackType('positive')}
                        />
                        <span className="ml-2">Positive feedback</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          name="feedbackType" 
                          className="text-moss-olive" 
                          checked={feedbackType === 'suggestion'}
                          onChange={() => setFeedbackType('suggestion')}
                        />
                        <span className="ml-2">Suggestion</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          name="feedbackType" 
                          className="text-moss-olive" 
                          checked={feedbackType === 'issue'}
                          onChange={() => setFeedbackType('issue')}
                        />
                        <span className="ml-2">Something needs attention</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="feedbackText" className="block mb-2">Your feedback</label>
                  <textarea 
                    id="feedbackText"
                    rows={4}
                    className="w-full p-2 border border-moss-olive/30 rounded-lg focus:border-moss-olive focus:outline-none"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Tell us your thoughts..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={!feedbackType || !feedbackText.trim() || isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Feedback'}
                </Button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-moss-olive hover:bg-forest-charcoal text-soft-ivory p-3 rounded-full shadow-lg transition-all"
          aria-label="Open feedback form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
}