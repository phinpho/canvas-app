import type { ComponentProps, FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CanvasDocument } from "./CanvasDocument/CanvasDocument.js";
import { CanvasDocumentApp } from "./CanvasDocument/CanvasDocumentApp.js";
import { CanvasDocumentHome } from "./CanvasDocument/CanvasDocumentHome.js";
import { Home } from "./Home/Home.js";
import { SignIn } from "./SignIn/SignIn.js";
export type AppProps = Omit<ComponentProps<typeof BrowserRouter>, "children">;

export const App: FC<AppProps> = ({ useTransitions = true, ...props }) => {
  return (
    <BrowserRouter {...props} useTransitions={useTransitions}>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<SignIn />} path="login" />
        <Route element={<CanvasDocumentApp />} path="document">
          <Route element={<CanvasDocumentHome />} index />
          <Route element={<CanvasDocument />} path=":documentId" />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
};

App.displayName = "App";
