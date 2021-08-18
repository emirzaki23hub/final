import React, {useState} from 'react'
import Login from "./Login";
import Loggedin from "./Loggedin";
import Dashboard from './views/dashboard/Dashboard.js'

const Form = () => {
const [formIsSubmitted, setFormIsSubmitted] = useState(false);
const submitForm= () => {
    setFormIsSubmitted(true);
};
    return (
        <div>
            {!formIsSubmitted ? (
            <Login submitForm={submitForm}/>
                ) : ( 
                <Dashboard/>
                )}
        </div>
    )
};

export default Form;
