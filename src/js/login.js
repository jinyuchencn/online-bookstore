import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router";
import PropTypes from 'prop-types'
import $ from 'jquery';


import {isLogin, setLogin} from "../index";
import "../css/login.css";




class Login extends Component{
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(){
        super();
        this.state={
            valid: false
        }
    }
    checkLogin(){
        let usn = document.getElementById("username").value;
        let psw = document.getElementById("password").value;
        let result;

        $.ajax({ url: "login/check",
            data: {usn:usn, psw:psw},
            context: document.body,
            async: false,
            type: "post",
            success: function(data){
                result = data.toString();
                if (result==="Succeed")
                {
                    setLogin(true)
                }
            }});

        if (isLogin){
            this.context.router.history.goBack();
            alert("Success!");
        }
        else if (result==="Blocked user"){
            alert("Your ID has been blocked");
        }
        else{
            alert("Invalid username or password.");
        }

    }
    render(){
        return(
            <div className={"back"}>
                <div>
                    <div className={"inputs"}>
                    <div>Username</div><input id={"username"}/>
                    <div>Password</div><input type={"password"} id={"password"}/>

                    <div>
                        <button className={"loginbut"} onClick={()=>this.checkLogin()}>Login</button>
                        <br/>
                        <Link to={"/signup"}><button className={"signupbut"}>Sign up</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);
