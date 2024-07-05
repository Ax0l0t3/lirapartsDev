import "./App.css";
// Organisms
import { NavBar } from "./components/organism/NavBar";
import { ProductsCards } from "./components/organism/ProductsCategories";
import { BrandsRibbon } from "./components/organism/BrandsRibbon";
import { BuyingStripe } from "./components/organism/BuyingStripe";
import { SecurityBranding } from "./components/organism/SecurityBranding";
import Footer from "./components/organism/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ProductsCards />
      <BrandsRibbon />
      <BuyingStripe />
      <SecurityBranding />
      <Footer />
    </>
  );
}

export default App;
