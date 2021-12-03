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

        // await fetch('http://localhost:8000/api/login', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     credentials: 'include',
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // });

        //await router.push('/');
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                {inputs.map((input, id) => {
                    return   <input key={id} type={input.type} className="form-control" placeholder={input.placeholder} required
                    onChange={e => input.action(e.target.value)}
             />
                })


                }
                {/* <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                /> */}

                <button className="w-10 btn btn-primary" type="submit">Sign in</button>
            </form>
        </Layout>
    );
};

export default Login;