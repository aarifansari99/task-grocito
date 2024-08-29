import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./Components/HeaderComponent";
import ShopPage from "./Components/ShopPageComponent";

function App() {
  return (
    <div className="App">
      {/* //shop component// */}
      <div className="shop-component">
        <ShopPage />
      </div>
    </div>
  );
}

export default App;
