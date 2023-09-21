import { Body, Header } from "./components";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Header />
      <Body />
    </AppProvider>
  );
}

export default App;
