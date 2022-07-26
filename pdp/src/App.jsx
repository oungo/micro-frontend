import React, { Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import SafeCompnent from './SafeComponent';
import Header from 'home/Header'
import Footer from 'home/Footer'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeCompnent>
      <Header />
    </SafeCompnent>
    <div className="my-10">
      PDP Page Content
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
