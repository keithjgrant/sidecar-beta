export default function isPwa() {
  if (typeof window === 'undefined') {
    return false;
  }
  if (window.location.search.includes('pwa=1')) {
    return true;
  }
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone ||
    document.referrer.includes('android-app://')
  );
}
