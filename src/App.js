import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import GlobalStyles from "./components/GlobalStyle";


function App() {
  return (<>
    <GlobalStyles />
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  </>
  );
}

export default App;