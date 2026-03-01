import { Route, Routes } from "react-router";

import HomePage from "./pages/Home/HomePage";
import ViewPage from "./pages/ViewPage";
import SetEditorPage from "./pages/SetEditorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<SetEditorPage />} />
      <Route path="/view/:viewId" element={<ViewPage />} />
      <Route path="/edit/:editId" element={<SetEditorPage />} />
    </Routes>
  )
}

export default App
