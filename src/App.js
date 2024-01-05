import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import ApiProvider from "./Context/ApiProvider";
import Results from "./Pages/Results";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </div>
  );
}

export default App;
