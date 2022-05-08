import Routers from "./app/routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark"/>
      <Routers />
    </div>
  );
}

export default App;
