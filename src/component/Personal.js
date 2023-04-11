import React from 'react'

const Personal = () => {
  return (
    <>
    <h2 id="Personal-1" className='d-flex justify-content-center my-3' style={{fontWeight:"bold" ,paddingTop:"60px"}}>Personal Achievements & Interests</h2>
        <hr/>
        <div className="card mb-3 my-2  bg-dark hover-mouse container" style={{color:"white"}} >
        
        <h3>-Achievements</h3>
                    
                    <ul>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Champion of Champion in SSC</p>
                        </li>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Won many sports event in College Sports</p>
                        </li>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Won Hashu Advani Cup 3 Times in School</p>
                        </li>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Won Treasure Hunt in College </p>
                        </li>
                    </ul>
                    <h3>-Interest</h3>
                    <ul>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Playing Football.</p>
                        </li>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Swimming.</p>
                        </li>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Listening and reading Spiritual Things.</p>
                        </li>
                        <li>
                            <p className="card-text text-muted" style={{fontSize:"17px"}}>Athletics.</p>
                        </li>
                    </ul>

        </div>
      
    </>
  )
}

export default Personal
