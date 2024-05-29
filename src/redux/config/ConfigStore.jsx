import { ConfigStore } from "redux";
import rootReducer from "../modules/reducers";

const ConfigStore = ConfigStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default ConfigStore;
