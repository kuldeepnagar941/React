import { Link } from "react-router-dom"; 
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <>
       <div className="maincontainer">
       <div className="sidebarparent">
        <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/createclass">Create Class</Link>
        </li>
        <li>
          <Link to="/classlist">Show Class List</Link>
        </li>
        <li>
          <Link to="/create-teacher">Create Teacher</Link>
        </li>
        <li>
          <Link to="/teacherlist">Show Teacher List</Link>
        </li>
        <li>
          <Link to="/create-student">Create Student</Link>
        </li>
        <li>
          <Link to="/studentlist">Show Student List</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
     
    </div>
        </div>
        <div className="sidebarsidespace">
            <h1>Welcome to Classroom </h1>
        </div>
       </div>
    </>
  );
};

export default Sidebar;
