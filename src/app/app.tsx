import {AppHeader} from "./components/appHeader/appHeader";
import AppMain from "./components/appMain/appMain";
import {getCurrentDate} from "./app.utils/app.utils";
import store from './store';
import { Provider } from 'react-redux';

export const App = () => {



    return (
        <Provider store={store}>
            <AppHeader actualDate={getCurrentDate()}/>
            <AppMain />
        </Provider>
    )
}



