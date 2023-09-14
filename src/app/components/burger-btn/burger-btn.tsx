
import './burger-btn.scss';
import { useDispatch } from 'react-redux';
import { toggleSidebar} from '../../globalState';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


export const BurgerBtn = () => {
  const dispatch = useDispatch();
  const burgerBtnHandler = () => dispatch(toggleSidebar());

  const sideBarOpen = useSelector((state: RootState) => state.global.sideBarOpen);
  const btnClassName = `burgerBtn ${sideBarOpen ? 'opened' : 'closed'}`;
  
 return  (
  <button className={btnClassName}
   onClick={() => burgerBtnHandler()}>
      <span></span>
      <span></span>
      <span></span>
   </button>
);
  }

