import {
  // RouterProvider,
  // createBrowserRouter,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./styles.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <ProtectedRoute>
  //         <Home />
  //       </ProtectedRoute>
  //     ),
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="">
    //   <RouterProvider router={router} />
    // </div>
  );
}

export default App;
