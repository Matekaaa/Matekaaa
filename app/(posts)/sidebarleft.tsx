import React from 'react'
import LogoutButton from './logout'
import Link from 'next/link'
import SearchBar from './searchbar'


function SidebarLeft() {
    const session = false
  return (
    <div className='flex-col w-1/4 ml-2 hidden md:flex overflow-visible	'> 
          <aside>
            <div className='font-medium text-xl font-serif mt-10 mb-3'>Hirdetések</div>
            <ul className='ml-5 list-disc'>
              <li><Link href="/" className='text-white2 rounded p-2 bg-cherry/90 hover:bg-cherry/50 text-sm'>Támogassuk Egyházunkat</Link></li>
              <li className='mt-4'><Link href="/" className='text-cherry hover:text-cherry/70'>Főpapi szolgálatok rendje</Link></li>
            </ul>
          </aside>
          <aside>
            <div className='font-medium text-xl font-serif mt-10 mb-3'>Istentiszteletek Rendje</div>
            <ul className='ml-5 list-disc'>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Budapesti Nagyboldogasszony székesegyház</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Miskolci Szentháromság templom</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Szegedi Szent György Nagyvértanú templom</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Nyíregyházi Szent György nagyvértanú ortodox templom</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Debreceni Szentháromság templom</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Gyöngyösi Szent Miklós templom</Link></li>
              <li className='mb-1'><Link href="/" className='text-cherry hover:text-cherry/70'>Tokaji Szent Miklós templom</Link></li>
              <hr className='w-full -ml-4 pb-1'/>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Budapesti Szentháromság egyházközség</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Budapesti Szent Szergij egyházközség</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Hévízi “Életetadó forrás ikonja” egyházközség</Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>Ürömi Szent Alexandra kápolna</Link></li>
            </ul>
          </aside>
          <SearchBar />
          <aside>
            <div className='font-medium text-xl font-serif mt-10 mb-3'>Kalendárium</div>
            <ul className='ml-5 list-disc'>
              <li><Link href="/" className='text-cherry hover:text-cherry/70'>2022 Kalendárium</Link></li>
            </ul>
          </aside>
          <aside>
            <div className='font-medium text-xl font-serif mt-10 mb-3'>Közvetítések</div>
            <ul className='ml-5 list-disc'>
              <li className='pb-3'><Link href="/" className='text-cherry hover:text-cherry/70 whitespace-nowrap'>Budapesti Nagyboldogasszony székesegyház
              </Link></li>
            </ul>
          </aside>
          <hr className='w-full ml-1 pb-3'/>
          <aside>
            <ul className={`ml-5 list-none ${session ? "hidden" : "flex flex-col"}`}>
              <li><Link href="/" className='text-cherry hover:text-cherry/70 flex items-start h-content m-0'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mr-3'><path d="M10 10q-1.25 0-2.125-.875T7 7q0-1.25.875-2.125T10 4q1.25 0 2.125.875T13 7q0 1.25-.875 2.125T10 10Zm-6 6v-2q0-.479.26-.906.261-.427.719-.719 1.146-.667 2.427-1.021Q8.688 11 10 11q1.312 0 2.594.354 1.281.354 2.427 1.021.458.271.719.708.26.438.26.917v2Z"/></svg>
                </span>
                Bejelentkezés
              </Link></li>
              <li><Link href="/" className='text-cherry hover:text-cherry/70 flex items-start h-content m-0'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mr-3'><path d="M6 12.5q1.042 0 1.771-.729Q8.5 11.042 8.5 10q0-1.042-.729-1.771Q7.042 7.5 6 7.5q-1.042 0-1.771.729Q3.5 8.958 3.5 10q0 1.042.729 1.771.729.729 1.771.729ZM6 15q-2.083 0-3.542-1.458Q1 12.083 1 10q0-2.083 1.458-3.542Q3.917 5 6 5q1.625 0 2.927.969T10.75 8.5h6.75L19 10l-2.75 3.312L14.5 11.5 13 13l-1.5-1.5h-.75q-.5 1.562-1.812 2.531Q7.625 15 6 15Z"/></svg>
                </span>
                Regisztráció
              </Link></li>
            </ul>
            <div className={`ml-5 list-none ${session ? "flex flex-col" : "hidden"}`}>
              <LogoutButton />
            </div>
          </aside>
        </div>
  )
}

export default SidebarLeft