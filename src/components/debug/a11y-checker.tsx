'use client';

import React, { useState, useEffect } from 'react';

interface A11yIssue {
  id: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
  description: string;
  help: string;
  nodes: { 
    html: string;
    target: string[];
  }[];
}

const A11yChecker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [issues, setIssues] = useState<A11yIssue[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runA11yCheck = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if axe is available
      if (typeof window !== 'undefined' && !window.axe) {
        // Load axe-core from CDN dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.7.0/axe.min.js';
        script.async = true;
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = () => reject(new Error('Failed to load axe-core'));
          document.body.appendChild(script);
        });
      }
      
      // Run axe
      // @ts-ignore
      const results = await window.axe.run();
      setIssues(results.violations);
    } catch (err) {
      console.error('Error running accessibility check:', err);
      setError('Failed to run accessibility check. Make sure you\'re in a modern browser and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-500';
      case 'serious': return 'bg-orange-500';
      case 'moderate': return 'bg-yellow-500';
      case 'minor': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-lg p-4 text-sm max-w-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-forest-charcoal">♿ Accessibility Checker</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 text-forest-charcoal hover:text-ink-black"
          aria-label={isExpanded ? "Collapse checker" : "Expand checker"}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-2">
          <button
            onClick={runA11yCheck}
            disabled={isLoading}
            className="w-full py-2 bg-moss-olive text-white rounded hover:bg-moss-olive/80 disabled:opacity-50"
          >
            {isLoading ? 'Running check...' : 'Run Accessibility Check'}
          </button>
          
          {error && (
            <div className="mt-2 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {issues.length > 0 && (
            <div className="mt-4 max-h-60 overflow-y-auto">
              <h4 className="font-semibold mb-2">Found {issues.length} issues:</h4>
              
              <ul className="space-y-3">
                {issues.map((issue, index) => (
                  <li key={index} className="p-2 bg-gray-100 rounded">
                    <div className="flex items-center gap-2">
                      <span 
                        className={`${getImpactColor(issue.impact)} w-3 h-3 rounded-full`} 
                        title={`Impact: ${issue.impact}`}
                      ></span>
                      <p className="font-medium">{issue.description}</p>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">{issue.help}</p>
                    
                    {issue.nodes.length > 0 && (
                      <details className="mt-1">
                        <summary className="text-xs cursor-pointer hover:text-moss-olive">
                          Show {issue.nodes.length} affected elements
                        </summary>
                        <ul className="mt-1 space-y-1">
                          {issue.nodes.map((node, nodeIndex) => (
                            <li key={nodeIndex} className="text-xs">
                              <code className="bg-gray-200 p-1 text-xs block overflow-x-auto max-w-full whitespace-pre-wrap">
                                {node.html}
                              </code>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {issues.length === 0 && !isLoading && !error && (
            <p className="mt-2 text-center text-forest-charcoal">
              No issues found or scan not run yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default A11yChecker;