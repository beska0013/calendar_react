
import './appSideBar.scss';
import DatePicker from 'sassy-datepicker';
import '../../../../node_modules/sassy-datepicker/dist/styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const AppSideBar = () => {

    const sideBarOpen = useSelector((state: RootState) => state.global.sideBarOpen);
    console.log('sideBarOpen: ',sideBarOpen);

    const onChange = (date: Date) => {
        console.log('calendar Date: ',date);
    };
 const sidebarClass = `appSideBar ${ sideBarOpen ? 'opened' : 'closed' }`;



    return (
        <div className={sidebarClass}>
            <div className='sidebarWrapper'>
               <DatePicker onChange={onChange}  value={new Date()} />
            </div>
           
        </div>
    );
}

export default AppSideBar;

