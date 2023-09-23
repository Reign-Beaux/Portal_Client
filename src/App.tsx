import { CustomDialog } from "common/components";
import { Theme } from "common/static";
import { useEffect } from "react";
import { Body, Header } from "./components";
import { useAppContext } from "./context";

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
      <CustomDialog />
    </>
  );
}

export default App;
