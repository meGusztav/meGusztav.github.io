import { createRoot } from 'react-dom/client';
//old code
			window.onload = function() { document.body.classList.remove('is-preload'); }
			window.ontouchmove = function() { return false; }
// Clear the existing HTML content
document.body.innerHTML = '<div id="wrapper"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);