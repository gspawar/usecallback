import React, {useState,useCallback} from "react";
import Header from "./Header";
import Button from "./Button";

function UseCallBack(){

    const [nameHome,setHome]=useState("Home Page")
    const [nameAbout,setAbout]=useState("About Page")

    const Home = useCallback(() => {

        setHome("Home Page Update")

    },[nameHome])
    const About = useCallback(() => {

        setAbout("About Page Update")

    },[nameAbout])
    return(
        <div>
            <br/>
            <Header type="home" name={nameHome}/>
            <Button clickHanlder ={Home}> Update Home </Button>
            <br/>
            <br/>
            <br/>
            <Header type="about" name={nameAbout}/>
            <Button clickHanlder={About}> Update About </Button>
            <br/>

        </div>
    )
}
export default UseCallBack;