import { ReactNode } from "react";
import "./MainStyles.css";

export const Main = ({ children }: { children: ReactNode }) => {
  return <main className="main_container">{children}</main>;
};
