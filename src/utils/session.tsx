export const setSessionStorage = (key: string, value: any): unknown => {
  return window.sessionStorage.setItem(key, value);
};

export const getSessionStorage = (key: string): string => {
  return window.sessionStorage.getItem(key) || '';
};
