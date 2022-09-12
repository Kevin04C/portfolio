import { useRef, useState } from "react";
import { Spinner } from "./Spinner";
import { Error } from "./Error";
import { regExpForm } from "../helpers/regExpForm";
import { useEffect } from "react";
import { sendForm } from "../helpers/sendForm";
import { Message } from "./Message";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState("");
  const [isValidSendForm, setIsValidSendForm] = useState(false);
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  const { name, email, messaje } = formState;

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(formState).includes(""))
      setAlert("Rellene todos los campos");
    else if (!regExpForm.email.test(email)) setAlert("Correo no válido");
    else {
      setAlert("");
      setIsValidSendForm(true);
    }
  };
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    const getResponseSendForm = async () => {
      if (isValidSendForm) {
        setIsSendingForm(true);
        try {
          const res = await sendForm(formState);
          if (!res.success) throw new Error(res);

          setMessageSuccess(res.message);
        } catch (err) {
          setAlert(err.message);
          console.log(err);
        } finally {
          setIsSendingForm(false);
          setInterval(() => {
            setMessageSuccess("");
            formRef.current.reset();
          }, 3000);
        }
      }
    };
    getResponseSendForm();
  }, [isValidSendForm]);

  return (
    <section id="contacto" className="my-24">
      <div className="md:w-2/4 mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          ¡Déjame un mensaje!
        </h1>
        <p className="text-slate-600  text-xl md:text-2xl">
          Si te gustó lo que vistes o algo te pareció interesante, puedes
          contactar conmigo en el siguiente formulario 😎💻.{" "}
        </p>
      </div>

      <form
        className="md:w-2/5 mx-auto border-slate-400 border p-4 rounded-md shadow-sm"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        {!!alert && <Message type="error" message={alert} />}
        {!!messageSuccess && (
          <Message type="success" message={messageSuccess} />
        )}
        <div className="mb-4">
          <label htmlFor="" className="block mb-2 text-sm text-slate-400">
            Tu nombre
          </label>
          <input
            type="text"
            placeholder="Ejemplo: Kevin"
            className="w-full py-2 border-slate-400 border-b-2 outline-none focus:border-blue-500 transition-all"
            name="name"
            id="name"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block mb-2 text-sm text-slate-400">
            Ingresa tu correo
          </label>
          <input
            type="text"
            placeholder="correo@correo.com"
            className="w-full py-2 border-slate-400 border-b-2 outline-none focus:border-blue-500 transition-all"
            name="email"
            id="email"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block mb-2 text-sm text-slate-400">
            Déjame tu mensaje
          </label>
          <textarea
            cols="30"
            className="w-full py-2 border-slate-400 border-b-2 outline-none focus:border-blue-500 transition-all h-36 resize-none"
            placeholder="tu mensaje"
            name="message"
            onChange={handleInputChange}
            autoComplete="off"
            id="message"
          ></textarea>
        </div>
        {isSendingForm ? (
          <Spinner />
        ) : (
          <input
            type="submit"
            className="w-full bg-blue-500 rounded-md font-bold text-lg text-white py-2 cursor-pointer hover:bg-blue-600 transition-all"
          />
        )}
      </form>
    </section>
  );
};
