import {AccountProvider} from "./AccountsList/provider";
import {FC, ReactNode} from "react";
import ActiveAccountProvider from "./ActiveAccount/provider";
import ProxyListProvider from "./ProxyList/provider";

const MainProvider: FC<{children: ReactNode}> = ({children}) => {
  return (
    <AccountProvider>
      <ActiveAccountProvider>
        <ProxyListProvider>
          {children}
        </ProxyListProvider>
      </ActiveAccountProvider>
    </AccountProvider>
  );
};

export default MainProvider;