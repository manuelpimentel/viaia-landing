import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PostHogProvider } from "posthog-js/react";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: "https://us.i.posthog.com",
        debug: import.meta.env.MODE === "development",
      }}
    >
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>,
);
