"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function CardComentary(props) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  function Esterllas(num1) {
    let stars='';
    for (let index = 0; index < num1; index++) {
      stars=stars+'🌟';
    }
    return stars;
  }
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={props.url} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{props.name}</h4>
            <h5 className="text-small tracking-tight text-default-400">{props.alias}</h5>
          </div>
        </div>
        {/* <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="warning"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={()=>{}}
        >
          Verificado
        </Button> */}
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
        {props.comentario}
        </p>
        <span className="pt-2">
        {props.hastack}
          <span className="py-2" aria-label="computer" role="img">
          ❤️
          </span>
        </span>
      </CardBody>
      <CardFooter className="flex justify-center">
        {/* <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{props.impresiones}</p>
          <p className=" text-default-400 text-small">Impresiones</p>
        </div> */}
        
          {/* <p className="font-semibold text-default-400 text-small">{`${Esterllas(props.impresiones)}`}</p> */}
          <p className="text-default-400 text-small text-center" type="string">{Esterllas(props.corazones)}</p>
        
      </CardFooter>
    </Card>
  );
}
