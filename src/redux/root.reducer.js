import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Accountreducer} from "./account";
import {Transferreducer} from "./transfer"
import {Userreducer} from './user';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user',"account","transfer"]
};

const rootReducer = combineReducers({
  user: Userreducer,
account:Accountreducer,
transfer:Transferreducer
});

export default persistReducer(persistConfig, rootReducer);