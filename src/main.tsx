import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routers/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
