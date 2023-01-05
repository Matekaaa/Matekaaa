'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState}  from 'react'
import logo from 'public/logo.png'
import logow from 'public/logow.png'
import russia from 'public/ru.png'
/*  */
function NavLink({to, children}) {
    return <Link href={to} className={`mx-4 hover:bg-cherry/10 rounded p-3`}>
        {children}
    </Link>
}
/*  */
function MobileNav({open, setOpen}) {
return (
        <div className={`absolute top-0 left-0 h-fit w-screen bg-white2 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-cherry h-28"> 
                <Link href='/'><Image src={logow} height='44' width='44' alt='Ortodox Logó' placeholder='empty'/></Link>        
            </div>
            <div className='bg-white2 absolute h-content w-full'>
                <div className='group text-xl p-4 flex flex-row h-[52px] items-center hover:bg-black/5'><Link href='/'>Főpásztorunk</Link> {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#494949' className='ml-4 duration-200 group-hover:rotate-180'><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg> */}
                </div>
                <div className='group text-xl p-4 flex flex-row h-[52px] items-center hover:bg-black/5'><Link href='/'>Egyházmegyénk</Link> {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#494949' className='ml-4 duration-200 group-hover:rotate-180'><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg> */}
                </div>
                <div className='group text-xl p-4 flex flex-row h-[52px] items-center hover:bg-black/5'><Link href='/'>Magunkról</Link> {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#494949' className='ml-4 duration-200 group-hover:rotate-180'><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg> */}
                </div>
                <div className='group text-xl p-4 flex flex-row h-[52px] items-center hover:bg-black/5'><Link href='/'>Kapcsolat</Link> {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#494949' className='ml-4 duration-200 group-hover:rotate-180'><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg> */}
                </div>
            </div>
        </div>  
    )
}
/*  */
export default function Navbar() {
const [open, setOpen] = useState(false)
    return (
        <nav className={`flex filter drop-shadow-md bg-white2 px-4 py-4 ${ open ? "h-[308px]" : "h-28"} items-center backdrop-blur z-10`}> {/* !!! Add height to the ? operator if adding new categories in MobileNav !!!*/}
            <MobileNav open={open} setOpen={setOpen}/>
            <div className={`w-fit flex items-center flex-row ${open ? "hidden" : ""}`}>
                <Link href='/'><Image src={logo} height='44' width='44' alt='Ortodox Logó' placeholder='empty' className='hidden lg:flex '/></Link>
                <Link href='/' className='ml-4'><span className='font-bold mr-1 text-lg'>Magyar Ortodox Egyházmegye</span>(Moszkvai Patriarkátus)</Link>
            </div>
            <div className={`w-fit ml-auto flex justify-end items-center ${open ? "flex-col h-full mt-11" : ""}`}>
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                setOpen(!open)}}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full  rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 bg-white2" : "bg-black"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5 bg-white2" : "bg-black"}`} />
                </div>
                <div className={`${open ? "h-1 mt-auto w-full": "hidden"}`}>
                </div>
                <div className="hidden items-center md:flex">
                    <NavLink to="/">
                        Főpásztorunk
                    </NavLink>
                    <NavLink to="/"> {/* egyházmegyénk papság */}
                        Egyházmegyénk
                    </NavLink>
                    <NavLink to="/"> {/* --"-- dokumentumok könyvtár" */}
                        Magunkról
                    </NavLink>
                    <NavLink to="/">
                        Kapcsolat
                    </NavLink>
                    <div>
                        <Link href='/ru'> <Image src={russia} height='12' width='18' alt='Русский'/> </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}