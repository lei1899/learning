import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import GlobalStyle from './globalStyle';
import HomePage from "./pages/home/homePage";
import NavBar from "./components/common/navBar/navBar";
import ListPage from "./pages/list/listPage";
import ListenDetailPage from "./pages/listenDetail/listenDetailPage";
import ReadDetailPage from "./pages/readDetail/readDetailPage";
import WriteDetailPage from "./pages/writeDetail/writeDetailPage";

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
        path: "readDetail/:detailId",
        element: <ReadDetailPage/>
      },
      {
        path: "writeDetail/:detailId",
        element: <WriteDetailPage/>
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