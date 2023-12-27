import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import {
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "./App.css";
import HomePage from "./pages/HomePage";
import Upload from "./components/UploadImage/Upload";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000/");

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [{ path: "/upload", element: <Upload /> }],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <LoginPage /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
