import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <>
            <nav className="navbar navbar-light navbar-expand-lg bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Employee Management System</NavLink>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/employee">Employee</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/city">City</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/town">Town</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/country">Country</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/branch">Branch</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/department">Department</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gdepartment">General Department</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
export default NavBar