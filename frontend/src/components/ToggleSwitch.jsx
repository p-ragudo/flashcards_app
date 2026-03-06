export function ToggleSwitch({
  isToggled, 
  onClick,
  widthHeight = "w-20 h-10",
  knobSize = "w-8 h-8",
  translateDist = "translate-x-10"
}) {
  return (
    <div className=
      {
        `${widthHeight} rounded-full flex items-center justify-start p-0.5 border-2 border-[#334758] transition-color
        ${isToggled ? "bg-[#334758]" : "bg-white" }`
      }
      onClick={onClick}
    >
      <div className=
        {
          `${knobSize} rounded-full transition-transform duration-300
          ${isToggled ? `${translateDist} bg-white` : "translate-x-0 bg-[#334758]"}`
        }
      >

      </div>
    </div>
  );
}