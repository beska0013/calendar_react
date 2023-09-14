
import './actualDatePicker.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { IDate } from '../../../../../interfaces/date.interface';

export const ActualDatePicker = () => {
  const currentDate:IDate = useSelector((state: RootState):IDate => state.global.currentDate);
console.log('currentDate', currentDate)


  return (
    <div className="actualDate">
      <p>{currentDate.year}</p>
      <p>{currentDate.month > 9 ? currentDate.month : '0' + currentDate.month}</p>
      <p>{currentDate.day > 9 ? currentDate.day : '0' + currentDate.day}</p>
    </div>
    )
};

