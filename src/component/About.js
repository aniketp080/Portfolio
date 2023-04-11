import React from 'react'
import img1 from '../images/Passport_Photograph.jpg'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
    
    <hr/>
    <h2 id="About-1" className='d-flex justify-content-center  ' style={{fontWeight:"bold",paddingTop:"60px"}}>About ME</h2>
    <hr/>
    
        <div className="card mb-3 my-2 bg-dark container  hover-mouse" style={{color:"white"}} >
            <div className="row g-0">
                <div className="col-md-4" style={{display:"flex",alignItems:"center"}}>
                <img src={img1} className="img-fluid " alt="Aniket" height={"480px"} width={"381px"}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2  >Aniket Navneet Patil</h2>
                    <h3>--Computer Science Student</h3>
                    <ul>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>A determined, goal oriented, tranquil and optimist individual targeting to learn new things from professionals while working with reputed organization where I can utilize my skills and prove my worth.</p>
                        </li>
                        <li>
                           <h5 >Bachelor of Science(Computer Science)</h5>
                            <ul className='space'>
                                <li>
                                    <p className="text-muted">V.E.S College of Arts,Science and Commerce</p>
                                </li>
                                <li>
                                    <p className="text-muted">08/2018-07/2021</p>
                                </li>
                                <li>
                                    <p className="text-muted">CGPA-9.43/10</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                           <h5>HSC</h5>
                            <ul className='space'>
                                <li>
                                    <p className="text-muted">Swami vivekanand Jr. College,Chembur</p>
                                </li>
                                <li>
                                    <p className="text-muted">07/2017-06/2018</p>
                                </li>
                                <li>
                                    <p className="text-muted">Percentage:83.38%</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h5 >SSC</h5>
                            <ul className='space'>
                                <li>
                                    <p className="text-muted">Swami vivekanand High School,Chembur</p>
                                </li>
                                <li>
                                    <p className="text-muted">06/2015-05/2016</p>
                                </li>
                                <li>
                                    <p className="text-muted">Percentage:88.20%</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                   
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
