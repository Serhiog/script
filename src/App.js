import Script from "./components/script/script";
import "./styles.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    palette: "dark"
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Script />
      </ThemeProvider>
    </>
  );
}

export default App;
