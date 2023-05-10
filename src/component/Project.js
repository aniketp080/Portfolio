import React from 'react'
import img1 from '../images/Passport_Photograph.jpg'

const Project = () => {
  return (
    <>
    <h2 id="Projects-1" className='d-flex justify-content-center my-3' style={{fontWeight:"bold",paddingTop:"60px"}}>Projects</h2>
        <hr/>


        <div className="card mb-3 my-2  bg-dark hover-mouse container" style={{color:"white"}} >
            <div className="row g-0 d-flex justify-content-center">
                
                
                <div className="container bg-dark">
                    <div className="card-title bg-dark">
                        <img src={img1} alt="" height="400px" width="300px" style={{transition:"0.5s"}} />
                        <div className="intro">
                        <h1 className='h1-text'>HMS</h1>
                        <p className='p-text'><span></span>This hotel management system is developed for hotels that are using a manual system to handle hotel processes. The main objective of the system is to automate the process of day to day activities of the Hotel and it will reduce the extensive paperwork in the present system</p>
                    </div>
                    </div>
               

                
                    <div className="card-title bg-dark">
                        <img src={img1} alt="" height="400px" width="300px" style={{transition:"0.5s"}}/>
                        <div className="intro">
                        <h1 className='h1-text'>NewsMonkey</h1>
                        <p className='p-text'><span></span>This NewsMonkey app is basically fetching the news from the online Api and displaying the news in UI for the user according to various sections.Also in this newsmonkey infinite scroll feature is used. </p>
                    </div>
                    </div>
                

                
                    <div className="card-title bg-dark">
                        <img src={img1} alt="" height="400px" width="300px" style={{transition:"0.5s"}} />
                        <div className="intro">
                        <h1 className='h1-text'>Alarm Clock</h1>
                        <p className='p-text'>The<span>Hotel</span>This hotel management system is developed for hotels that are using a manual system to handle hotel processes. The main objective of the system is to automate the process of day to day activities of the Hotel and it will reduce the extensive paperwork in the present system</p>
                    </div>
                    </div>
                
                    </div>

                    
                </div>
                </div>
            
      
    </>
  )
}

export default Project
