import React from "react";
import "./App.css";
import Navigation from "./components/subcomponents/NavigationBar";
import MyRoutes from "./components/subcomponents/routing";
import MyFooter from "./components/subcomponents/footer";

function App() {
  return (
    <div>
      <Navigation />
      <MyRoutes />
      <MyFooter />
    </div>
  );
}

export default App;
