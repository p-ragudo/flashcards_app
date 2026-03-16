const AddOptionComponent = ({onClick}) => {
  return (
    <div className="flex w-full justify-center">
        <button className="btn rounded-full border-none text-white hover:bg-[#3d5469] bg-[#334758]" onClick={onClick}>
            Add Option +
        </button>
    </div>
  )
}

export default AddOptionComponent
