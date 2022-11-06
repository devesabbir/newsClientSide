// External Import
import React from 'react'
import {Row, Col, Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Internal Import
import './VideoTab.css'
import SportsGridThree from '../SportsGrid-3/SportsGridThree';



function VideoTab() {
    const [key, setKey] = useState('channel-24');

    const inActiveStyle = {
      padding: '0 20px',
      fontSize:'16px',
      color: '#fff',
      background: '#676767',
      borderRadius: 0,
      margin: '0 2px',
      border: '1px solid #333',
    };

     const ActiveStyle = {
        ...inActiveStyle,
        background: "#a62107",
      };

  return (
   <div className='VideoTab'>
    <Tab.Container activeKey={key} onSelect={key => setKey(key)} id="video-tab" defaultActiveKey="first">
      <Row>
        <Col>  
               <Col>   
                   <div className="video-tab-title">
                   <Link to={'/'}> <h2 className='video-Section-Title'><span>ভিডিও </span> <span><i className="fa-solid fa-video"></i></span> </h2></Link>  
                    <Nav variant="pills" className="flex-row">
                        <Nav.Item >
                            <Nav.Link style={ key === 'channel-24' ? ActiveStyle : inActiveStyle} eventKey="channel-24">চ্যানেল 24</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={ key === 'channel-24-news' ? ActiveStyle : inActiveStyle} eventKey="channel-24-news">চ্যানেল 24 সংবাদ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={ key === 'search-light' ? ActiveStyle : inActiveStyle} eventKey="search-light">সার্চলাইট</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={ key === 'colors-24' ? ActiveStyle : inActiveStyle} eventKey="colors-24">কালারস 24</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                            <Nav.Link style={ key === 'sports-24' ? ActiveStyle : inActiveStyle} eventKey="sports-24">স্পোর্টস 24</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={ key === 'business-24' ? ActiveStyle : inActiveStyle} eventKey="business-24">বিজনেস 24</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={ key === 'agriculture-24' ? ActiveStyle : inActiveStyle} eventKey="agriculture-24">কৃষি 24</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={ key === 'express-24' ? ActiveStyle : inActiveStyle} eventKey="express-24">এক্সপ্রেস 24</Nav.Link>
                        </Nav.Item>
                    </Nav>
                   </div>
               </Col>
       
        </Col>
       </Row>
       <Row>
       <Col>
          <Tab.Content>
            <Tab.Pane eventKey="channel-24">
                 <Row className='py-4'>
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col> 
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col>
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col> 
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col>
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col>
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col>
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col>
                      <Col lg={3} className={'mb-3'}>
                         <Link to={':id'}> <SportsGridThree/></Link>
                      </Col>
                      
                 </Row>

                
            </Tab.Pane>
            <Tab.Pane eventKey="channel-24-news">
                <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="search-light">
            <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="colors-24">
            <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane> 
            <Tab.Pane eventKey="sports-24">
            <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="business-24">
            <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="agriculture-24">
            <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="express-24">
            <Row className='py-4'>
                    <Col lg={6} className={'mb-3'}>
                       <Link to={':id'}> <SportsGridThree/></Link> 
                    </Col> 
                    <Col lg={6} className={'mb-3'}>
                         <Row>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                              <Col lg={6} className={'mb-3'}>
                                 <Link to={':id'}> <SportsGridThree/></Link> 
                              </Col>
                         </Row>
                    </Col>
                </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
</div>
  )
}

export default VideoTab