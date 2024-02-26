import LinkItem from "@/components/Link";
import Logo from "@/components/Logo";
import TitleH1 from "@/components/TitleH1";
import Input from "@/components/InputContainer";
import { useState } from "react";
import Button from "@/components/Button";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  return (
    <section className="bg-secondary h-full w-full overflow-y-hidden">
      <Head>
        <meta property="og:title" content={"Sistema Financeiro - Igreja Irmãos Menonitas - Login"} />
        <meta property="og:url" content={`https://igrejairmaosmenonitas.vercel.app`} />
        <meta property="og:image" content={`${<Logo cursor="cursor-default"/>}`} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:locale" content="pt-BR" />
        <title>Sistema Financeiro - Igreja Irmãos Menonitas - Login</title>
      </Head>
      <div className="flex flex-col w-[300px] mx-auto pt-[80px] sm:pt-[30px]">
        <div className="flex justify-center">
          <Logo cursor="cursor-default" />
        </div>
        <TitleH1 className="text-center mt-[50px] md:mt-[30px]" text="Sistema Financeiro" />
        <p className="text-center text-sm text-light font-light tracking-wide ">Igreja Irmãos Menonitas</p>
        <Input className={"mt-[24px]"} user={true} value={email} type="email" onChange={(ev) => setEmail(ev.target.value)} text="Email" placeholder="Email" />
        <Input className={"mt-[16px]"} padlock={true} look={true} type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} text="Senha" placeholder="Senha" />
        <LinkItem path="/forgot-password" className="text-right text-sm mt-[16px] underline md:text-xs" text="Esqueci minha senha" />
        <Button text="Acessar minha conta" className="bg-primary mt-[14px]" />
        <div className="flex mt-[14px] md:mt-[10px]">
          <input className="cursor-pointer" type="checkbox" id="password-remember" name="password-remember" value="password-remember" />
          <label htmlFor="password-remember" className="cursor-pointer ml-[10px] text-light text-sm md:text-xs">Lembrar email e senha</label>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}
