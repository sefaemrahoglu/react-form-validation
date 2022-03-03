import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar'
import Form from './components/form'
import ValidateForm from './components/validateForm'
function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="form2" element={<ValidateForm />} />
      </Routes>

    </div>
  );
}

export default App;
