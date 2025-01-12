import { NavLink } from "react-router-dom";
import Employees from "./Employees";

function Home()
{
    return(
        <>
        <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-2" style={{cursor:"pointer"}}>
                <NavLink className="nav-link" to="/vacation">
                    <div className="card border-success">
                        <div className="card-header">
                            <i className="bi bi-backpack3 text-success"></i>Vacation
       
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-lg-2" style={{cursor:"pointer"}}>
                <NavLink className="nav-link" to="/overtime">
                    <div className="card border-danger">
                        <div className="card-header">
                            <i className="bi bi-stopwatch text-danger"></i>Overtime
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-lg-2" style={{cursor:"pointer"}}>
                <NavLink className="nav-link" to="/health">
                    <div className="card border-warning">
                        <div className="card-header">
                            <i className="bi bi-hospital text-warning"></i>Health
                           
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-lg-2" style={{cursor:"pointer"}}>
                    <NavLink className="nav-link" to="/sanction">
                    <div className="card border-info">
                        <div className="card-header">
                            <i className="bi bi-x-octagon text-info"></i>Sanction
                            
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-lg-2" style={{cursor:"pointer"}}>
                    <NavLink className="nav-link" to="/department">
                    <div className="card border-dark">
                        <div className="card-header">
                            <i className="bi bi-slack text-dark"></i>Department
                          
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
            <div className="card border-info">
                        <div className="card-header">
                        <h3 className="text-info">All Employee List</h3>
                        </div>
                    </div>
            </div>
            <Employees/>
        </div>
        </>
    );
}
export default Home;