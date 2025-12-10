import React, { useRef, useState } from 'react'
import "./ContactForm.css"

function ContactForm() {

    const form = useRef()
    const [sending, setSending] = useState("")

    const sendEmail = async (e) =>{

        e.preventDefault()
        setSending("Enviando")

        const formData = new FormData(form.current)

        formData.append("access_key", "7949a901-3ee8-46ef-b395-c80636f0a82d")
        formData.append("subject", "Nuevo mensaje desde tu portfolio")

        const response = await fetch("https://api.web3forms.com/submit", {method: "POST", body: formData})

        if(response.ok){
            setSending("Enviado")
            form.current.reset()
        }
        else{
            setSending("Error")
        }
    }


  return (
    <div>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='contact-form__user'>
                <div>
                    <label className='contact-form__subtitles'>
                        Nombre:
                    </label>
                    <input type="text" name='name' required className='contact-form__user-input'/>                   
                </div>
                <div>
                    <label className='contact-form__subtitles'>
                        Correo:
                    </label>
                    <input type="email" name="email" required className='contact-form__user-input'/>
                </div>
            </div>
            <div className='contact-form__message-container'>
                <label className='contact-form__subtitles'>
                    Mensaje:
                </label>
                <textarea name="message" required className='contact-form__message'></textarea>
            </div>
            <div className='contact-form__button-container'>
                <button type='submit' disabled={sending === "enviando"} className='contact-form__button'>
                    {sending === "Enviando" ? "Enviando" : "Enviar"}
                </button>
            </div>

            {sending === "Enviado" &&
            <p>
                Mensaje enviado correctamente
            </p>
            }

            {sending === "Error" &&
            <p>
                Error al enviar el mensaje
            </p>
            }
        </form>
    </div>
  )
}

export default ContactForm