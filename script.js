import { createRoot } from 'react-dom/client';
//old code
window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }