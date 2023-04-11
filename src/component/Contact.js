import React from 'react'

const Contact = () => {
  return (
    <>
    <h2 id="Contact-1"className='d-flex justify-content-center  my-3' style={{fontWeight:"bold"}}>Contact</h2>
        <hr/>
        <div className='container hover-mouse'>

        <div className="skills  card    bg-dark " style={{color:"white"}} >
            <ul style={{listStyle:"none", lineHeight:"40px"}}>

                <li>
                <p className="card-text"  style={{fontSize:"40px",fontFamily:"CarterOne"}}>Aniket Patil</p>

                </li>
               <li>
                <p className="card-text text-muted" style={{fontSize:"17px"}}>Copyright &copy; 2023 All rights reserved</p>

                </li>
               
            </ul>


            <ul style={{listStyle:"none", lineHeight:"40px"}}>

                <li>
                <p className="card-text text-muted"  style={{fontSize:"17px"}}><i class="fa-solid fa-envelope" style={{color: "#f7f7f7"}}></i>--aniketpatil85@yahoo.com</p>

                </li>
                <li>
                <p className="card-text text-muted" style={{fontSize:"17px"}}><i class="fa-solid fa-address-book" style={{color: "#f2f2f2"}}></i>--9702319663/9325699946</p>

                </li>
                <li>
                <p className="card-text text-muted" style={{fontSize:"17px"}}> <i class="fa-sharp fa-solid fa-location-dot" style={{color:"#d0d6e2"}}></i> Sion,Chunabhatti Mumbai-400022</p>
                </li>
            </ul>
            
                <div className='socialIcons'>
                <a href=""><i class="fa-brands fa-github fa-lg" ></i></a>
                <a href=""><i class="fa-brands fa-instagram fa-lg" ></i></a>
                <a href=""><i class="fa-brands fa-linkedin fa-lg" ></i></a>
                <a href=""><i class="fa-brands fa-whatsapp fa-lg"></i></a>
                </div>

                
                <p className="card-text text-muted"  style={{fontSize:"17px"}}> </p>
                
                
               
                </div>
       
       
               
                
                
               
        </div>
      
    </>
  )
}

export default Contact
