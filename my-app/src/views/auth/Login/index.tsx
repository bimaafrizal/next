import Link from "next/link";
import { useRouter } from "next/router";
import style from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={style.login}>
      <h1 className="big">Login Page</h1>
      <button onClick={handleLogin}>Product</button>
      <p style={ { fontSize: "1.5rem", color: "red", borderRadius: "10px" } }>
        Belum punya akun? register <Link href={"/auth/register"}>Disini</Link>{" "}
      </p>
    </div>
  );
};

export default LoginViews;
