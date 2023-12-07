import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect } from "react";

//components
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Steps from "./components/pages/First";
import Pi from "./components/pages/PI";
import Mha from "./components/pages/Mha";
import Pha from "./components/pages/Pha";
import Pha2 from "./components/pages/Pha2";
import SRA from "./components/pages/SRA";
import SRA2 from "./components/pages/SRA2";
import ER from "./components/pages/ER";
import RC from "./components/pages/RC";
import Navbar from "./components/Navbar/Navbar";
import Podcasts from "./components/pages/Podcasts";
import Chatbot from "./components/chatbot/chatbot.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="chat" element={<Chatbot />} />
      <Route path="contact" element={<Contact />} />
      <Route path="podcasts" element={<Podcasts />} />
      <Route path="Steps">
        <Route index element={<Steps />} />
        <Route path="personal_info" element={<Pi />} />
        <Route path="mental_health" element={<Mha />} />
        <Route path="phy_health" element={<Pha />} />
        <Route path="phy_health2" element={<Pha2 />} />
        <Route path="social_Rel" element={<SRA />} />
        <Route path="social_Rel2" element={<SRA2 />} />
        <Route path="emotional_Res" element={<ER />} />
        <Route path="recommendations_comments" element={<RC />} />F
      </Route>
    </Route>
  )
);

function App() {
  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
