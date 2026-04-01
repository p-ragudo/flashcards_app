import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../../components/NavBar";
import CreateSetCardComponent from "./CreateSetCardComponent";
import toast from "react-hot-toast";
import CardEditComponent from "./CardEditComponent";
import axios from "../../lib/axios";

const SetEditorPage = () => {
  const [title, setTitle] = useState("Title");
  const [desc, setDesc] = useState("");
  const [cards, setCards] = useState([]);

  const { editId } = useParams();

  useEffect(() => {
    const initCards = Array.from({length: 2}, (_, index) => ({
      id: crypto.randomUUID(),
      cardType: 'basic',
      question: "",
      answer: "",
      options: [],
      orderIndex: index
    }));

    setCards(initCards);
  }, []);

  // TODO
  const handleDelete = async (e) => {
    e.preventDefault();

    toast.success("Successfully Deleted!");
  }

  // TODO
  const handleShare = async (e) => {
    e.preventDefault();

    toast.success("Successfully Shared!");
  }

  // TODO
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/flashcard-sets', {
        title,
        desc,
        editId,
      });

      const saveCardPromises = cards.map((card) => {
        return axios.post(`/flashcards/${editId}`, {
          cardId: card.mongoId,
          question: card.question,
          answer: card.answer,
          cardType: card.cardType,
          options: card.options,
          correctIndices: card.correctIndices
        });
      });

      const results = await Promise.all(saveCardPromises);

      const updatedCards = cards.map((card, index) => ({
          ...card,
          mongoId: results[index].data.card._id
      }));
      setCards(updatedCards);

      toast.success("Successfully Saved!");
    } catch(error) {
      if(error.response?.status === 429) {
        toast.error("Too many requests! Try again in a bit")
      } else {
        toast.error("Failed to save flashcard set");
      }
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#DDDDE5]">
      <div className="flex justify-center sticky top-0 z-50 bg-[#DDDDE5] pt-3 mb-6">
        <div className="w-full max-w-6xl px-3">
          <NavBar />
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-3 pb-24">
        <CreateSetCardComponent
          onDelete={handleDelete}
          onShare={handleShare}
          onSave={handleSave}
        />

        {/* Title and Description */}
        <div className="w-full bg-white rounded-lg mt-6 mb-24 shadow-md">
          <div className="flex flex-col px-6 py-5 gap-3">
            <input 
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" w-full p-3 outline-none bg-[#DDDDE5] rounded-md text-[#334758] text-[1.05rem] font-medium"
            />

            <input 
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className=" w-full p-3 outline-none bg-[#DDDDE5] rounded-md text-[#334758] text-[1.05rem] font-medium"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {cards.map((card, index) => (
            <CardEditComponent 
              key={card.id}
              index={index+1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SetEditorPage
