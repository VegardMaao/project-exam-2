import { HelmetProvider } from "react-helmet-async";
import { PageRouter } from "./pages/index.tsx";
// @ts-ignore
import { GlobalStyle } from "./styles/index.js";

function App() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <PageRouter />
    </HelmetProvider>
  );
}

export default App;
