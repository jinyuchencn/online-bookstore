import React, { Component } from 'react';
import './home.css';
import { withRouter} from 'react-router'
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return(
            <div className={"back"}>
                <img className={"imgCSAPP"} src={require("../res/csapp.png")}/>
                <div className={"ads"}>
                    <br/><br/><br/><br/>
                    <div className={"newarr"}>New Arrivals!!</div>
                    <div className={"off"}>40% Off!</div>
                </div>
                <Link className={"toList"} to={"/booklist"}>View Book List</Link>
            </div>
        )
    }
}

export default withRouter(Home);