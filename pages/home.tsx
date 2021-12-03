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
      
    </Head>
</div>
     <Layout/> 


     {/* <!-- Automatic Slideshow Images --> */}

  {/* <ljklhq */}
  <div className="mySlides w3-display-container w3-center">
 
  <Image src={imageslide} width={1800} height={600} alt="Tracking"/>
   
  
  </div>
 


      <div className="cards-container" >
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Time is the essence</h2>
            <p className="card-text">
            La France métropolitaine est située à l’une des extrémités occidentales de l’Europe. Elle est bordée par la mer du Nord au nord, la Manche au nord-ouest, l’océan Atlantique à l’ouest et la mer Méditerranée au sud-est. Elle est frontalière de la Belgique et du Luxembourg au nord-est, de l’Allemagne et de la Suisse à l’est, de l’Italie et de Monaco au sud-est, de l’Espagne et d’Andorre au sud-ouest.
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
