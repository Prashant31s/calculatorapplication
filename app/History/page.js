"use client"
import { Provider } from "react-redux";
import History from "./History";
import store from "../store";
export default function Page(){
    return (
        <Provider store={store}>
        <div className="flex content-center justify-center m-2 p-3">
        <History/>
        </div>
        
         
        </Provider>
    )
}