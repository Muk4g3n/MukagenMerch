import { removeUser, setUser } from "../app/slices/userSlice";

import { useAppDispatch, useAppSelector } from "../app/store";

export default function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const set = (user) => {
    dispatch(setUser(user));
  };

  const remove = () => {
    dispatch(removeUser());
  };

  return { user, setUser: set, removeUser: remove };
}
