import { ArrowLeftRight, Trash2, Settings2 } from "lucide-react";

const FlashCardEditComponent = ({card, index, updateCard, toggleMode}) => {

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="flex flex-col px-6 py-5">
        <div className="w-full flex justify-between mb-10">
            <h3 className="font-medium text-[#334758] text-[1.4rem]">
                {index}
            </h3>
            <div className="flex gap-4">
                <button className="border border-[#334758] rounded-full p-2 hover:text-white hover:bg-gray-600 transition-colors">
                    <ArrowLeftRight size={24} strokeWidth={2} className="text-[#334758 text-[1.25rem]" />
                </button>
                <button className="border border-[#334758] rounded-full p-2 hover:text-white hover:bg-[#DE2124] hover:border-[#DE2124] transition-colors">
                    <Trash2 size={24} strokeWidth={2} className="text-[#334758 text-[1.25rem]" />
                </button>
            </div>
        </div>

        <div className="flex flex-col gap-10 mb-6">
            <div className="flex flex-col gap-2">
                <input 
                type="text"
                placeholder="Enter front term..."
                className=" w-full p-3 outline-none bg-[#DDDDE5] rounded-md text-[#334758] text-[1.05rem] font-medium"
                />
                <p className="font-medium text-[#334758] text-sm">
                    FRONT
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex justify-end">
                    <button 
                        className="btn btn-sm rounded-full hover:text-white hover:bg-gray-600 transition-colors"
                        onClick={toggleMode}
                    >
                        <Settings2 size={16} />
                        Turn to Multiple Choice
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <input 
                    type="text"
                    placeholder="Enter back term..."
                    className=" w-full p-3 outline-none bg-[#DDDDE5] rounded-md text-[#334758] text-[1.05rem] font-medium"
                    />
                    <p className="font-medium text-[#334758] text-sm">
                        BACK
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCardEditComponent
