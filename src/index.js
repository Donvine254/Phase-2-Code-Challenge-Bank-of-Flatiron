import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { createRoot } from 'react-dom/client';
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>)

