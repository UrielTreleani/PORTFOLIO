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
                <div className='contact-form__form'>
                    <label className='contact-form__subtitles'>
                        NOMBRE
                    </label>
                    <input type="text" name='name' required className='contact-form__user-input'/>                   
                </div>
                <div className='contact-form__form'>
                    <label className='contact-form__subtitles'>
                        CORREO
                    </label>
                    <input type="email" name="email" required className='contact-form__user-input'/>
                </div>
                <div className='contact-form__form'>
                    <label className='contact-form__subtitles'>
                        MENSAJE
                    </label>
                    <textarea name="message" required className='contact-form__user-input  message'></textarea>
                </div>
            </div>
            <div className='contact-form__button-container'>
                <button type='submit' disabled={sending === "ENVIANDO"} className='contact-form__button'>
                    {sending === "ENVIANDO" ? "ENVIANDO" : "ENVIAR MENSAJE"}
                </button>
            </div>

            {sending === "ENVIADO" &&
            <p>
                Mensaje enviado correctamente
            </p>
            }

            {sending === "ERROR" &&
            <p>
                Error al enviar el mensaje
            </p>
            }
        </form>
    </div>
  )
}

export default ContactForm