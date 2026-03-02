import NavBar from "../../components/NavBar";
import CreateSetCardComponent from "./CreateSetCardComponent";

const SetEditorPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#DDDDE5]">
      <div className="max-w-6xl w-full mx-auto px-3">
        <div className="sticky top-0 z-50 bg-[#DDDDE5] pt-3 mb-12">
          <NavBar />
        </div>

        <CreateSetCardComponent />

        <div className="w-full bg-white rounded-lg mt-6">
          <div className="flex flex-col justify-between p-5 gap-3">
            <div className="w-full bg-[#DDDDE5] rounded-md p-3">
              Title
            </div>

            <div className="w-full bg-[#DDDDE5] rounded-md p-3">
              Description
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetEditorPage
