import { ToastContainer } from "react-toastify";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout />;
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
