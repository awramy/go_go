import {AccountProvider} from "./AccountContext/provider";
import {FC, ReactNode} from "react";

const MainProvider: FC<{children: ReactNode}> = ({children}) => {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  );
};

export default MainProvider;