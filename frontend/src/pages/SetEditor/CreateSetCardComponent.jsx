import { Trash2, Globe } from 'lucide-react';

const CreateSetCardComponent = () => {
  return (
    <div className="w-full bg-white rounded-lg">
        <div className="flex flex-col md:flex-row justify-evenly md:justify-between px-8 py-5">
            <div className="mb-3 md:mb-0">
              <h3 className="text-[#334758] font-semibold text-[1.3rem] pt-1.5">
                  Create a new flashcard set!
              </h3>
            </div>

            <div className="flex justify-start md:justify-between gap-3 pb-2 md:pb-0">
                <div className="max-w-sm">
                  <button className="btn bg-[#DE2124] btn-md rounded-full border-none text-white text-[1.05rem] font-medium hover:bg-[#F83C40]">
                    <Trash2 size={18} strokewidth={2} />
                    Delete Set
                  </button>
                </div>

                <div className="max-w-sm">
                  <button className="btn btn-ghost btn-md rounded-full border-black text-[1.05rem] font-medium 
                  hover:border-gray-600 hover:text-white hover:bg-gray-600">
                    <Globe size={18} strokeWidth={2} />
                    Share
                  </button>
                </div>

                <div className="max-w-sm">
                  <button className="btn bg-[#334758] btn-md rounded-full border-none text-white font-medium text-[1.05rem] hover:bg-[#3d5469]">
                    Save +
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateSetCardComponent
