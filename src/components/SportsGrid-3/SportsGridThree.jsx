// External Import
import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


// Internall Import
import './SportsGridThree.css'



function SportsGridThree() {
    
     
    // Demo Img
    const img = 'https://img.youtube.com/vi/EelEMz2T_tA/maxresdefault.jpg'

  return (
    <div className='sportsTopList'>
        <Row>
            <Col>
                <div className="imgThumb video">
                    <figure>
                         <picture>
                              <img src={img} alt="" />
                         </picture>
                    </figure>
                </div>
                <div className="description p-2">
                       <div className="title">
                           <h4>রোববার শেষ ম্যাচে পাকিস্তানকে হারানোর লক্ষ্য নিয়ে নামবে বাংলাদেশ</h4>
                       </div>
                  </div>
            </Col>
        </Row>
    </div>
  )
}

export default SportsGridThree