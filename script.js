import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Import React and ReactDOM

// 2. Create a simple React component
function HelloReact() {
    return React.createElement(
        'div',
        { style: { padding: '1em', background: '#f0f0f0', borderRadius: '8px' } },
        React.createElement('h2', null, 'Hello from React!'),
        React.createElement('p', null, 'This is a React component rendered inside your webpage.')
    );
}

// 3. Create a container for the React component if it doesn't exist
let reactRoot = document.getElementById('react-root');
if (!reactRoot) {
    reactRoot = document.createElement('div');
    reactRoot.id = 'react-root';
    document.body.prepend(reactRoot);
}

// 4. Render the React component
const root = ReactDOM.createRoot(reactRoot);
root.render(React.createElement(HelloReact));

/*
Steps to implement:
1. Install React and ReactDOM via npm or include them via CDN in your HTML:
   <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
2. Add a <div id="react-root"></div> to your HTML body, or let the script create it.
3. Place this script in your HTML after the React/ReactDOM scripts (if using CDN).
4. The React component will render at the top of your page.
*/

window.onload = function() {
    document.body.classList.remove('is-preload');
};

window.ontouchmove = function() {
    return false;
};

window.onorientationchange = function() {
    document.body.scrollTop = 0;
};

