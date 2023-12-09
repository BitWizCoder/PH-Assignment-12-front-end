import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import ApiDataProvider from "./auth/ApiDataProvider.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://assignment-12-back-end.vercel.app/";

const queryClient = new QueryClient();

//stripe
const PUBLIC_KEY =
  "pk_test_51OJefOIL5QhSqdZp3Von9cRFFag75YCjVDuOTyr3SsvRMHF8cyVvuGjtfhRi8bRhuHvz3MuWOKMmyJoVTIDFwgnq00vM6M8Y4Q";

// import { elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiDataProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <Elements stripe={stripeTestPromise}>
              <AppRoutes />
            </Elements>
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ApiDataProvider>
  </React.StrictMode>
);
