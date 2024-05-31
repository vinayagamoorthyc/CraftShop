import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import axios from "axios";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";

export default function ShowTable() {
  const [products,setProducts]=useState([]);
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();


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
                    <EditIcon />
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

    {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
}
