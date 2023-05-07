import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
     );
  };


export default App;
