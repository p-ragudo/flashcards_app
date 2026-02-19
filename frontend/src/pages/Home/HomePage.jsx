import { useNavigate } from 'react-router';

import CreateCard from "./CreateCard.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateButton = () => {
    // implement creation of new button
    navigate('/edit/someId')
  }

  return (
    <div className="relative inset-0 min-h-screen w-full">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white
      bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] 
      bg-[size:6rem_5rem] 
      [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="mx-auto text-center">
          <div className="text-[#334758] text-6xl font-[600] mb-6">
            AppName <span className="text-[#4A4F53] text-[1.12rem] font-[400]">v 1.0.0</span>
          </div>
          <div className="text-[#4A4F53] text-3xl font-[350] mb-12 flex flex-col">
            <span>Free flashcards tool. No sign-up required.</span>
            <span>Instantly create, study, and share flashcards.</span>
          </div>
          <div className="flex justify-center">
            <CreateCard onClick={handleCreateButton}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage
