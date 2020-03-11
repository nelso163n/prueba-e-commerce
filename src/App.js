import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderApp from "./components/headerApp";
import FooterApp from "./components/footerApp";
import MainApp from "./components/mainApp";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <HeaderApp/>
      <MainApp/>
      <FooterApp/>
    </div>
  );
}

export default App;
