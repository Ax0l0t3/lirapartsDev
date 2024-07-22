// Organisms
import { NavBar } from "./components/ecosystem/NavBar";
import { ProductsCards } from "./components/organism/ProductsCategories";
import { BrandsRibbon } from "./components/organism/BrandsRibbon";
import { BuyingStripe } from "./components/organism/BuyingStripe";
import { Footer } from "./components/organism/Footer";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ProductsCards />
      <BrandsRibbon />
      <BuyingStripe />
      <Footer />
    </>
  );
}

export default App;
