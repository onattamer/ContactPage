import { FooterComponent } from '@/components/footer'
import { HeaderComponent } from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderComponent></HeaderComponent>

    


      <div className='flex-grow'></div>
      <FooterComponent></FooterComponent>
    </div>
    
  )
}
