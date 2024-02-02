import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PopularProducts from "./component/shop/PopularProducts";
import AllProducts from "./component/shop/AllProducts";
import ChocolateProducts from "./component/shop/ChocolateProducts";
import CakeProducts from "./component/shop/CakeProducts";
import CookieProducts from "./component/shop/CookieProducts";
import Item from "./component/shop/Item";
import Cart from "./component/shop/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
          children: [
            {
              path: "/shop",
              element: <PopularProducts />,
            },
            {
              path: "/shop/products",
              element: <AllProducts />,
            },
            {
              path: "/shop/chocolate",
              element: <ChocolateProducts />,
            },
            {
              path: "/shop/cake",
              element: <CakeProducts />,
            },
            {
              path: "/shop/cookie",
              element: <CookieProducts />,
            },
            {
              path: "/shop/item",
              element: <Item />,
            },
            {
              path: "/shop/cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
