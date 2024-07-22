import { createContext, useState } from "react";
// Molecule
import { PortalComponent } from "./components/molecule/PortalComponent";
// Organisms
import { BrandsRibbon } from "./components/organism/BrandsRibbon";
import { BuyingStripe } from "./components/organism/BuyingStripe";
import { Footer } from "./components/organism/Footer";
import { ProductsCards } from "./components/organism/ProductsCategories";
// Ecosystems
import { NavBar } from "./components/ecosystem/NavBar";
// Utils
import { DemoModalContent } from "./utils/DemoModalContent";
import { SearchBarContent } from "./utils/SearchBarContent";
// Styles
import "./App.css";

export const PortalContext = createContext(null);

function App() {
  const [showPortal, setShowPortal] = useState(false);
  const [portalContent, setPortalContent] = useState("");
  const [mouseInContent, setMouseInContent] = useState(false);
  const renderPortalChildren = () => {
    switch (portalContent) {
      case "Demo":
        return (
          <DemoModalContent
            mouseEnter={() => setMouseInContent(true)}
            mouseLeave={() => setMouseInContent(false)}
          />
        );
      case "Search":
        return (
          <SearchBarContent
            mouseEnter={() => setMouseInContent(true)}
            mouseLeave={() => setMouseInContent(false)}
          />
        );
      default:
        return <div className="h-4 w-4 rounded-full bg-red-400" />;
    }
  };

  return (
    <>
      <PortalContext.Provider
        value={{
          mouseInContent,
          portalContent,
          showPortal,
          setMouseInContent,
          setPortalContent,
          setShowPortal,
        }}
      >
        <NavBar />
        <ProductsCards />
        <BrandsRibbon />
        <BuyingStripe />
        <Footer />
      </PortalContext.Provider>
      <PortalComponent
        isVisible={showPortal}
        setIsVisible={() => (!mouseInContent ? setShowPortal(false) : null)}
        portalChildren={renderPortalChildren()}
      />
    </>
  );
}

export default App;
