import { Layers, ArrowRight } from 'lucide-react';

const CreateCard = ({ onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className={`bg-[#334758] w-full max-w-[18rem] px-6 py-4 rounded-lg flex flex-col
                text-left hover:bg-[#3d5469] hover:shadow-xl active:scale-95 transition-all outline-none`}
        >
            <div className="flex justify-between items-start w-full mb-4">
                <Layers size={25} className="text-white"/>
                <ArrowRight size={25} className="text-white" />
            </div>

            <h2 className="text-center text-white text-[1.35rem] font-light">
                Create a new flashcard set
            </h2>

        </button>
    )
}

export default CreateCard;