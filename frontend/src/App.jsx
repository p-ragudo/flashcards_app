import { Route, Routes } from "react-router";
import toast from "react-hot-toast";

import HomePage from "./pages/HomePage";
import ViewPage from "./pages/ViewPage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute inset-0 h-full w-full 
      bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] 
      bg-[size:6rem_5rem] 
      [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view/:viewId" element={<ViewPage />} />
        <Route path="/edit/:editId" element={<EditPage />} />
      </Routes>
    </div>
  )
}

export default App
