import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginComponent from "./components/LoggingComponent/LoginComponent";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect } from "react";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAccessToken = async () => {
      if (!isAuthenticated) return;
      const accessToken = await getAccessTokenSilently();
      sessionStorage.setItem("accessToken", accessToken);
    };
    fetchAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAccessTokenSilently, isAuthenticated]);

  return <>{ !isAuthenticated ? <LoginComponent /> : <Dashboard />}</>;
}

export default App;
