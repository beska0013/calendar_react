import {IDate} from "../../interfaces/date.interface";


export function getCurrentDate():IDate {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return ({
        day,
        month,
        year
    });
}
