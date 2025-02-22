import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import GlobalStyle from './globalStyle';
import HomePage from "./pages/home/homePage";
import NavBar from "./components/common/navBar/navBar";
import ListPage from "./pages/list/listPage";
import ListenDetailPage from "./pages/listenDetail";
import ReadDetailPage from "./pages/readDetail";
import WriteDetailPage from "./pages/writeDetail";
import VideoDetailPage from "./pages/videoDetail";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </>,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: "list/:id",
        element: <ListPage/>
      },
      {
        path: "listen/:id",
        element: <ListenDetailPage/>
      },
      {
        path: "read/:id",
        element: <ReadDetailPage/>
      },
      {
        path: "write/:id",
        element: <WriteDetailPage/>
      },
      {
        path: "video/:id",
        element: <VideoDetailPage/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;