import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/global.css";
import { Layout } from "@/components/common/Layout";
import { Main } from "@/components/pages/main";
import AppContextProvider from "@/contexts/app.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <Layout>
        <Main />
      </Layout>
    </AppContextProvider>
  </React.StrictMode>
);
