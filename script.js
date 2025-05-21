import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Welcome to my web page!</h1>
            <p>This is a React component rendered on the index.html.</p>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

window.onload = function() {
    document.body.classList.remove('is-preload');
};

window.ontouchmove = function() {
    return false;
};

window.onorientationchange = function() {
    document.body.scrollTop = 0;
};

