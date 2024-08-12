import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newpage from "./Newpage";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-page" element={<Newpage />} />{" "}
          {/* Define your new route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
