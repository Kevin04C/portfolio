
export const sendForm = async ({name, email, message}) => {
  const res = await fetch("https://formsubmit.co/ajax/kevincespedes2004@gmail.com", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      nombre: name,
      correo: email,
      mesaje: message
    }),
  })
  if(!res.ok) return {success: false, message: "Hubo un error al enviar el formulario"}

  const response = await res.json();
  return {
    success: response.success,
    message: "¡Formulario enviado!"
  }
}