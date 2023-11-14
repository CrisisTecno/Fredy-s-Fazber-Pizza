// app/page.tsx

import {Button} from '@nextui-org/button'; 
import {comentariosData} from '@/src/api/data/comentarios.data';
import CardComentary from '../components/Card/Card';
export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="border-8 border-orange-700  bg-orange-700 rounded-3xl  w-[20vw] h-[45vh]">
              <div className="border-8 border-orange-300 rounded-3xl  bg-yellow-900 w-[20vw] h-[45vh] block p-4 text-center">
                <h3 className="text-black font-agbalumo text-xl bg-amber-400
                 rounded-xl p-1 shadow-lg shadow-gray-900"
                 >¡FAZT PIZZA!</h3>
                 <div className="border-dotted border-5 border-black flex felx-col items-center justify-center
                 mt-3 rounded-xl p-4  font-mono text-black bg-amber-500 w-[20w] h-[30vh]">
                    <ul className='text-sm'>
                      <li>Carnivorita</li>
                      <li>Carnivorota</li>
                      <li>Queso</li>
                      <li>Ufasaruio</li>
                      <li>Mongosauro</li>
                      <li>Algo</li>
                    </ul>
                 </div>
        </div>
  </div>
        <img src="https://freddyfazbearspizzaplace.simdif.com/images/public/sd_641ae29e893ab.png?no_cache=1679487155" 
        alt="" className='w-[40vw] h-[45vh] px-[2vw] ' />
            
<div className="border-8 border-orange-700 rounded-3xl bg-orange-700    w-[20vw] h-[45vh] ">
<div className="border-8 border-orange-300  bg-yellow-900 rounded-3xl  w-[20vw] h-[45vh] flex flex-col 
  text-center justify-center p-6">
      <h3 className="text-black font-agbalumo text-xl bg-amber-400
                 rounded-xl p-1 shadow-lg shadow-gray-900 mb-2 ">¡FAZT SHOW!</h3>
      <img src="https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/401841978_187433854417085_3183005119541427833_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b-07yDz9wLMAX-AoyuE&_nc_ht=scontent.flpb2-1.fna&oh=00_AfBnEC0NuTT79XcyCoRDOnpawb_hK3QNU1JTGce70Skf-Q&oe=6557BB12"
      alt="" className="w-[20w] h-[30vh] mx-4 rounded-xl shadow-inner contrast-125 shadow-yellow-500" />
</div> 
        </div>

        
      </div>

    <div className="flex gap-4 mt-10 px-6 justify-center">
      {comentariosData.map((comentario, index) => (
        <CardComentary key={index} {...comentario} />
      ))}
    </div>


      <Button color="primary">Click me</Button>
      <h1 className=" font-extralight ">HOLA MUNDO</h1>
      <h1 className=" font-light ">HOLA MUNDO</h1>
      <h1 className=" font-mono ">HOLA MUNDO</h1>
      <h1 className=" font-agbalumo ">HOLA MUNDO</h1>
      <h1 className=" font-extralight ">HOLA MUNDO</h1>
      <h1 className=" font-light ">HOLA MUNDO</h1>
      <h1 className=" font-mono ">HOLA MUNDO</h1>
      <h1 className=" font-agbalumo ">HOLA MUNDO</h1>
      <h1 className=" font-extralight ">HOLA MUNDO</h1>
      <h1 className=" font-light ">HOLA MUNDO</h1>
      <h1 className=" font-mono ">HOLA MUNDO</h1>
      <h1 className=" font-agbalumo ">HOLA MUNDO</h1>
      <h1 className=" font-extralight ">HOLA MUNDO</h1>
      <h1 className=" font-light ">HOLA MUNDO</h1>
      <h1 className=" font-mono ">HOLA MUNDO</h1>
      <h1 className=" font-agbalumo ">HOLA MUNDO</h1>
      
          
    </>
  )
}