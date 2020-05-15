import { useState, useEffect } from 'react';

export default function useWebP() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    canUseWebP().then((bool) => setSupported(bool));
  });

  return supported;
}

function canUseWebP() {
  const promise = new Promise((resolve) => {
    var img = new Image();
    img.onload = function () {
      resolve(!!(img.height > 0 && img.width > 0));
    };
    img.onerror = function () {
      resolve(false);
    };
    img.src =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  });
  return promise;
}
