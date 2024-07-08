import React, { useEffect } from 'react'
import './AboutPage.css'
import NavBar from '../components/NavBar';
import img from '../assets/aboutpage.jpg';
import img2 from '../assets/aboutpage2.jpeg';
import img3 from '../assets/aboutpage3.jpeg';
import Footer from '../components/Footer';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function AboutPage() {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <center>
        <NavBar/>
        <hr />
        <div className='aboutpage_flex'>
            <div className='font' style={{fontSize:'30px'}}>About Us</div>
            <div style={{width:'50%',color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vero facilis quas cumque possimus accusamus amet? Et veniam molestias rerum ut ipsa quis nisi modi a, in placeat explicabo suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <br />
            <div>
                <img src={img} alt="" width={1100}/>
            </div>
            <div className='about_mission'>
              <div className='mission_content'>
                <div className='font' style={{fontSize:'30px'}}>Our Mission</div>
                <div style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem accusamus architecto! Error sint ut fugit accusantium dignissimos. Culpa neque id perferendis placeat repudiandae nisi. Dignissimos doloremque distinctio ab sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi repellat obcaecati dolorem molestias, asperiores aperiam voluptatibus minima ratione maiores officiis quaerat, explicabo ab assumenda dolore, laudantium error quas atque.</div>
                <img src={img3} alt="" />
              </div>
              <div className='mission_content'>
                <img src={img2} alt="" width={500} />
                <div className='font' style={{fontSize:'30px'}}>Quality You Can Trust</div>
                <div style={{color:'gray'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro natus exercitationem explicabo aliquid, dolore alias possimus tempora qui fuga repellat, corporis quas ab modi. Quis, dolor. Distinctio eaque tenetur vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque quidem quis assumenda corrupti. Saepe neque repudiandae, rem cumque ratione dolorem, veritatis repellat esse nisi nesciunt cum illo et asperiores.</div>
              </div>
            </div>
        </div>
        <hr style={{width:"74%",border:"1px solid #00000012",marginBottom:"25px"}}/>
        <div className='faqs_flex'>
          <div className='font' style={{fontSize:'30px'}}>Frequently Asked Questions</div>
          <div style={{color:"gray",width:"40%"}}>Welcome to our FAQs page! We've compiled a commonly asked questions to provide you with quick and informative answers.</div>
          <hr style={{width:"55%",border:"1px solid #00000012"}}/>
          <div className='faqs_qns'>
            <Accordion
                showDivider={true}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}
              >
                <AccordionItem key="1" aria-label="Accordion 1"
                 title="What is Handmade Craft?" style={{color:"gray",textAlign:"start"}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio hic expedita sit officia vero beatae eius recusandae tenetur? Aliquid vel eos obcaecati nisi. Nobis maiores quae suscipit iusto aspernatur sed.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2"
                 title="What payment methods do you accept?" style={{color:"gray",textAlign:"start"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi eaque adipisci illo incidunt alias doloribus, repellendus cupiditate dolores corrupti consequuntur ab quibusdam vel dolor, possimus sint! Optio, ducimus? Distinctio!
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3"
                 title="Do you offer international shipping?" style={{color:"gray",textAlign:"start"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam id nemo fugit autem dignissimos placeat laboriosam tempora quod explicabo obcaecati, ad commodi fugiat magni similique sint exercitationem ipsam doloribus!
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" 
                title="What is your return and refund policy?" style={{color:"gray",textAlign:"start"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam id nemo fugit autem dignissimos placeat laboriosam tempora quod explicabo obcaecati, ad commodi fugiat magni similique sint exercitationem ipsam doloribus!
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5"
                 title="Are there any discounts available?" style={{color:"gray",textAlign:"start"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam id nemo fugit autem dignissimos placeat laboriosam tempora quod explicabo obcaecati, ad commodi fugiat magni similique sint exercitationem ipsam doloribus!
                </AccordionItem>
              </Accordion>
          </div>
          <hr style={{width:"55%",border:"1px solid #00000012"}}/>
        </div>
        <div className='font' style={{fontSize:'30px',marginBottom:"20px"}}>Still Have a Question?</div>
        <div style={{color:"gray",width:"40%",marginBottom:"15px"}}>A short description of your page or section, highlighting the main benefits of your service or product.</div>
        <button className='shop_btn' style={{marginBottom:"50px"}}>Contact Us</button>
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
        <Footer/>
    </center>
  )
}
