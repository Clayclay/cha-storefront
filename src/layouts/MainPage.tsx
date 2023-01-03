import ProductLists from "../components/ProductList";

import "./MainPage.css";
import { BiStore } from "react-icons/bi";

function MainPage(): JSX.Element {
  return (
    <>
      <nav className="navigation-title">
        <h1>
          <BiStore />
          Awesomee Store
        </h1>
      </nav>
      <ProductLists />
    </>
  );
}
export default MainPage;