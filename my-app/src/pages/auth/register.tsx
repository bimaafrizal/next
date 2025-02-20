import Link from "next/link";

const RegisterPage = () => {
    return (
      <div>
        <h1>Register</h1>
        <p>
          Sudah punya akun? register <Link href={"/auth/login"}>Disini</Link>{" "}
        </p>
      </div>
    );
};

export default RegisterPage;