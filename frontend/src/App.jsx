import { Route, Routes } from "react-router";

import HomePage from "./pages/Home/HomePage";
import ViewPage from "./pages/ViewPage";
import SetEditorPage from "./pages/SetEditor/SetEditorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create/:editId" element={<SetEditorPage />} />
      <Route path="/view/:viewId" element={<ViewPage />} />
      <Route path="/edit/:editId" element={<SetEditorPage />} />
    </Routes>
  )
}

export default App
