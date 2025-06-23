import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import { ScrollToHashElement } from "./components/ScrollToHashElement";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
