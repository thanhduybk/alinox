import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import clazzReducer from "./clazz.reducer";
import materialReducer from "./material.reducer";
import artworkReducer from "./artwork.reducer";
import printerReducer from "./printer.reducer";
import reportReducer from "./report.reducer";
import employeeReducer from "./employee.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	clazz: clazzReducer,
	material: materialReducer,
	artwork: artworkReducer,
	printer: printerReducer,
	report: reportReducer,
	employee: employeeReducer
});

export default rootReducer;