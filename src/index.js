import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer className="foo" style={{ fontWeight: "bold" }} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
