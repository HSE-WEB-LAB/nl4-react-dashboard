import {AppRouter} from "./pages/router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import './style.css'

function App() {
  return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
