'use client'
import React, { useState } from 'react'
import { FormEvent } from 'react'
import {v4 as uuid} from 'uuid'
import { Message } from '../../typings'



function BlogPosts() {
  const [input, setInput] = useState('')
  const addMessage = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
  if (!input) return;
  const messageToSend = input;
  setInput('');
  const id = uuid()
  const message : Message = {
    id,
    message : messageToSend,
    created_at : Date.now(),
    username : 'ELon Musk',
    tags : 'ortodox',
  }
  };

  return (
    <div className='w-1/2 flex flex-col'>
      <aside>
            <div className='font-medium text-xl font-serif mt-10 mb-3'>Keresés</div>
            <form action="/search" onSubmit={addMessage} className='flex flex-row items-center py-3 px-4 bg-black/5 rounded-2xl relative overflow-hidden m-0 z-1'>
            <input type="search" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Keresés ...' name='q' autoComplete='off' className='caret-cherry/80 font-medium text-medium w-full bg-transparent p-0 outline-none '/>
            <span className='w-[1px] h-6 -my-1 bg-black/5'></span>
            <button type="submit" data-e2e="search-button" disabled={!input} className="py-[11px] pr-4 pl-[12px] my-[-12px] mx-[-16px] cursor-pointer outline-none border-none ml-0 bg-transparent"><svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="rgba(0, 0, 0, .34)" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path></svg></button>
            </form>
    </aside>
    </div>
  )
}

export default BlogPosts