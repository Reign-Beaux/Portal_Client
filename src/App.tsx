import { useEffect } from "react";
import { Body, Header } from "./components";
import { useAppContext } from "./context";
import { Theme } from "common/static";

function App() {
  const { isDarkTheme } = useAppContext();

  const loadTheme = () => {
    const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = isDarkTheme ? Theme.DARK : Theme.LIGHT;
    }
  };

  useEffect(() => {
    loadTheme();
  }, [isDarkTheme]);

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
