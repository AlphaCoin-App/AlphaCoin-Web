import "./App.css";
import "./index.css";
import { LandingPage, LoginPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
