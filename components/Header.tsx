'use client';

export default function Header(){
    return (
        <header className="w-full bg-black h-20 flex text-center items-center justify-center md:justify-around shadow-2xl md:rounded-b-xl md:fixed md:z-20">
            <div className="flex justify-center items-center text-white text-2xl">
                <h1>Eli<span className="font-bold text-[#C8C8C8]">Maker</span></h1>
            </div>
            <nav className="text-white gap-40 hidden md:flex ">
                <a onClick={() => {
                    window.scrollTo({top: 0, behavior: 'smooth'})
                }} className="relative link cursor-pointer">Home</a>
                <a className="relative link cursor-pointer" onClick={() => {
                    window.scrollTo({top: 600, behavior: 'smooth'})
                }}>My Skills</a>
                <a className="relative link cursor-pointer" onClick={() => {
                    window.scrollTo({top:1200, behavior: 'smooth'})
                }}>Payment Methods</a>
            </nav>
        </header>
    )
}