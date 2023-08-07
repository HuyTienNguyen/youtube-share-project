import { useSelector } from "react-redux";
import { RootState } from "../store";

export const getIsAuthenticated = (): boolean => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return isAuthenticated;
};
