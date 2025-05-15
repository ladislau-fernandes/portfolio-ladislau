import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [sent] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_ubtmi7h',
      'template_njwslwp', 
      {
        from_name: 'Seu nome',
        message: 'Mensagem aqui',
        reply_to: 'seuemail@gmail.com'
      },
      '8X54h1D9qrTI29BTl' 
    ).then(() => {
      alert("Mensagem enviada com sucesso!");
    }).catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao enviar.");
    });
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Seu nome"
          value={form.from_name}
          onChange={handleChange}
          required
          className="w-full border rounded p-3"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Seu email"
          value={form.from_email}
          onChange={handleChange}
          required
          className="w-full border rounded p-3"
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border rounded p-3 h-32 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
        {sent && <p className="text-green-600 mt-3">Mensagem enviada com sucesso!</p>}
      </form>
    </section>
  );
};

export default Contact;
