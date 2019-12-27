
import Head from 'next/head';

import Nav2 from "../components/Nav2";
import Header from "../components/Header";
import { MaterialGrid } from "../components/MaterialGrid";




const index = () =>{
    return(
        <div>
            <Head>
                <title>ISTE MANIT TEAM</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet"></link> */}
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
                {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
                <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            </Head>
           
            
            
            
            <Nav2/>
            <Header/>
            <MaterialGrid />
            
            
        </div>
       
 
    )
}
  
  export default index;