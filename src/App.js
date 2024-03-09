import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import CMSForm from "./component/cms/CMSForm";
import CMSHome from "./component/cms/CMSHome";
import CMSAllProducts from "./component/cms/CMSAllProducts";
import CMSPopularProducts from "./component/cms/CMSPopularProducts";
import CMSCookieProducts from "./component/cms/CMSCookieProducts";
import CMSChocolateProducts from "./component/cms/CMSChocolateProducts";
import CMSCakeProducts from "./component/cms/CMSCakeProducts";
import CMS from "./pages/CMS";
import { action as CMSAction } from "./component/cms/CMSForm";
import Contact from "./pages/Contact.jsx";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/choco-and-judy",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
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
          ],
        },
        {
          path: "/cms",
          element: <CMS />,
          children: [
            {
              path: "/cms",
              element: <CMSHome />,
            },
            {
              path: "/cms/all",
              element: <CMSAllProducts />,
            },
            {
              path: "/cms/popular",
              element: <CMSPopularProducts />,
            },
            {
              path: "/cms/cookie",
              element: <CMSCookieProducts />,
            },
            {
              path: "/cms/chocolate",
              element: <CMSChocolateProducts />,
            },
            {
              path: "/cms/cake",
              element: <CMSCakeProducts />,
            },
            {
              path: "/cms/add-product",
              element: <CMSForm method="post" />,
              action: CMSAction,
            },
            {
              path: "/cms/edit-product",
              element: <CMSForm method="patch" />,
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
