// External Import
import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


// Internall Import
import './SportsGridTwo.css'



function SportsGridTwo() {
    
     
    // Demo Img
    const img = 'https://backoffice.channel24bd.tv/media/imgAll/2022November/liton-1667659109.jpg'

  return (
    <div className='sportsTopList'>
        <Row>
            <Col lg={8}>
                <div className="imgThumb video">
                    <figure>
                         <picture>
                              <img src={img} alt="" />
                         </picture>
                    </figure>
                </div> 
            </Col>
            <Col lg={4}>
                  <div className="description">
                       <div className="title">
                           <h4>রোববার শেষ ম্যাচে পাকিস্তানকে হারানোর লক্ষ্য নিয়ে নামবে বাংলাদেশ</h4>
                       </div>
                       <div className="brief">
                            <p>সুপার টুয়েলভে নিজেদের শেষ ম্যাচে রোববার (৬ নভেম্বর) পাকিস্তানের বিপক্ষে নামছে বাংলাদেশ। পারফরমেন্সের বিচারে পাকিস্তানকে এগিয়ে রাখলেও নিজেদের সেরা ক্রিকেট খেলতে চায় সাকিব আল হাসানের দল। তবে তার আগে নেদারল্যান্ডস-দক্ষিণ আফ্রিকা ম্যাচ শেষে নির্ধারিত হয়ে যেতে পারে টাইগারদের সেমিফাইনাল ভাগ্য। যদিও শ্রীরামের দাবি, এটাই বাংলাদেশের সেরা টি টোয়েন্টি বিশ্বকাপ। অ্যাডিলেড ওভালে সকাল দশটায় শুরু হবে ম্যাচ। </p>
                       </div>
                  </div>
            </Col>
        </Row>
    </div>
  )
}

export default SportsGridTwo