import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
