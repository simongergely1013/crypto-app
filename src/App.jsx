import React, { useState } from "react";
import { useLocalState } from "./hooks";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Coins } from "./pages/Coins";
import { Portfolio } from "./pages/Coins/Portfolio";
import { Coin } from "./pages/Coins/Coin";
import { GlobalStyle, MainWrapper, darkMode, lightMode } from "./App.styles";
import { CurrencyContext } from "./contexts/CurrencyContext";
import { connect } from "react-redux";

export const App = () => {
  const [currency, setCurrency] = useLocalState("currency", "usd");
  const [isCoinsPage, setIsCoinsPage] = useState(true);
  const [isCoinPage, setIsCoinPage] = useState(false);
  const [isPortfolioPage, setIsPortfolioPage] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleThemeColor = () => {
    setDarkMode(!isDarkMode);
  };
  const setColorTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const handleCurrency = (value) => {
    setCurrency(value);
  };
  if (isDarkMode) {
    setColorTheme(darkMode);
  } else {
    setColorTheme(lightMode);
  }
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <CurrencyContext.Provider value={{ currency, handleCurrency }}>
        <Router>
          <GlobalStyle />
          <MainWrapper>
            <NavBar
              onClick={handleThemeColor}
              onChange={handleCurrency}
              isCoins={isCoinsPage}
              isCoin={isCoinPage}
              isPortfolio={isPortfolioPage}
            />
            <Switch>
              <Route exact path="/" component={Coins} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/coin/:coinId" component={Coin} />
            </Switch>
          </MainWrapper>
        </Router>
      </CurrencyContext.Provider>
    </ThemeProvider>
  );
};
