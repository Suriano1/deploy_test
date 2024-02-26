"use client";
import Image from "next/image";
import { FaUserLarge, FaUnlockKeyhole } from "react-icons/fa6";
import logoGF from "../../../public/LogoGreenFuelTransparenteVerdeAzul.png";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os Campos");
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      alert("Dados Inválidos");

      return;
    }
    router.replace("/dashboard");
  }
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-gray-50 px-16 py-12  border rounded border-gray-400 shadow-2xl">
        <div className="flex justify-center items-center">
          {" "}
          <Image
            src={logoGF}
            alt=""
            width={200}
            className="mb-8
        "
          />
        </div>
        <h3 className="font-semibold text-center text-2xl mb-6">
          Faça o login
        </h3>
        <div className="flex justify-end w-[100%]">
          <p className="text-red-600 text-sm font-medium">*Required Fields</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center p-2 border rounded-md border-gray-400 hover:bg-gray-100">
              <FaUserLarge />
              <input
                className="w-[100%] focus:outline-none bg-transparent"
                type="text"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center p-2 border rounded-md border-gray-400 hover:bg-gray-100">
              <FaUnlockKeyhole />
              <input
                className="w-[100%] focus:outline-none bg-transparent"
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassowrd(e.target.value)}
              />
            </div>
          </div>

          <div className=" flex items-center justify-center">
            <button
              className="bg-[#116618a4] text-white px-6 py-3 w-[50%] font-[500] rounded-md mt-6 shadow-2xlg hover:bg-[#2e803565]"
              type="submit"
            >
              Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
