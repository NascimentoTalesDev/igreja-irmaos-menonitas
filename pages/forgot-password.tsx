import LinkItem from "@/components/Link";
import Logo from "@/components/Logo";
import TitleH1 from "@/components/TitleH1";
import Input from "@/components/InputContainer";
import { useState } from "react";
import Button from "@/components/Button";
import Head from "next/head";
import Back from "@/components/Back";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  return (
    <section className="bg-secondary h-full w-full overflow-y-hidden flex justify-center items-center">
      <Head>
        <meta property="og:title" content={"Sistema Financeiro - Igreja Irmãos Menonitas - Login"} />
        <meta property="og:url" content={`https://igrejairmaosmenonitas.vercel.app`} />
        <meta property="og:image" content={`${<Logo cursor="cursor-default"/>}`} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:locale" content="pt-BR" />
        <title>Sistema Financeiro - Igreja Irmãos Menonitas - Login</title>
      </Head>
      <div className="absolute top-[20px] left-[20px]">
        <Back />
      </div>
      <div className="flex min-h-[500px] flex-col w-[300px] mx-auto">
        <div className="flex justify-center">
          <Logo cursor="cursor-default" />
        </div>
        <TitleH1 className="text-center mt-[20px]" text="Recuperar Senha" />
        <p className="text-center text-sm text-light font-light tracking-wide ">Igreja Irmãos Menonitas</p>
        <Input className={"mt-[24px]"} user={true} value={email} type="email" onChange={(ev) => setEmail(ev.target.value)} text="Email" placeholder="Email" />
        <Button text="Recuperar Senha" className="bg-primary mt-[14px]" />
        
        <div className="flex mt-[14px] md:mt-[10px]">
          <span className="cursor-pointer text-light text-sm md:text-xs">Lembrou a senha?</span>
          <LinkItem path="/" className="text-right ml-[10px] text-sm underline md:text-xs" text="Fazer login" />
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}
