'use client';

import React, { useState, useEffect } from 'react';
import { getDeviceInfo, DeviceType, BrowserType } from '@/utils/device-detection';

type DeviceInfo = {
  deviceType: DeviceType;
  browserType: BrowserType;
  viewport: { width: number; height: number };
  touchSupport: boolean;
  userAgent: string;
  pixelRatio: number;
};

const BrowserInfo = ({ showDetailed = false }: { showDetailed?: boolean }) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateDeviceInfo = () => {
      setDeviceInfo(getDeviceInfo() as DeviceInfo);
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    
    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
    };
  }, []);

  if (!deviceInfo || !isVisible) return null;

  const getDeviceIcon = (deviceType: DeviceType) => {
    switch (deviceType) {
      case 'mobile': return '📱';
      case 'tablet': return '📟';
      case 'desktop': return '🖥️';
    }
  };

  const getBrowserIcon = (browserType: BrowserType) => {
    switch (browserType) {
      case 'chrome': return '🌐 Chrome';
      case 'firefox': return '🦊 Firefox';
      case 'safari': return '🧭 Safari';
      case 'edge': return '🌀 Edge';
      default: return '🌐 Other';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white bg-opacity-90 shadow-lg rounded-lg p-3 text-sm max-w-xs">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-forest-charcoal">
          {getDeviceIcon(deviceInfo.deviceType)} {deviceInfo.deviceType.charAt(0).toUpperCase() + deviceInfo.deviceType.slice(1)} - 
          {getBrowserIcon(deviceInfo.browserType)}
        </h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-2 text-forest-charcoal hover:text-ink-black"
          aria-label="Close browser info"
        >
          ✕
        </button>
      </div>
      
      <div className="mt-1 text-forest-charcoal">
        <p>Viewport: {deviceInfo.viewport.width}x{deviceInfo.viewport.height}</p>
        <p>Pixel Ratio: {deviceInfo.pixelRatio}</p>
        <p>Touch: {deviceInfo.touchSupport ? 'Yes' : 'No'}</p>
        
        {showDetailed && (
          <div className="mt-2 text-xs overflow-hidden overflow-ellipsis">
            <details>
              <summary className="cursor-pointer">User Agent</summary>
              <p className="break-all mt-1">{deviceInfo.userAgent}</p>
            </details>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowserInfo;