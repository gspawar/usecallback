import React from "react";

function Header(props){
    console.log(props.type+"Header Page")
    return(
        <div>
            {props.name}
        </div>
    )
}
export default React.memo(Header);