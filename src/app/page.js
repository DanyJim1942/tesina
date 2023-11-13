import ContactForm from "./components/usuario";
import navbar from "./components/navbar";
import Links from "next/link";


export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>
      {1 + 1}
      <ContactForm></ContactForm>
      <li key={"/hub"}>
        <Links href="/hub">Tablas</Links>
      </li>
      <p>hola amigos</p>
    </div>
  );
}
