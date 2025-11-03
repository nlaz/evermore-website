'use client';

import React, { useState, useEffect } from 'react';
import BrowserInfo from '@/components/debug/browser-info';
import A11yChecker from '@/components/debug/a11y-checker';
import Link from 'next/link';

// User journeys to test
const userJourneys = [
  {
    id: 'info-seeking',
    name: 'Information Seeking',
    steps: [
      { id: 'home', description: 'Navigate to homepage', path: '/' },
      { id: 'services', description: 'Read service details', path: '/#services' },
      { id: 'testimonials', description: 'Find testimonials', path: '/#testimonials' },
      { id: 'faq', description: 'Check FAQ section', path: '/#faq' }
    ]
  },
  {
    id: 'consultation',
    name: 'Consultation Booking',
    steps: [
      { id: 'home', description: 'Start at homepage', path: '/' },
      { id: 'consult-nav', description: 'Navigate to consultation page', path: '/consultation' },
      { id: 'complete-form', description: 'Complete booking form', path: '/consultation' },
      { id: 'submit', description: 'Submit form', path: '/consultation' }
    ]
  },
  {
    id: 'resources',
    name: 'Resource Access',
    steps: [
      { id: 'home', description: 'Start at homepage', path: '/' },
      { id: 'resources-nav', description: 'Navigate to resources', path: '/resources' },
      { id: 'family-guide', description: 'Access family guide', path: '/resources/family-guide' }
    ]
  }
];

interface TestResult {
  journeyId: string;
  stepId: string;
  status: 'pending' | 'pass' | 'fail';
  notes: string;
  timestamp?: string;
}

const TestingPage = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [activeJourney, setActiveJourney] = useState<string | null>(null);
  const [currentNotes, setCurrentNotes] = useState<string>('');
  
  // Initialize test results
  useEffect(() => {
    const initialResults: TestResult[] = [];
    
    userJourneys.forEach(journey => {
      journey.steps.forEach(step => {
        initialResults.push({
          journeyId: journey.id,
          stepId: step.id,
          status: 'pending',
          notes: ''
        });
      });
    });
    
    // Load from localStorage if available
    const savedResults = localStorage.getItem('evermore-test-results');
    if (savedResults) {
      setTestResults(JSON.parse(savedResults));
    } else {
      setTestResults(initialResults);
    }
  }, []);
  
  // Save results to localStorage
  useEffect(() => {
    if (testResults.length > 0) {
      localStorage.setItem('evermore-test-results', JSON.stringify(testResults));
    }
  }, [testResults]);
  
  const updateStepStatus = (journeyId: string, stepId: string, status: 'pass' | 'fail') => {
    setTestResults(prev => 
      prev.map(result => 
        result.journeyId === journeyId && result.stepId === stepId
          ? { 
              ...result, 
              status, 
              notes: currentNotes,
              timestamp: new Date().toISOString()
            }
          : result
      )
    );
    
    setCurrentNotes('');
  };
  
  const getStepResult = (journeyId: string, stepId: string) => {
    return testResults.find(
      result => result.journeyId === journeyId && result.stepId === stepId
    );
  };
  
  const resetAllTests = () => {
    if (confirm('Are you sure you want to reset all test results?')) {
      const resetResults = testResults.map(result => ({
        ...result,
        status: 'pending' as const,
        notes: '',
        timestamp: undefined
      }));
      
      setTestResults(resetResults);
    }
  };
  
  const exportResults = () => {
    const dataStr = JSON.stringify(testResults, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = `evermore-test-results-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  
  return (
    <div className="min-h-screen bg-soft-ivory">
      <BrowserInfo showDetailed={true} />
      <A11yChecker />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-mortuary text-forest-charcoal">Evermore Testing</h1>
          
          <div className="space-x-4">
            <button 
              onClick={resetAllTests}
              className="px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200"
            >
              Reset All Tests
            </button>
            
            <button 
              onClick={exportResults}
              className="px-4 py-2 bg-forest-charcoal text-soft-ivory rounded hover:bg-ink-black"
            >
              Export Results
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userJourneys.map(journey => (
            <div key={journey.id} className="border border-moss-olive/30 rounded-lg bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink-black mb-4">{journey.name}</h2>
              
              <div className="space-y-4">
                {journey.steps.map(step => {
                  const result = getStepResult(journey.id, step.id);
                  
                  return (
                    <div key={step.id} className="border-b border-moss-olive/10 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{step.description}</p>
                          <Link 
                            href={step.path}
                            className="text-sm text-moss-olive hover:underline block mt-1"
                            target="_blank"
                          >
                            {step.path} ↗
                          </Link>
                          
                          {result?.timestamp && (
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(result.timestamp).toLocaleString()}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateStepStatus(journey.id, step.id, 'pass')}
                            className={`px-3 py-1 rounded ${
                              result?.status === 'pass' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            Pass
                          </button>
                          
                          <button
                            onClick={() => updateStepStatus(journey.id, step.id, 'fail')}
                            className={`px-3 py-1 rounded ${
                              result?.status === 'fail' 
                                ? 'bg-red-500 text-white' 
                                : 'bg-red-100 text-red-800 hover:bg-red-200'
                            }`}
                          >
                            Fail
                          </button>
                        </div>
                      </div>
                      
                      {result?.status === 'fail' && result?.notes && (
                        <div className="mt-2 text-sm bg-red-50 p-2 rounded">
                          <p className="font-medium text-red-700">Issue notes:</p>
                          <p className="text-red-600">{result.notes}</p>
                        </div>
                      )}
                      
                      {(activeJourney === journey.id && step.id === journey.steps[0].id) && (
                        <div className="mt-3">
                          <textarea
                            value={currentNotes}
                            onChange={(e) => setCurrentNotes(e.target.value)}
                            placeholder="Add test notes here..."
                            className="w-full p-2 border border-moss-olive/30 rounded text-sm"
                            rows={3}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <button
                onClick={() => setActiveJourney(activeJourney === journey.id ? null : journey.id)}
                className="mt-4 text-sm text-moss-olive hover:text-ink-black"
              >
                {activeJourney === journey.id ? 'Hide Notes' : 'Add Notes'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestingPage;