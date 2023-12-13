import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePoll from "./pages/CreatePoll";
import Poll from "./pages/Poll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-poll",
    element: <CreatePoll />,
  },
  {
    path: "/poll",
    element: <Poll />,
  },
]);

export default router;
