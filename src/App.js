import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import GlobalStyle from './globalStyle';
import HomePage from "./pages/home/homePage";
import NavBar from "./components/common/navBar/navBar";
import ListenListPage from "./pages/listenList/listenListPage";
import ListenDetailPage from "./pages/listenDetail/listenDetailPage";
import ReadListPage from "./pages/readList/readListPage";
import ReadDetailPage from "./pages/readDetail/readDetailPage";

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
        path: "listenList/:listId",
        element: <ListenListPage/>
      },
      {
        path: "listenDetail/:detailId",
        element: <ListenDetailPage/>
      },
      {
        path: "readList/:listId",
        element: <ReadListPage/>
      },
      {
        path: "readDetail/:detailId",
        element: <ReadDetailPage/>
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