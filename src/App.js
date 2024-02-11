import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { sendData } from "./store/fetchAction";
import { useSelector, useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
import CMS from "./component/shop/CMS";
import { action as CMSAction } from "./component/shop/CMS";

let isInitial = true;

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.products);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   dispatch(sendData(data));
  // }, [data, dispatch]);

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
              path: "/shop/:id",
              element: <Item />,
            },
            {
              path: "/shop/cart",
              element: <Cart />,
            },
            {
              path: "/shop/cms",
              element: <CMS />,
              action: CMSAction,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
