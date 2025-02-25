import { Suspense, useEffect } from "react";
import { useTheme } from "./lib/theme";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./pages/login";
import { useAuth } from "./lib/auth";
import routes from "tempo-routes";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
