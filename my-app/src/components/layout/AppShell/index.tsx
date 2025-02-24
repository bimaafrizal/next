import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const disableNavabar = ["/auth/login", "/auth/register", "/404", "/500"];

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    console.log(pathname);

  return (
    <main>
        {disableNavabar.includes(pathname) ? null :
        <Navbar /> }
        {children}
    </main>
  );
};

export default AppShell;