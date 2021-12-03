import React, {SyntheticEvent, useState} from 'react';
import Layout from "../../layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import {login} from '../../redux/actions/authActions'
import {useRouter} from "next/router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const router = useRouter();
  const inputs = [
   { 
    type:'email',
    placeholder: 'Email',
    action : setEmail,

   },
   {
    type:'password',
    placeholder: 'Password',
    action : setPassword,
   }

]


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(email);
        dispatch(login(email,password))
    }

    return (
        <Layout>
            <form onSubmit={submit} className="login">
            <h3 className="text-center text-info">Login</h3>
                {inputs.map((input, id) => {

                    return   <div  className="formcontrol" >
                        <label  className="text-info">{input.placeholder}</label><br/>
  <input key={id} type={input.type} className="form-control" placeholder={input.placeholder} required
                    onChange={e => input.action(e.target.value)}
             />

                    </div>
                  
                })
                }
                <button className="w-10 btn btn-primary" type="submit">Sign in</button>
            </form>


        </Layout>
    );
};

export default Login;