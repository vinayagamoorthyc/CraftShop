import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react";
import axios from "axios";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import { useNavigate } from "react-router-dom";

export default function ShowTable() {
  const navigate=useNavigate();
  const [products,setProducts]=useState([]);


  useEffect(()=>{
    axios.get("http://localhost:3001/getProduct")
    .then((res)=>setProducts(res.data))
    .catch((err)=>console.log(err));
  },[]);

  function deleteProduct(id){
    axios.delete("http://localhost:3001/deleteProduct/"+id)
    .then(()=>window.location.reload())
    .catch(err=>console.log(err));
  }

  return (
    <div>
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>PREVIEW</TableColumn>
        <TableColumn>PRODUCT NAME</TableColumn>
        <TableColumn>PRODUCT RATE</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {
        products.map((e)=>{
          return(
          <TableRow>
            <TableCell>{e.imgurl}</TableCell>
            <TableCell>{e.proname}</TableCell>
            <TableCell>{e.prorate}</TableCell>
            <TableCell>{e.category}</TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip content="Edit Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon onClick={()=>navigate(`/productupdate/${e._id}`)} />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete Product">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon onClick={()=>deleteProduct(e._id)}/>
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
  );
}
