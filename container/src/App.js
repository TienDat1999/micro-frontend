import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'

export default () => {
  return (
    <BrowserRouter>
     {/* <Route path="/" component={Main} /> */}
      <div>
      <Header/>
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
