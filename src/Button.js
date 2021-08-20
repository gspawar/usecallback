import React from "react";

function Button(props){

    console.log("button:--"+props.children)
    return(
        <div>
            <button className="error" onClick={props.clickHanlder}>{props.children}</button>
        </div>
    )
}
export default React.memo(Button)