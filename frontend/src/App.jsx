import { Route, Routes } from "react-router";
import toast from "react-hot-toast";

import HomePage from "./pages/HomePage";
import ViewPage from "./pages/ViewPage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/view/:viewId" element={<ViewPage />} />
      <Route path="/edit/:editId" element={<EditPage />} />
    </Routes>
  )
}

export default App
