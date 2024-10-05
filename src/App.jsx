import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Html from "./pages/html/Html";
import HtmlTopic from "./pages/html/HtmlTopic";
import HtmlAssignments from "./pages/html/HtmlAssignments";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/contact" element={<Contact />} />
      <Route path="/html" element={<Html />} />
      <Route path="/topic" element={<HtmlTopic />} />
      <Route path="/assignment" element={<HtmlAssignments />} />
      <Route path="/css" element={<Html />} />
      <Route path="/java" element={<Html />} />
      <Route path="/react" element={<Html />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;