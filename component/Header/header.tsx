import React from 'react';
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
// import '../styles/layout.scss'

const Layout = (props : any) => {
    const router = useRouter();

    // const logout = async () => {
    //     await fetch('http://localhost:8000/api/logout', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         credentials: 'include',
    //     })

    //     await router.push('/login');
    // }

    let menu;

    if (!props.auth) {
        menu = (
            <>
                <a href="/auth/login">Login</a>
                <a href="/auth/report">Report</a>
            </>
           
        )
    } else {
        menu = (
            <>
            
            </>
        )
    }

    return (
        <>
        <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                      crossOrigin="anonymous"/>
            </Head>
        <header>
  <div className="row">
    {/* <div className="col-xs-6 col-md-6">
      <h3>Design System SCSS</h3>
    </div> */}
    <div>
   
    </div>
    <div className="redirect"  >
      <nav  >
        <a href="/home">Home</a>
         
                        {menu}
        
      </nav>
    </div>
  </div>
</header>
<main className="form-signin">
                {props.children}
            </main>
            

           
        </>
    );
};

export default Layout;