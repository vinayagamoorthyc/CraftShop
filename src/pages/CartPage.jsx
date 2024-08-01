import React from 'react';
import CCard from '../cards/CCard.jsx';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.jsx';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import img1 from "../assets/payment assets/gpay.png";
import img2 from "../assets/payment assets/paytm.png";
import img3 from "../assets/payment assets/phonepe.png";

export default function CartPage() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <center>
        <NavBar/>
        <hr />
        <div className='recent_flex' style={{marginTop:"25px"}}>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Cart Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"900px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div>
                    <div><button className='filter_btn' onClick={()=>onOpen()}>
                        Check Out</button></div>
                    </div>
                </div>
            </div>
            <div className='r_pro_flex' style={{marginBottom:"50px"}}>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
            </div>
        </div>
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
        <Footer/>

        {/* -------------------------------------  checkout model  ----------------------------- */}

        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop='opaque'
        size='sm'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font" 
              style={{fontSize:"21px"}}>Payment</ModalHeader>
              <ModalBody>
                  <div>
                    <p className='shop_btn' style={{fontSize:"15px",color:"gray",border:"1px solid gray"}}>
                        Address &nbsp;&nbsp;
                        <label 
                          style={{borderLeft:"1px solid gray",padding:"13px 0px 13px 10px",textAlign:"end"}} class="">
                          Coimbatore, India
                        </label>
                    </p>
                  </div>
                  <div>
                    <p className='shop_btn' style={{fontSize:"15px",color:"gray",border:"1px solid gray"}}>
                        Sub Total &nbsp;&nbsp;
                        <label 
                          style={{borderLeft:"1px solid gray",padding:"13px 0px 13px 10px",textAlign:"end"}} class="">
                        ₹ 1349
                        </label>
                    </p>
                  </div>
                  <div>
                    <p className='shop_btn' style={{fontSize:"15px",color:"gray",border:"1px solid gray"}}>
                        Delivery Fees &nbsp;&nbsp;
                        <label 
                          style={{borderLeft:"1px solid gray",padding:"13px 0px 13px 10px",textAlign:"end"}} class="">
                          Free
                        </label>
                    </p>
                  </div>
                  <div className='font' style={{textAlign:"end"}}>
                    Total: ₹ 1349
                  </div>
                  <div style={{display:'flex',alignItems:"center",fontSize:'14px',color:"gray"}}>
                    <hr style={{border:"1px solid #00000012",minWidth:"120px"}}/> &nbsp;
                    Pay Using&nbsp;
                    <hr style={{border:"1px solid #00000012",minWidth:"140px"}}/>
                  </div>
                  <div style={{display:"flex",gap:"50px",justifyContent:"center",fontSize:"20px",color:"gray"}}>
                      <img src={img1} alt="" width={70}/>
                      <img src={img2} alt="" width={70}/>
                      <img src={img3} alt="" width={90}/>
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </center>
  )
}
