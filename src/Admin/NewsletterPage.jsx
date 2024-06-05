import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon } from "./DeleteIcon";
import axios from "axios";

export default function NewsletterPage() {
  const navigate=useNavigate();
  const [subcribers,setSubcribers]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/getSubscribers")
    .then((res)=>setSubcribers(res.data))
    .catch((err)=>console.log(err));
  },[]);

  function deleteSubscriber(id){
    axios.delete("http://localhost:3001/deleteSubcriber/"+id)
    .then(()=>window.location.reload())
    .catch(err=>console.log(err));
  }
  return (
    <center>
        <div className='p_head_flex' style={{width:"85%",marginTop:"40px",marginBottom:"55px"}}>
         <div className='font' style={{fontSize:"33px"}}>Subcribers List</div>
                <hr style={{border:"1.5px solid #",minWidth:"890px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn' onClick={()=>navigate("/adminhome")}>
                        Home</button>
                    </div>
                </div>
        </div>

        <div style={{width:"80%"}}>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>SUBSCRIBER EMAIL</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
            {
              subcribers.map((e)=>{
                return(
                <TableRow>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip color="danger" content="Delete Product">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon onClick={()=>deleteSubscriber(e._id)}/>
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
                )
              })
            }
            </TableBody>
          </Table>
    </div>
    </center>
  )
}
