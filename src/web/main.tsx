import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import "./styles.css";
import App from "./app.tsx";
import { Provider } from "./components/provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider>
			<Router>
				<App />
			</Router>
		</Provider>
	</StrictMode>,
);
