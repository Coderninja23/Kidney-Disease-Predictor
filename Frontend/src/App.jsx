import React from "react";
import "./App.css";
import Header from "./Components/Header";

import { Provider } from "react-redux";
import store from "./store/store";
import Predict from "./Components/Predict";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const mainData = {
    name: "Kidney Disesase Predictor",
    github: "", //
    description:
      "A tool which can be used to effectively and accurately predict whether any person has a Kidney disease. It is based upon the data and the learnings from the symptoms experienced by people in the past.",
  };
  // console.log(mainData.main);

  

  return (
    <Provider store={store}>
      {/* <Header data={mainData}/> */}
      {/* <Header data={mainData}/>
      <Predict /> */}
      <Routes>
          <Route path="/" element={<Header data={mainData}/>} />
          <Route path="/predict" element={<Predict />} />
       </Routes>
    </Provider>
  );
};

export default App;
