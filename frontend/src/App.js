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
import { useEffect } from "react";

export const socket = io.connect("https://quincestrini.com.ar/");

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [{ path: "/upload", element: <Upload /> }],
  },
  {
    path: "/admin",
    children: [
      { path: "photos", element: <AdminPage /> },
      { path: "downloads", element: <AdminPage /> },
      { path: "settings", element: <AdminPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

function App() {
  useEffect(() => {
    socket.on("new_photo_added", () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    });
    socket.on("photo_rejected", () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    });
    socket.on("photo_accepted", () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    });
  }, [socket]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
