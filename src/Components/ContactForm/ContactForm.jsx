import React, { useRef, useState } from 'react'
import "./ContactForm.css"

function ContactForm() {

    const form = useRef()
    const [sending, setSending] = useState("")

    const sendEmail = (e) =>{

        e.preventDefault()
        setSending("enviando")

        emailjs.sendForm(
            "service_ct8l01c",
            "template_qb6x96m",
            form.current,
            "HGkXaargYAzqKAbo-"
        ).then(
            () => {
                setSending("enviado");
                form.current.reset()
            },  
            () => {
                setSending("error")
            }
        )
    }

  return (
    <div>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <label>
                Nombre:
            </label>
            <input type="text" name='name' required/>
            <label>
                Correo:
            </label>
            <input type="email" name="email" required/>
            <label>
                Mensaje:
            </label>
            <textarea name="message" required></textarea>
            <button type='submit' disabled={sending === "enviando"}>
                {sending === "enviando" ? "enviando" : "enviar"}
            </button>

            {sending === "enviado" &&
            <p>
                Mensaje enviado correctamente
            </p>
            }

            {sending === "error" &&
            <p>
                Error al enviar el mensaje
            </p>
            }
        </form>
    </div>
  )
}

export default ContactForm