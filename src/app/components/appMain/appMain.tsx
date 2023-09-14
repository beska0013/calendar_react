
import './appMain.scss';
import AppSideBar from "../appSideBar/appSideBar";
import AppContent from "../appContent/appContent"


const AppMain = () => (
  <div className="appMain">
   <AppSideBar/>
   <AppContent/>
  </div>
);

export default AppMain;
