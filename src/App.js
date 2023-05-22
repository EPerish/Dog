import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
position="top-right"
autoClose={5000}
closeOnClick
theme="colored"
/>
    </div>
     );
  };


export default App;
