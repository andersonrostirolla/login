const touchUserAgents: Array<RegExp> = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
];

export const isTouchDevice = (): boolean => {
  return touchUserAgents.some(userAgent => window.navigator.userAgent.match(userAgent));
};

export const isMobile = (): boolean => {
  return isTouchDevice() && window.screen.width < 1024;
};
