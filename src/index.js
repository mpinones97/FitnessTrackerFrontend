import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './app.js';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';




const rootEl = document.getElementById("app");

const root = ReactDOMClient.createRoot(rootEl);

root.render(
    <BrowserRouter>
        {" "}
        <App /> {" "}
    </BrowserRouter>
)

// ReactDOM.render(
//     <App />,
//     document.getElementById('app'),
// );