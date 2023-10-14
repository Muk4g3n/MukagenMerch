import { setColor } from "../app/slices/colorSlice";

import { useAppDispatch, useAppSelector } from "../app/store";

export default function useColor() {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color);

  const set = (color) => {
    dispatch(setColor(color));
  };
  return { color, setColor: set };
}
