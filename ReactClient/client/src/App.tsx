import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Branch from './Components/Branch';
import Department from './Components/Department';
import GeneralDepartment from './Components/GeneralDepartments';
import Town from './Components/Town';
import City from './Components/City';
import Country from './Components/Country';
import Employee from './Components/Employees';
import CreateGeneralDepartment from './PagesForCreate/CreateGeneralDepartment';
import CreateCountry from './PagesForCreate/CreateCountry';
import CreateDepartment from './PagesForCreate/CreateDepartment';
import CreateBranch from './PagesForCreate/CreateBranch';
import CreateCity from './PagesForCreate/CreateCity';
import CreateTown from './PagesForCreate/CreateTown';
import CreateEmployee from './PagesForCreate/CreateEmployee';
import EditGeneralDepartment from './PageForUpdate/EditGeneralDepartment';
import Sanction from './Components/Sanction';
import SanctionType from './Components/SanctionType';
import CreateSanctionType from './PagesForCreate/CreateSanctionType';
import Vacation from './Components/Vacation';
import VacationType from './Components/VacationType';
import CreateVacationType from './PagesForCreate/CreateVacationType';
import CreateOvertimeType from './PagesForCreate/CreateOvertimeType';
import OvertimeType from './Components/OvertimeType';
import Overtime from './Components/Overtime';
import Health from './Components/Health';
function App() {
  

  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/branch' element={<Branch/>}></Route>
          <Route path='/department' element={<Department/>}></Route>
          <Route path='/gdepartment' element={<GeneralDepartment/>}></Route>
          <Route path='/town' element={<Town/>}></Route>
          <Route path='/city' element={<City/>}></Route>
          <Route path='/country' element={<Country/>}></Route>
          <Route path='/employee' element={<Employee/>}></Route>
          <Route path='/sanction' element={<Sanction/>}></Route>
          <Route path='/vacation' element={<Vacation/>}></Route>
          <Route path='/overtime' element={<Overtime/>}></Route>
          <Route path='/health' element={<Health/>}></Route>
          <Route path='/sanction-type' element={<SanctionType/>}></Route>
          <Route path='/vacation-type' element={<VacationType/>}></Route>
          <Route path='/overtime-type' element={<OvertimeType/>}></Route>
          
          //for create and update pages
          <Route path='/create-gdepartment' element={<CreateGeneralDepartment/>}></Route>
          <Route path='/create-department' element={<CreateDepartment/>}></Route>
          <Route path='/create-branch' element={<CreateBranch/>}></Route>
          <Route path='/create-country' element={<CreateCountry/>}></Route>
          <Route path='/create-city' element={<CreateCity/>}></Route>
          <Route path='/create-town' element={<CreateTown/>}></Route>
          <Route path='/create-employee' element={<CreateEmployee/>}></Route>
          <Route path='/create-sanction-type' element={<CreateSanctionType/>}></Route>
          <Route path='/create-vacation-type' element={<CreateVacationType/>}></Route>
          <Route path='/create-overtime-type' element={<CreateOvertimeType/>}></Route>

          <Route path='/edit-gdepartment/:departmentId' element={<EditGeneralDepartment/>}></Route>
          
        </Routes>
    </>
  )
}

export default App
