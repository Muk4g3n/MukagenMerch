import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, useEffect } from "react";
import Routes from "./routes";
import { useGetUserDataMutation } from "./app/endpoints/userEndpoints";
import { removeUser, setUser } from "./app/slices/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [GetUserData] = useGetUserDataMutation();

  useEffect(() => {
    GetUserData()
      .unwrap()
      .then((user) => setUser(user))
      .catch((e) => removeUser());
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
