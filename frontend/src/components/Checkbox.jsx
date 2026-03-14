import { Check } from 'lucide-react';

const Checkbox = ({ widthHeight, checkSize, onCheck, isChecked }) => {
  return (
    <div className="flex items-center justify-center relative">
        <div className=
        {`
            ${widthHeight} rounded-md flex items-center justify-center border-2
            ${isChecked ? `border-green-500 bg-green-500` :`border-[#334758] bg-white`}
        `}
        onClick={onCheck}
        >
            { isChecked && (<Check className={`${checkSize} absolute inset-0 text-white`} />)}
        </div>
      
    </div>
  )}

export default Checkbox
