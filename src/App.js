// import logo from "./logo.svg";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import TermsPage from "./app/terms/TermsPage";
import UsPage from "./app/us/UsPage";
import PriceListPage from "./app/dashboard/pricelist/PriceListPage";
import { AdvancedMode, NewProduct } from "./components";

import "./App.css";

const translatedData = {
  price_list: {
    no_products: "No Product",
    add_product_now: "Add Product",
    new_product: "New Product",
    print_list: "Print List",
    article_number: "Article No.",
    product_or_service: "Product / Service",
    in_price: "In Price",
    price: "Price",
    in_stock: "In Stock",
    unit: "Unit",
    description: "Description",
    article_number_placeholder: "Enter article number",
    product_service_placeholder: "Enter product name",
    in_price_placeholder: "Enter in price",
    price_placeholder: "Enter price",
    in_stock_placeholder: "Enter stock",
    unit_placeholder: "Enter unit",
    description_placeholder: "Enter description",
    save: "Save",
    close: "Close",
    search_article_number: "Search Article No ..",
    search_product: "Search Product ..",
    advanced_mode: "Advanced Mode",
    advanced_mode_text_1:
      "In advanced mode - Unit - you have a dedicated field for unit on the invoices and price list.",
    advanced_mode_text_2:
      "In advanced mode - Full - you have a dedicated field for article number and for unit on the invoices and price list.",
    advanced_mode_text_3:
      "It is only recommended to use Advanced mode - Full if you need to use article number, as it will impact the layout of the invoice to a great degree, as a lot more information is needed on the invoice. [THIS IS FOR TEST]",
    advanced_mode_text_4:
      "For most users - Ordinary mode - (and for some, Advanced mode - Unit) is the best option to use.",
    ordinary_mode: "Ordinary Mode",
    advanced_mode_unit: "Advanced Mode - Unit",
    advanced_mode_full: "Advanced Mode - Full",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p>Hey, this is the home page. Please go to the following links:</p>
        <ul>
          <li>
            <a href={"/terms"}>/terms</a>
          </li>
          <li>
            <a href={"/us"}>/us</a>
          </li>
          <li>
            <a href={"/pricelist"}>/pricelist</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    path: "/advancedMode",
    element: <AdvancedMode translatedData={translatedData} />,
  },
  {
    path: "/newProduct",
    element: (
      <NewProduct
        translatedData={translatedData}
        text={translatedData?.price_list?.add_product_now}
        py={"4"}
        height={""}
        px={"8"}
      />
    ),
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/us",
    element: <UsPage />,
  },
  {
    path: "/pricelist",
    element: <PriceListPage />,
  },
]);

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </MantineProvider>
  );
}

export default App;
