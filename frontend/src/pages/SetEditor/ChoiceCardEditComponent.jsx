import { Trash2, Settings2, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";

const ChoiceCardEditComponent = ({number}) => {
    const [isMultipleChoice, setIsMultipleChoice] = useState(false);

    const handleMultipleChoiceToggle = e => {
        setIsMultipleChoice(prev => !prev);
    }

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="flex flex-col px-6 py-5">
        <div className="w-full flex justify-between mb-10">
            <h3 className="font-medium text-[#334758] text-[1.4rem]">
                {number}
            </h3>
            <button className="border border-[#334758] rounded-full p-2 hover:text-white hover:bg-[#DE2124] hover:border-[#DE2124] transition-colors">
                <Trash2 size={24} strokeWidth={2} className="text-[#334758 text-[1.25rem]" />
            </button>
        </div>

        <div className="flex flex-col gap-14 mb-6">
            <div className="flex flex-col gap-2">
                <input 
                type="text"
                placeholder="Enter question"
                className=" w-full p-3 outline-none bg-[#DDDDE5] rounded-md text-[#334758] text-[1.05rem] font-medium"
                />
                <p className="font-medium text-[#334758] text-sm">
                    QUESTION
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="w-full flex flex-col md:flex-row md:justify-between">
                    <p className="flex font-medium text-[#334758] text-sm sm:mb-6">
                        MULTIPLE CHOICE QUESTIONS
                    </p>
                    <div className="flex md:justify-evenly gap-10">
                        <button className="
                            flex justify-evenly gap-3 items-center"
                            onClick={handleMultipleChoiceToggle}
                        >
                            {
                                isMultipleChoice ? <ToggleRight size={30} color={"#334758"} /> 
                                : <ToggleLeft size={30} color={"#334758"} />
                            }
                            <span className="font-medium text-[#334758]">Randomize choices</span>
                        </button>
                        <button className="btn btn-sm rounded-full hover:text-white hover:bg-gray-600 transition-colors">
                            <Settings2 size={16} />
                            Turn to flashcard
                        </button>
                    </div>
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

export default ChoiceCardEditComponent
