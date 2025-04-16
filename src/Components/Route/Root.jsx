import React from "react";
import { Outlet } from "react-router-dom";
import NavBars from "../NAVBAR/NavBars";


const Root= ()=>{
    return(
        <div>
            
            <div><NavBars></NavBars></div>

            <div><Outlet></Outlet></div>

            {/* <div><Footer></Footer></div> */}

        </div>
    )
}

export default Root;