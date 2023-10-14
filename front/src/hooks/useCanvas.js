import {
  setDark,
  setEditable,
  setTargetPosition,
  setTargetRotation,
} from "../app/slices/canvasModelSlice";

import { useAppDispatch, useAppSelector } from "../app/store";

export default function useCanvas() {
  const dispatch = useAppDispatch();
  const canvasOptions = useAppSelector((state) => state.canvasOptions);

  const setEditableOption = (editable) => {
    dispatch(setEditable(editable));
  };
  const setDarkOption = (dark) => {
    dispatch(setDark(dark));
  };
  const setPositionOption = (position) => {
    dispatch(setTargetPosition(position));
  };
  const setRotationOption = (rotation) => {
    dispatch(setTargetRotation(rotation));
  };

  return {
    canvasOptions,
    setEditableOption,
    setDarkOption,
    setPositionOption,
    setRotationOption,
  };
}
