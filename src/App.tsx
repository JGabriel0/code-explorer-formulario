import { useState } from "react";

export function App() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nome === "") {
      alert("Nome não pode estar vazio!");
      return;
    }

    if (email === "") {
      alert("Email não pode estar vazio!");
      return;
    }

    const emailPattern: RegExp =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if (!emailPattern.test(email)) {
      alert("Email inválido!");
      return;
    }

    if (assunto === "") {
      alert("Assunto não pode estar vazio!");
      return;
    }

    if (mensagem === "") {
      alert("Mensagem não pode estar vazio!");
      return;
    }

    alert("Mensagem enviada com sucesso!");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-neutral-950 text-neutral-50">
      <div className="flex flex-col gap-2 p-5 border border-neutral-50 bg-neutral-900 rounded-lg">
        <h1 className="font-bold text-lg m-auto">Formulário</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="flex flex-col gap-1">
            <label className="text-md" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="rounded-md text-neutral-950 p-1"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded-md text-neutral-950 p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-md" htmlFor="assunto">
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              className="rounded-md text-neutral-950 p-1"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-md" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              className="rounded-md text-neutral-950 p-1 max-h-40"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <button
              type="submit"
              className="p-1 bg-blue-600 mt-2 rounded-lg font-bold hover:bg-blue-950"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
