import NavBar from "../../components/NavBar";
import CreateSetCardComponent from "./CreateSetCardComponent";

const SetEditorPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#DDDDE5]">
      <div className="max-w-7xl w-full mx-auto">
        <div className="sticky top-0 z-50 bg-[#DDDDE5] pt-3 mb-12">
          <NavBar />
        </div>

        <CreateSetCardComponent />
      </div>
    </div>
  )
}

export default SetEditorPage
