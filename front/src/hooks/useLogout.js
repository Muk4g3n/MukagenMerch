import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../app/endpoints/userEndpoints";
import { useUser } from "./index";
import { toast } from "react-toastify";

export default function useLogout() {
  const { removeUser } = useUser();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  return () => {
    logout()
      .unwrap()
      .then(() => {
        removeUser();
        navigate("/login");
        toast("You have been logged out");
      });
  };
}
