import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/global.css";
import { Layout } from "@/components/common/Layout";
import { Main } from "@/components/pages/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Main />
    </Layout>
  </React.StrictMode>
);
