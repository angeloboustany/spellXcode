import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/";
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
