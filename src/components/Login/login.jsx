import React from "react";
import s from "./login.module.css"
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormsControls";
import { required } from "../../helpes/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/Auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControl/FormsControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} 
                validate={[required]}
                name={"email"} 
                component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"}
                validate={[required]} 
                name={"password"} 
                type={"password"}
                component={Input} />
            </div>
            <div>
                <Field component={Input}
                validate={[required]} 
                name={"rememberMe"} 
                type={"checkbox"}/> remember me    
            </div>
            { props.error && <div className={style.formSummaryError}>
               { props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"}) (LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }


    return <div className={s.header}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
     

export default connect(mapStateToProps, {login}) (Login);