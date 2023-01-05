import React from 'react'
import Image from 'next/image'
import welcome from 'public/welcome.jpg'


function SidebarRight() {
  return (
    <div className={` flex-col w-1/4 hidden md:flex`}>
          <div>
            SZERETETTEL KÖSZÖNTJÜK A MAGYAR ORTODOX EGYHÁZMEGYE HONLAPJÁN!
            <Image src={'https://days.pravoslavie.ru/jpg/ib3901.jpg'} alt="Святитель Петр Московский. " width='123' height='160' className='mx-auto my-6'/>
          </div>
          <aside>
            <div className='font-medium text-xl font-serif mt-10 mb-3'>Hírek egyházközségeink életéből</div>
            <div>

            </div>
          </aside>
        </div>
  )
}

export default SidebarRight