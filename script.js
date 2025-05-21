import {createRoot} from 'react-dom/client';
import React from 'react';

window.onload = function() {
    document.body.classList.remove('is-preload');
};

window.ontouchmove = function() {
    return false;
};

window.onorientationchange = function() {
    document.body.scrollTop = 0;
};
