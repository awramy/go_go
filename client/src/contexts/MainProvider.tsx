import {AccountProvider} from "./AccountsList/provider";
import {FC, ReactNode} from "react";

const MainProvider: FC<{children: ReactNode}> = ({children}) => {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  );
};

export default MainProvider;