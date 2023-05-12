import Link from 'next/link'
import {BsInstagram, BsWhatsapp, BsBehance} from 'react-icons/bs'

export default function Contact() {
    return (
        <div className="fixed contact2 contact w-[13rem] h-[4rem] rounded-t-xl shadow-2xl border-t-4">
            <div className="flex items-center justify-center h-full text-center w-full gap-4">
                <Link href="https://www.instagram.com/alexsander_eli/" target='_blank'><BsInstagram color='black' /></Link>
                <Link href="https://api.whatsapp.com/send/?phone=%2B5579981173409&text&type=phone_number&app_absent=0" target='_blank'><BsWhatsapp color='black'/></Link>
                <Link href="https://www.behance.net/EliMakeer" target='_blank'><BsBehance color='black'/></Link>

            </div>
        </div>
    )
}