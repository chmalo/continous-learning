import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {LoginForm} from "./sections/LoginForm";
import {Dashboard} from "./sections/Dashboard";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginForm />
        },
        {
            path: "/home",
            element: <Dashboard />
        },
    ])


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
