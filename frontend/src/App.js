import EditPage from "./components/edit/EditPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/edit" element={<EditPage />}  />
      </Routes>
    </Router>
   </>
  );
}

export default App;
