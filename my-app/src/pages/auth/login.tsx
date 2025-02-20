import Link from "next/link";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

const LoginPage = () => {
    const { push } = useRouter();
    const [isLogin] = useState(false);
    const handleLogin = () => {
        push("/product");
    };

    useEffect(() => {
        if (!isLogin) {
            push("/product");
        }
    }, []);

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Product</button>
            <p>Belum punya akun? register <Link href={'/auth/register'}>Disini</Link> </p>
        </div>
    );
};

export default LoginPage;