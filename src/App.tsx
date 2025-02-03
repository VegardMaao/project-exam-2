import { HelmetProvider } from "react-helmet-async";
import { PageRouter } from "./pages/index.tsx";
import { GlobalStyle } from "./styles/index.ts";

function App() {
  return(
    <HelmetProvider>
    <GlobalStyle />
    <h1>Hello World</h1>
    <PageRouter />
  </HelmetProvider>
  )
}

export default App;
