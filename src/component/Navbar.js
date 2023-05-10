import React from 'react'
import About from './About'

const Navbar = () => {
  return (
    <>
    
        <div className='navbar-section ' style={{position:"fixed",zIndex:"1",width:"100vw",marginTop:"-19px"}} >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" >
             
                    <a className="navbar-brand name"  data-text="Aniket Patil " href="#" style={{fontSize:"24px",fontWeight:"bold",color:"black"}}>Aniket Patil </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex " id="navbarSupportedContent" style={{flexFlow:"row-reverse"}}>
                    <ul className="navbar-nav mx-0 mb-2 mb-lg-0" >
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#About-1">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Skills-1">Skills</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Experience-1">Experience</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Projects-1">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Personal-1">Personal</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Contact-1">Contact</a>
                        </li>
                    
                        
                    </ul>
                    
                    </div>
                    
                </div>
            </nav>
        </div>
        {/* <div><About/></div> */}
        
        
        
    </>
    
  )
}

export default Navbar
