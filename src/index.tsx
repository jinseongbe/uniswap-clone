import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const queryClient = new QueryClient();
const root = createRoot(container!);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
