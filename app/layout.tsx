import Header from '@/components/Header'
import './globals.css'
import { Preahvihear } from 'next/font/google'
import Contact from '@/components/Contact'

const preahvihear = Preahvihear({weight: '400', style: "normal", subsets: ['latin']})

export const metadata = {
  title: 'EliMaker',
  description: 'EliMaker - O melhor design para seu negócio',
  DataView: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${preahvihear.className} bg-[#FFFFFF] h-[190vh]`}>
        <Header />
        {children}
        <div className='hidden md:flex'>
        <Contact />
        </div>
      </body>
    </html>
  )
}
