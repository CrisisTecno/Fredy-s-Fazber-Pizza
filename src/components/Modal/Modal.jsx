"use client"
import React from "react"; 
import {Input} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Botton(){
    const {isOpen, onOpen, onClose} = useDisclosure();
      const [backdrop, setBackdrop] = React.useState('opaque')
    
      const backdrops = ["opaque", "blur", "transparent"];
    
      const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
      }
return(
        <>
     
<Button color="warning" variant="flat"  className='capitalize mx-[20vw] mt-10'onPress={() => handleOpen("blur")}>Nuevo Comentario</Button>

         
          <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-center text-orange-500">Nuevo Comentario</ModalHeader>
                  <ModalBody>
                    <h2 className="text-orange-600 text-center">Comentario</h2>
                            <Input
                            color="warning"
                variant="bordered"
                />
                    <h2 className="text-orange-600 text-center">Hashtags</h2>
                            <Input
                            color="warning"
                variant="bordered"
                />
                    <h2 className="text-orange-600 text-center">Comentario</h2>
                            <Input
                            color="warning"
                variant="bordered"
                />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button color="warning" onPress={onClose}>
                      Enviar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
              }
    


