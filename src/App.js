import React from "react";
import "./App.css";
import MyRoutes from "./components/subcomponents/routing";
import { AuthProvider } from "./firebase authentication/Auth";

function App() {
  return (
    <AuthProvider>
      <MyRoutes />
    </AuthProvider>
  );
}

export default App;
