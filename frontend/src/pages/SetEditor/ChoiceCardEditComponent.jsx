import { Trash2, Settings2, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import OptionComponent from "./OptionComponent";

const ChoiceCardEditComponent = ({number}) => {
    const [isRandomizeChoices, setIsRandomizeChoices] = useState(false);

    // test data for OptionComponent
    const data = {
        order: 1,
        content: "This is option 1",
        isCorrect: true
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
                <div className="w-full flex flex-col md:flex-row md:justify-between sm:items-start md:items-center mb-6">
                    <p className="flex font-medium text-[#334758] text-sm mb-2 md:mb-0">
                        MULTIPLE CHOICE QUESTIONS
                    </p>
                    <div className="flex md:justify-evenly gap-10">
                        <div className="flex gap-3 items-center">
                            <ToggleSwitch 
                                isToggled={isRandomizeChoices}
                                onClick={() => setIsRandomizeChoices(!isRandomizeChoices)}
                                widthHeight="w-9 h-6"
                                knobSize="w-4 h-4"
                                translateDist="translate-x-3.5"
                            />
                            <span className="font-medium text-[#334758]">Randomize choices</span>
                        </div>
                        <button className="btn btn-sm rounded-full hover:text-white hover:bg-gray-600 transition-colors">
                            <Settings2 size={16} />
                            Turn to flashcard
                        </button>
                    </div>
                </div>
                <OptionComponent data={data} />
            </div>

        </div>
      </div>
    </div>
  )
}

export default ChoiceCardEditComponent
