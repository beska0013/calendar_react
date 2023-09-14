
import './dateRangePicker.scss';
import { useState, useRef } from "react";
import { useNavigate, useParams  } from 'react-router-dom';




export const DateRangePicker = () => {
    const range=['day','week','month','year'];

    const [isListVisible, setListVisible] = useState(false);
   // const isListVisible = useRef(false);
    const visibleState = useRef(false);
    const navigate = useNavigate();
    const { mode } = useParams();
    const [currentMode, setCurrentMode]= useState(mode);
    const ulClassName = `dateRangeList ${visibleState.current ? 'show' : 'hide'}`;

    console.log(mode)
    // TODO: render issue, renders twice on click.Problem : listHandler()
    const onRangeItemClick = (index:number) => {
        if(currentMode === range[index]) return;
        setCurrentMode(range[index]);
        navigate('/'+range[index]);

        // TODO: check for render time
        listHandler();

    }
  
    const listHandler = () => {
        
        visibleState.current = !visibleState.current;
        isListVisible ?
            setTimeout(() => setListVisible(!isListVisible), 400) :
            setListVisible(!isListVisible)
    }


    return (
        
        <div className="dateRangePicker">
            <button className='defaultBtn' onClick={() => listHandler()}>{currentMode}</button>

            {isListVisible && (
                <ul className={ulClassName}>
                    {
                        range.map((item,index)=>(
                            <li className="dateRangeList_item"
                                key={index}
                                onClick={() => onRangeItemClick(index)}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            )}

        </div>
    );
}


