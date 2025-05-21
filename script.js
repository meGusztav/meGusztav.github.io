import {createRoot} from '/node_modules/react-dom/client';
import React from '/node_modules/react';

window.onload = function() {
    document.body.classList.remove('is-preload');
};

window.ontouchmove = function() {
    return false;
};

window.onorientationchange = function() {
    document.body.scrollTop = 0;
};

