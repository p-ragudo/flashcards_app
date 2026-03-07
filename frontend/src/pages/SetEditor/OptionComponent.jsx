const OptionComponent = ({ data, onMarkAsCorrect, onRemove }) => {
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
        <div className="flex justify-end gap-6 order-2 md:order-3 md:gap-6">
            <span>Mark as correct</span>
            <span>Remove</span>
        </div>
    </div>
  )
}

export default OptionComponent
