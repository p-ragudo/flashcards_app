import { useState } from "react";
import NavBar from "../../components/NavBar";
import CreateSetCardComponent from "./CreateSetCardComponent";
import toast from "react-hot-toast";
import FlashCardEditComponent from "./FlashCardEditComponent";

const SetEditorPage = () => {
  const [title, setTitle] = useState("Title");
  const [desc, setDesc] = useState("");

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

    console.log(`Title: ${title}\nDescription: ${desc}`);
    toast.success("Successfully Saved!");
  }

  return (
    <div className="min-h-screen w-full bg-[#DDDDE5]">
      <div className="max-w-6xl w-full mx-auto px-3 pb-24">
        <div className="sticky top-0 z-50 bg-[#DDDDE5] pt-3 mb-12">
          <NavBar />
        </div>

        <CreateSetCardComponent
          onDelete={handleDelete}
          onShare={handleShare}
          onSave={handleSave}
        />

        <div className="w-full bg-white rounded-lg mt-6 mb-24">
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
          <FlashCardEditComponent number={1} />
          <FlashCardEditComponent number={2} />
          <FlashCardEditComponent number={3} />
        </div>
      </div>
    </div>
  )
}

export default SetEditorPage
