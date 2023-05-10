import React from 'react'
import hms from '../images/hms.jpg'
import news from '../images/news.jpg'
import alarm from'../images/alarm.jpg'

const Project = () => {
  return (
    <>
    <h2 id="Projects-1" className='d-flex justify-content-center my-3' style={{fontWeight:"bold",paddingTop:"60px"}}>Projects</h2>
        <hr/>


        <div className="card mb-3 my-2  bg-dark hover-mouse container" style={{color:"white"}} >
            <div className="row g-0 d-flex justify-content-center">
                
                
                <div className="container bg-dark">
                    <div className="card-title bg-dark">
                        <img src={hms} alt="" height="400px" width="300px" style={{transition:"0.5s"}} />
                        <div className="intro">
                        <a href=" https://drive.google.com/drive/u/0/folders/1EG4_1HiTtNa56LSxAd2AClth03QOBV7_" target='_blank' style={{textDecoration:"none",color:"white"}}>
                        <h1 className='h1-text'>HMS</h1>
                        </a>
                        <p className='p-text'><span></span>This hotel management system is developed for hotels that are using a manual system to handle hotel processes. The main objective of the system is to automate the process of day to day activities of the Hotel and it will reduce the extensive paperwork in the present system</p>
                        
                    </div>
                    </div>
               

                
                    <div className="card-title bg-dark">
                        <img src={news} alt="" height="400px" width="300px" style={{transition:"0.5s"}}/>
                        <div className="intro">
                        <a href="https://github.com/aniketp080/newsapp" target='_blank' style={{textDecoration:"none",color:"white"}}>
                        <h1 className='h1-text'>News App</h1>
                        </a>
                        <p className='p-text'><span></span>This News app is basically fetching the news from the online Api and displaying the news in UI for the user according to various sections.Also in this news app infinite scroll feature is used. </p>
                        
                    </div>
                    </div>
                

                
                    <div className="card-title bg-dark">
                        <img src={alarm} alt="" height="400px" width="300px" style={{transition:"0.5s"}} />
                        <div className="intro">
                        <a href=" https://aniketp080.github.io/alarm-clock/" target='_blank' style={{textDecoration:"none",color:"white"}}>
                        <h1 className='h1-text'>Alarm Clock</h1>
                        </a>
                        <p className='p-text'>The technologies used to create Alarm Clock are HTML,CSS,JavaScript</p>
                        
                    </div>
                    </div>
                
                    </div>

                    
                </div>
                </div>
            
      
    </>
  )
}

export default Project
