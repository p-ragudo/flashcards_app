import { Check } from 'lucide-react';
import { useState } from 'react';

const Checkbox = ({ widthHeight, checkSize, onClick }) => {
    const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div className="flex items-center justify-center relative">
        <div className={`
            ${widthHeight} rounded-sm flex items-center justify-center
            ${isCorrect ? `border-green-500 bg-green-500` :`border-[#334758]`}
        `}>
            { isCorrect 
                ? <Check className={`${checkSize} absolute inset-0 text-white`} />
                : <></>
            }
        </div>
      
    </div>
  )}

export default Checkbox
