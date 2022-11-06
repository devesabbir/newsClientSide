//  External Import
import React from 'react'


// Internal Import
import './EnterTainmentGrid.css'

function EnterTainmentGrid() {
    
// demo img
   let img = 'https://backoffice.channel24bd.tv/media/imgAll/2022November/komay-oindrila-ntun-nayika-niye-szuting-suru-1667673572.jpg'

  return (
    <div className='enterTainmentGrid'>
        <div className="imgResize">
              <figure>
                   <picture>
                         <img src={img} alt="" />
                   </picture>
              </figure>
              <div className="imgResizeDesc p-3">
                    <div className="title">
                          <h3>ঐন্দ্রিলাকে কোমায় রেখে নতুন নায়িকা নিয়ে শ্যুটিং শুরু</h3>
                    </div>
                    <div className="brief">
                          <p>মস্তিষ্কে রক্তক্ষরণজনিত কারণে গত এক নভেম্বর রাতে অসুস্থ হয়ে হাসপাতালে শয্যাশায়ী কলকাতার জনপ্রিয় অভিনেত্রী ঐন্দ্রিলা শর্মা। ‘ভাগাড়’ সিরিজের পর গোয়াতে নতুন সিনেমার শ্যুটিং করতে যাওয়ার কথা ছিল। কিন্তু নিয়তির কি আজব খেলা। এখন নিবিড় পরিচর্যায় আছেন এই অভিনেত্রী।</p>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default EnterTainmentGrid