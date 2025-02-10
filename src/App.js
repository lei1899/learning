import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import GlobalStyle from './globalStyle';
import HomePage from "./pages/home/homePage";
import NewsPage from "./pages/news/newsPage";
import NavBar from "./components/common/navBar/navBar";
import NewsDetailPage from './pages/newsDetail/newsDetailPage';

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
        path: "news",
        element: <NewsPage/>
      },
      {
        path: "news/:newsId",
        element: <NewsDetailPage/>
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