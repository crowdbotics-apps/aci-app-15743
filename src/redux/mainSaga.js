import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth28075Saga from '../features/EmailAuth28075/redux/sagas';
import CalendarView28073Saga from '../features/CalendarView28073/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth28075Saga,
CalendarView28073Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}