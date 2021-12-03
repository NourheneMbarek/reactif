import React from 'react';
import Layout from '../layouts/Layout';
import Image from 'next/image'

import imageslide from "../public/images/image1.jpg";

import Head from 'next/head'


const home = () => {



  return (
      <>
 <div>
    <Head>
      <title>Test</title>
      <link href="/static/master.css" rel="stylesheet" key="test"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
</div>
     <Layout/> 


     {/* <!-- Automatic Slideshow Images --> */}

  {/* <ljklhq */}
  <div className="mySlides w3-display-container w3-center">
 
  <Image src={imageslide} width={1800} height={600} />
   
    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
      <h3>New York</h3>
      <p><b>The atmosphere in New York is lorem ipsum.</b></p>    
    </div>
  </div>
 


      <div className="cards-container" >
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Time is the essence</h2>
            <p className="card-text">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets.
            </p>
            <a href="#" className="card-link">
              Read more...
            </a>
          </div>
        </div>

        <div className="card">
          
          <div className="card-body">
            <h2 className="card-title">The best piano songs</h2>
            <p className="card-text">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets.
            </p>
            <a href="#" className="card-link">
              Read more...
            </a>
          </div>
        </div>

       
        

       
      </div>
      </>
  );
};

export default home;
