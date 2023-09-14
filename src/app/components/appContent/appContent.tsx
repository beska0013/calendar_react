
import './appContent.scss';
import { useParams } from 'react-router-dom';


const AppContent = () => {
 const {mode} = useParams();

 console.log(mode)



  return (
      <div className="appContent">
        Current View: {mode}
      </div>
  );
}

export default AppContent;
