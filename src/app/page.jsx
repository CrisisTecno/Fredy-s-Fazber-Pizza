"use client"
// import video from '@/public/video/landing.mp4';
// // import profilePic from '@/public/uno.png';
 import { Player } from 'video-react';
// import Image from 'next/image';
// import Video from 'next/video';
import {Button} from "@nextui-org/react";
import Link from 'next/link';

export default function Page() {
  return (

<section className='relative w-[98vw] h-[100vh]' >
            {/* <Player autoPlay width={100} height={100} fluid repeat>
            <source src="https://res.cloudinary.com/diubghp1i/video/upload/v1700112917/landing_x7yak3.mp4" />
        </Player> */}
        <Button color="warning" variant="flat"  className='absolute shadow-2xl rounded-full text-3xl capitalize py-[4vh] bottom-40 left-[25%] right-[25%] 'onPress={() => {}}>
            <Link href='/pages'> Vamos con Fredy's</Link>
            
            </Button>
                    <iframe
                    src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdiubghp1i%2Fvideo%2Fupload%2Fv1700112917%2Flanding_x7yak3.mp4&cloud_name=diubghp1i&player[controls]=false&player[muted]=false&player[hideContextMenu]=false&player[floatingWhenNotVisible]=false&player[autoplay]=true&player[loop]=true&source[autoplayOnScroll]=false"
                    //   style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowfullscreen
                    frameborder="0"
                    className='w-[100vw] h-[100vh]'
                    ></iframe>
            



        

         
  </section>
  
    
        
  
    )
}