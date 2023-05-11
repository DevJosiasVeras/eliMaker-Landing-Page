import AnimateDivX from "@/components/AnimateDivX";
import AnimateDivY from "@/components/AnimateDivY";
import AnimateVisual from "@/components/AnimateVisual";
import Image from "next/image";

import {FaCreditCard} from 'react-icons/fa'
import {MdPix} from 'react-icons/md'
import {AiOutlineBarcode} from 'react-icons/ai'
import {BiTransferAlt} from 'react-icons/bi'
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className='flex flex-col items-center  '>
 
      <div id="home" className='grid grid-flow-row gap-3 items-center text-center place-items-center w-full md:grid-cols-[35%_65%] pt-32'>
        <div className="img-bg md:relative md:place-self-end md:self-center ">
          <Image src="/Me.png" width={258} height={258} alt="Alexander Eli"/>
        </div>
        
        <div className="flex flex-col text-black justify-center items-start md:place-self-start">
          <AnimateDivY>
              <div className="pb-20">
                <p>Hello! I Am <span className="text-[#FDBD18] font-bold">alexander eli.</span></p>
              </div>
            

            <h3 className="text-base underline">A Designer who</h3>
            <h1 className="text-4xl">Judges a book</h1>
            <h1 className="text-4xl">by its <span className="text-gray-600 md:relative cover">cover</span>...</h1>
            <p className="text-[10px] mt-1">Because if the cover does not impress you what else can?</p>
          </AnimateDivY>
        </div>  
      </div>
      <AnimateDivX delay={0.7}>
        <div className="mt-20 md:mt-28 flex flex-col pl-[5%] w-full md:pl-[18.5%]">
          <div className="flex flex-col justify-start items-start text-start">
            <h1 className="text-2xl md:text-4xl">I'm a Designer & LogoMaker.|</h1>
            <p className="text-base">Currently, I'm a <span className="text-[#FDBD18] font-bold">Freelancer</span>.</p>
          </div>

          <div className="flex justify-center items-start md:w-[43%] mt-4">
            <p className="text-sm">AlexsanderEli is a creative designer passionate about the power of design in transforming the world. With a wide range of skills and experience in various areas of design, he always seeks to offer personalized and effective solutions for each client. Her work is marked by innovation, quality, and commitment to exceeding expectations.</p>
          </div>
        </div>
      </AnimateDivX>

      <div className="mt-[8rem] w-full ">
        <div className="w-full text-center justify-center items-center">
          <h1 className="text-2xl md:text-4xl">My Skills</h1>
        </div>
        <AnimateVisual>
            <div className="grid p-6 md:p-0 md:grid-cols-[400px_400px] place-items-center gap-5 mt-4 justify-center relative skills ">
              <Skill title="Logo Maker" description="Specialization in Logo Maker." image="/Piece.png"/>
              <Skill title="Image manipulation" description="Specialization in Image manipulation." image="/Paisagem.png"/>
              <Skill title="Thumbmaker" description="Thumbmaker specialization." image="/thumbmaker.png"/>
              <Skill title="Flyer" description="Flyer Design Specialization." image="/flyer.png"/>
            </div>
          </AnimateVisual>
      </div>
      
      <AnimateVisual>
        <div className="flex flex-col justify-center items-center text-center mb-20 p-5 md:p-0">
          <div className="w-full text-center justify-center items-center mt-12">
              <h1 className="text-2xl md:text-4xl">Payment Methods</h1>
          </div>

          <div className="flex justify-center items-center text-center mt-12 px-12 py-6 md:p-11 bg-white border-t-2 rounded-xl shadow-2xl">
            <div className="gap-4 flex justify-center items-center">
              <div className="flex flex-col cursor-pointer justify-center items-center text-center ml-4 mr-8 md:ml-0 md:mr-0 md:pr-12 md:border-r-2 md:pl-12 md:border-l-2 ">
                <AiOutlineBarcode size={25} className="text-[#FDBD18] hover:text-[#8f6803]"/>
                <p className="text-[12px] mt-0 md:mt-2">Boleto</p>
              </div>
              <div className="flex flex-col cursor-pointer justify-center items-center text-center mr-4 md:ml-0 md:mr-0 md:pr-16 md:border-l-0 md:border-r-2 md:pl-12">
                <MdPix size={25} className="text-[#FDBD18] hover:text-[#8f6803]"/>
                <p className="text-[12px] mt-0 md:mt-2">Pix</p>
              </div>
              <div className="flex flex-col cursor-pointer justify-center items-center text-center md:pr-8 md:border-r-2 md:pl-4">
                <BiTransferAlt size={25} className="text-[#FDBD18] hover:text-[#8f6803]"/>
                <p className="text-[12px] mt-0 md:mt-2">Transferência</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateVisual>

    </main>
  )
}
