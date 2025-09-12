import { AccountProvider } from "@/contexts/AccountFromContexto";
import Routes from "@/routes";

export default function Index() {
  return (
    <AccountProvider>
      <Routes />
    </AccountProvider>
  );
}
