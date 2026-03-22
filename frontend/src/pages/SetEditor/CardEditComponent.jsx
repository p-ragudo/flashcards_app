import { useState } from "react";
import FlashCardEditComponent from "./FlashCardEditComponent";
import ChoiceCardEditComponent from "./ChoiceCardEditComponent";

const CardEditComponent = ({data}) => {
    const [isFrontBack, setIsFrontBack] = useState(true);

    const toggleMode = () => setIsFrontBack(!isFrontBack);

  return (
    <div className="w-full mx-auto">
      {
        isFrontBack 
          ? <FlashCardEditComponent data={data} toggleMode={toggleMode} />
          : <ChoiceCardEditComponent data={data} toggleMode={toggleMode} />
      }
    </div>
  )
}

export default CardEditComponent
