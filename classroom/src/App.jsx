import { BrowserRouter,  Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login"
import Signup from "./Components/Signup"
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Createclass from "./Createclass";
import Classlist from "./Components/Classlist";
import Studentlist from "./Components/Studentlist";
import TeacherList from "./Components/Teacherlist";


function App() {
  return (
    <div>
    
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/createclass" element={<Createclass/>}/>
      <Route path="/classlist" element={<Classlist/>}/>
      <Route path="/studentlist" element={<Studentlist/>}/>
      <Route path="/teacherlist" element={<TeacherList/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App