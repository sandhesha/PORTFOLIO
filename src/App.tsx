import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  return loading ? <Loader /> : <Home />;
}

export default App;