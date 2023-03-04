import { combineReducers } from 'redux';

import authReducer from '../auth/AuthReducer/reducer';
import errorReducer from '../auth/RadioButtonErrorReducer/errorReducer';
import routeReducer from '../auth/RouteReducer/routeReducer';
import checklistReducer from '../auth/ChecklistDataReaducer/checklistReducer';
import fetchedDataReducer from '../auth/FetchedDataReducer/fetchedDataReducer';

export default combineReducers({
    auth: authReducer,
    route: routeReducer,
    error: errorReducer,
    checklistData: checklistReducer,
    fetchedData: fetchedDataReducer,
});
// Sukomponuojama visus reducerius i viena
