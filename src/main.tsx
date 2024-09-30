import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import resetFontSize from "@/utils/resetFontSize";

resetFontSize(window, document);
createRoot(document.getElementById("root")!).render(<App></App>);
