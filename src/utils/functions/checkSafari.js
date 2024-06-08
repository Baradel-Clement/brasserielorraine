/* eslint-disable import/prefer-default-export */
export const checkSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1) {
    if (ua.indexOf('chrome') > -1) {
      return false;
    }
    return true;
  }
  return false;
};
