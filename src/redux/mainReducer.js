import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth28075Reducer from '../features/EmailAuth28075/redux/reducers';
import CalendarView28073Reducer from '../features/CalendarView28073/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth28075: EmailAuth28075Reducer,
CalendarView28073: CalendarView28073Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});