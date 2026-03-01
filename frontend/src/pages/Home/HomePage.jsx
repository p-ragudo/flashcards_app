import { useNavigate } from 'react-router';
import { Github } from 'lucide-react';

import CreateCard from "./CreateCard.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col px-3 justify-between">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white
      bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] 
      bg-[size:6rem_5rem] 
      [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
      </div>

      <div className="flex justify-end">
        <a href="https://www.github.com/p-ragudo" target="_blank" className='btn bth-ghost border-none mt-10'>
          <Github className="w-7 h-7" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[#334758] text-6xl font-[600] mb-6">
          AppName <span className="text-[#4A4F53] text-[1.12rem] font-[400]">v 1.0.0</span>
        </h1>
        
        <h2 className="text-[#4A4F53] text-3xl font-[350] mb-12 flex flex-col text-center max-w-prose">
          <span>Free flashcards tool. Instantly create,</span>
          <span>study, and share flashcards.</span>
        </h2>

        <CreateCard onClick={() => navigate('/create')}/>
      </div>

      <div className="flex justify-center">
        <footer className='text-[#4A4F53] text-md font-medium mb-10'>made by icspks</footer>
      </div>
    </div>
  )
}

export default HomePage