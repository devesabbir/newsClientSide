import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "react-slick";
import SlideCard from './SlideCard/SlideCard';
import './Slider.css'

function Slider() {

    // Demo data 

     let data = [
       {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
       },

       {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
  
       },
       {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
  
      },

      {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
  
      },
      {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
  
      },
      {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
  
      },
      {
        img:'https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/tumbro-1667281148.jpg',
        title:'রাত নামলেই রোহিঙ্গা ক্যাম্পে টার্গেট কিলিং আতঙ্ক (ভিডিও)'
  
      },
     ]
  

  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable:true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div>
     <Sliderr {...settings}>
          {
            data && data.map ( (item,index) => (
            <div key={index}>
                <SlideCard data={item}/>
            </div> 
           ))
         }
     </Sliderr>
  </div>
  )
}

export default Slider