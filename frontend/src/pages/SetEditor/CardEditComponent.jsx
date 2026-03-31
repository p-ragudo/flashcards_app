import { useState } from "react";
import FlashCardEditComponent from "./FlashCardEditComponent";
import ChoiceCardEditComponent from "./ChoiceCardEditComponent";

const CardEditComponent = ({card, index, updateCard}) => {
    const [isFrontBack, setIsFrontBack] = useState(true);

    const toggleMode = () => setIsFrontBack(!isFrontBack);

  return (
    <div className="w-full mx-auto">
      {
        isFrontBack 
          ? <FlashCardEditComponent 
            index={index} 
            toggleMode={toggleMode} 
          />
          : <ChoiceCardEditComponent 
            index={index}
            toggleMode={toggleMode} 
          />
      }
    </div>
  )
}

export default CardEditComponent
