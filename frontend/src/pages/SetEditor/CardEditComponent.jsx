import { useState } from "react";
import FlashCardEditComponent from "./FlashCardEditComponent";
import ChoiceCardEditComponent from "./ChoiceCardEditComponent";

const CardEditComponent = ({card, index, updateCard}) => {
    const isFrontBack = card.cardType === 'basic';

    const toggleMode = () => {
      const newType = isFrontBack ? 'multiple-choice' : 'basic';
      updateCard({cardType: newType});
    }

  return (
    <div className="w-full mx-auto">
      {
        isFrontBack 
          ? <FlashCardEditComponent 
            index={index} 
            toggleMode={toggleMode}
            updateCard={updateCard}
          />
          : <ChoiceCardEditComponent 
            index={index}
            toggleMode={toggleMode} 
            updateCard={updateCard}
          />
      }
    </div>
  )
}

export default CardEditComponent
