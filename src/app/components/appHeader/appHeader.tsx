
import './appHeader.scss';
import React from "react";
import {IDate} from "../../../interfaces/date.interface";
import { DateRangePicker } from "./components/dateRangePicker/dateRangePicker";
import { ActualDatePicker } from "./components/actualDatePicker/actualDatePicker";
import { BurgerBtn } from "../burger-btn/burger-btn";



interface AppHeaderProps {
    actualDate: IDate; // Assuming IDate is the correct type for actualDate
}


export const AppHeader:React.FC<AppHeaderProps> = ({ actualDate }) => {
    


  


    return (
        <header className="appHeader">
          <div className="appHeader_box">
    {/* chnages global state of sidebar */}
                <BurgerBtn/>   
                <div className="title-box">
                <div className="title-box_logo">
                    <span className="title-box_value">{actualDate.day}</span>
                </div>
                <h1 className="title-box_title">Calendar</h1>
                </div>

                <button className='defaultBtn'>Today</button>

                <div className="date-box">
                    <div className="date-box_controlles"></div>
                        <div className="date-box_value"></div>
                </div>
          </div>
           <div className="appHeader_box">
            <ActualDatePicker/>
            </div> 
          <div className="appHeader_box">
              <button className='defaultBtn circle search'/>
              <button className='defaultBtn circle help'/>
             
        
              <button className='defaultBtn circle settings'/>
           
{/* handler for date mode: day, month or year */}
              <DateRangePicker/>
          </div>
        </header>
    );
}


