import { Trash2, Settings2, ToggleLeft, ToggleRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import OptionComponent from "./OptionComponent";
import AddOptionComponent from "./AddOptionComponent";

const ChoiceCardEditComponent = ({number}) => {
    const [isRandomizeChoices, setIsRandomizeChoices] = useState(false);
    const [options, setOptions] = useState([])

    const toggleCheckbox = (id) => {
        setOptions(prevOptions => prevOptions.map(
            option => option.id === id ? {...option, isCorrect: !option.isCorrect} : option
        ));
    }

    const addOption = () => {
        const newOption = {
            id: crypto.randomUUID(),
            text: "",
            isCorrect: false
        };

        setOptions(prevOptions => [...prevOptions, newOption]);
    }

    const removeOption = (id) => {
        setOptions(prevOptions => 
            prevOptions.filter(option => option.id !== id)
        );
    }

    // for testing, fill up options with default vals
    useEffect(() => {
        setOptions([
            {id: crypto.randomUUID(), text: "", isCorrect: false},
            {id: crypto.randomUUID(), text: "", isCorrect: false}
        ])
    }, [])

    // useEffect(() => {
    //     const loadOptions = async () => {
    //         try {
    //             fetch card data
    //             const data = fetchCardData();

    //             if(data.options && data.options.length > 0) {
    //                 setOptions(data.options);
    //             } else {
    //                 setOptions([
    //                     {id: crypto.randomUUID(), text: "", isCorrect: false},
    //                     {id: crypto.randomUUID(), text: "", isCorrect: false}
    //                 ])
    //             }
    //         } catch (e) {
    //             console.error("Failed to fetchOptions or loadOptions:", e);

    //             setOptions([
    //                 {id: crypto.randomUUID(), text: "", isCorrect: false},
    //                 {id: crypto.randomUUID(), text: "", isCorrect: false}
    //             ])

    //             // notify user using toast
    //         }
    //     }
    //     loadOptions();
    // }, []);

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

                {options.map((option, index) => (
                    <OptionComponent
                        key={option.id}
                        data={option} 
                        index={index + 1}
                        onCheck={() => toggleCheckbox(option.id)} 
                        isChecked={option.isCorrect}
                        onRemove={() => removeOption(option.id)}
                    />
                ))};

                <AddOptionComponent onClick={addOption}/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default ChoiceCardEditComponent
