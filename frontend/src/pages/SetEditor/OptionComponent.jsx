import Checkbox from "../../components/Checkbox";

const OptionComponent = ({ data, onCheck, isChecked, onRemove}) => {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center">
        <span className="text-[#8C8C8C] font-medium order-1 md:mr-10">
            Option {data.order ?? 1}
        </span>
        <input 
          type="text"
          placeholder="enter option..."
          className="
              w-full md:flex-1 p-1 outline-none border-b border-b-[#334758] text-[#334758] text-[1rem] font-normal
              order-3 col-span-2 md:order-2 md:mr-10"
        />
        <div className="flex justify-end gap-8 order-2 md:order-3 md:gap-8">
            <div className="flex gap-2">
              <Checkbox widthHeight={'w-6 h-6'} checkSize={'w-6 h-6'} onCheck={onCheck} isChecked={isChecked} />
              <span>Mark as correct</span>
            </div>
            <button onClick={onRemove} className="flex gap-3">
              <span>—</span>
              <span>Remove</span>
            </button>
        </div>
    </div>
  )
}

export default OptionComponent
