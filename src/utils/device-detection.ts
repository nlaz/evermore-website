/**
 * Utility functions for device and browser detection to help with testing
 */

// Device types
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

// Browser types
export type BrowserType = 'chrome' | 'firefox' | 'safari' | 'edge' | 'other';

/**
 * Detect current device type based on window width
 */
export const getDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'desktop'; // Default for SSR
  
  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Detect browser type
 */
export const getBrowserType = (): BrowserType => {
  if (typeof window === 'undefined') return 'other'; // Default for SSR
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.indexOf('edge') > -1 || userAgent.indexOf('edg/') > -1) return 'edge';
  if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('edg/') === -1) return 'chrome';
  if (userAgent.indexOf('firefox') > -1) return 'firefox';
  if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) return 'safari';
  
  return 'other';
};

/**
 * Get current viewport dimensions
 */
export const getViewportDimensions = () => {
  if (typeof window === 'undefined') return { width: 1200, height: 800 }; // Default for SSR
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

/**
 * Check if the device supports touch
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false; // Default for SSR
  
  return 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0;
};

/**
 * Generate browser and device information for testing
 */
export const getDeviceInfo = () => {
  if (typeof window === 'undefined') return 'Server Side Rendering';
  
  return {
    deviceType: getDeviceType(),
    browserType: getBrowserType(),
    viewport: getViewportDimensions(),
    touchSupport: isTouchDevice(),
    userAgent: window.navigator.userAgent,
    pixelRatio: window.devicePixelRatio
  };
};