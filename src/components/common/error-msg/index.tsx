import { FC, ReactNode } from "react";

type ErrorMsgProps = {
  children: ReactNode;
};

export const ErrorMsg: FC<ErrorMsgProps> = ({ children }) => {
  return <div className="text-xl text-red-500">{children}</div>;
};
