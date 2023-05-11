interface SkillProps {
    title: string;
    description: string;
    image: string;
}


export default function Skill(props: SkillProps) {
    return (


      <div className='bg-white shadow-2xl flex flex-col overflow-hidden rounded-xl md:w-full md:flex-row border-t-4 min-w-[300px] md:min-w-0 md:min-h-[190px] mt-4'>
        <div className='flex justify-center items-center md:w-[230px]'>
          <img src={props.image} alt={props.image} className='bg-cover h-[120px] w-[120px] md:h-[140px] md:w-[140px] rotate-6 mt-2'/>
        </div>

        <div className='flex flex-col justify-center items-center text-center md:block md:justify-center md:items-center md:text-start p-4 '>
          <h1 className='text-2xl'>{props.title}</h1>
          <p className='text-[0.8rem] md:text-[1rem] mt-6'>{props.description}</p>
        </div>
      </div>
    )
}