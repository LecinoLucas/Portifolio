import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import "@/styles/globals.css";

const raiz = document.getElementById("root");
if (!raiz) throw new Error('Elemento "#root" não encontrado no HTML.');

createRoot(raiz).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
