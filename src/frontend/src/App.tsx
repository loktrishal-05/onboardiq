import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/dashboard");

  useEffect(() => {
    // Set default hash route
    if (!window.location.hash || window.location.hash === "#") {
      window.location.hash = "#/dashboard";
    }

    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Route matching
  if (route === "#/dashboard" || route === "" || route === "#") {
    return <Dashboard />;
  }

  // Default: redirect to dashboard
  return <Dashboard />;
}
