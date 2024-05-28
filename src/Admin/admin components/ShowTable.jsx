import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react";
import axios from "axios";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";

export default function ShowTable() {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/getProduct")
    .then((res)=>setProducts(res.data))
    .catch((err)=>console.log(err));
  },[]);
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {
        products.map((e)=>{
          return(
          <TableRow>
            <TableCell>{e.proname}</TableCell>
            <TableCell>{e.prorate}</TableCell>
            <TableCell>{e.category}</TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip content="Edit Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete Product">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
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
  );
}
