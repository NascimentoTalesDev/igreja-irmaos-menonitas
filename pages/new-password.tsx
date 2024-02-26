import LinkItem from "@/components/Link";
import Logo from "@/components/Logo";
import TitleH1 from "@/components/TitleH1";
import Input from "@/components/InputContainer";
import { useState } from "react";
import Button from "@/components/Button";
import Head from "next/head";

export default function Home() {
  const [matchPassword, setMatchPassword] = useState(false)

  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [isCreatingNewPassword, setIsCreatingNewPassword] = useState(false)

  function checkMatchPassword() {
    if (newPassword.length && confirmNewPassword.length) {
      if (newPassword !== confirmNewPassword) {
        setMatchPassword(true)
      } else {
        setMatchPassword(false)
      }
    } else {
      setMatchPassword(false)
    }
  }

  return (
    <section className="bg-secondary h-full w-full overflow-y-hidden flex justify-center items-center">
      <Head>
        <meta property="og:title" content={"Sistema Financeiro - Igreja Irmãos Menonitas - Criar Nova Senha"} />
        <meta property="og:url" content={`https://igrejairmaosmenonitas.vercel.app`} />
        <meta property="og:image" content={`${<Logo cursor="cursor-default" />}`} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:locale" content="pt-BR" />
        <title>Sistema Financeiro - Igreja Irmãos Menonitas - Criar Nova Senha</title>
      </Head>
      <div className="flex min-h-[500px] flex-col w-[300px] mx-auto">
        <div className="flex justify-center">
          <Logo cursor="cursor-default" />
        </div>
        <TitleH1 className="text-center" text="Criar Nova Senha" />
        <p className="text-center text-sm text-light font-light tracking-wide ">Igreja Irmãos Menonitas</p>
        <Input onKeyUp={checkMatchPassword} className={"mt-[16px]"} padlock={true} look={true} type="password" value={newPassword} onChange={(ev) => setNewPassword(ev.target.value)} text="Senha" placeholder="Senha" />
        <Input onKeyUp={checkMatchPassword} className={"mt-[16px]"} padlock={true} look={true} type="password" value={confirmNewPassword} onChange={(ev) => setConfirmNewPassword(ev.target.value)} text="Senha" placeholder="Confirme a senha" />
        {matchPassword ?
          <p className='mt-2 text-danger text-sm md:text-base'>As senhas não conferem.</p>
          :
          ""
        }
        {!matchPassword ? (
          <Button text="Acessar minha conta" className="bg-primary mt-[14px]" />

        ) :
          (
            <Button text="Acessar minha conta" className="mt-[14px] bg-neutral-500 cursor-not-allowed" />
          )}

        <div>
        </div>
      </div>
    </section>
  );
}
