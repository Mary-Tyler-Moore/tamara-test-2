import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import styles from '../styles/components/Contact.module.scss'

const Contact = () => {
    const [sending, setSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const { register, handleSubmit, errors, reset } = useForm()

    const linkedinURL = 'https://www.linkedin.com/in/dean-tamara'
    const instagramURL = 'https://www.instagram.com/dean-tamara'
    const apiGatewayUrl = ' https://jjl6w7c4xg.execute-api.us-east-1.amazonaws.com/prod/send-emai'

    const handleSubmitContactForm = (data) => {
        setSending(true)
        axios.post(apiGatewayUrl, data)
            .then(response => {
                setSending(false)
                setMessageSent(true)
                reset()
                console.log(response.data)
            })
            .catch(error => {
                setSending(false)
                setMessageSent(true)
                setMessageError(true)
                console.log(error.message)
            })
    }
    return (
        <section className={styles.contactContainer} id='contact'>
            <h2 className='section-header'>CONTACT</h2>
            <h1 className='section-subheader'>CONTACT ME</h1>
            <div className={styles.contentContainer}>
                <div className={styles.socialLinksContainer}>
                    <div>
                        <a href={linkedinURL} target='_blank' rel="noreferrer">
                            <FaLinkedin className={styles.socialIcon} size={48} />
                        </a>
                        <div className={styles.socialLink}>
                            <a href={linkedinURL} target='_blank' rel="noreferrer">linkedin.com/</a>
                            <a href={linkedinURL} target='_blank' rel="noreferrer">dean-harper</a>
                        </div>
                    </div>
                    <div>
                        <a href={instagramURL} target='_blank' rel="noreferrer">
                            <FaInstagramSquare className={styles.socialIcon} size={48} />
                        </a>
                        <div className={styles.socialLink}>
                            <a href={linkedinURL} target='_blank'>instrgram.com/</a>
                            <a href={instagramURL} target='_blank'>dean-harper</a>
                        </div>
                    </div>
                    <div>
                        <FaEnvelope className={styles.socialIcon} size={48} />
                        <div><p className={styles.socialLink}>deanharper@gmail.com</p></div>
                    </div>
                </div>
                <form className={styles.contactForm} onSubmit={handleSubmit(handleSubmitContactForm)}>
                    <div className={styles.inputContainer}>
                        <input
                            type='text'
                            name='name'
                            aria-label='Full Name'
                            placeholder='Full Name*'
                            ref={register({ required: true })}
                        />
                        {errors.name && <span className={styles.errorMsg}>Please include your name.</span>}
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type='text'
                            name='email'
                            aria-label='Email'
                            placeholder='Email*'
                            ref={register({ required: true })}
                        />
                        {errors.email && <span className={styles.errorMsg}>Please include your email.</span>}
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type='text'
                            name='subject'
                            aria-label='Subject'
                            placeholder='Subject*'
                            ref={register({ required: true })}
                        />
                        {errors.subject && <span className={styles.errorMsg}>Please include a subject for your message.</span>}
                    </div>
                    <div className={styles.textAreaContainer}>
                        <textarea
                            type='text'
                            name='message'
                            aria-label='Message'
                            placeholder='Message*'
                            ref={register({ required: true })}
                        />
                        {errors.message && <span className={styles.errorMsg}>Please include the message you'd like to send me.</span>}
                    </div>
                    {messageSent && !messageError && <h3 className={styles.thankYouMsg}>Thank you! Your message has been sent.</h3>}
                    {messageSent && messageError && <p>Sorry, there was an error. Please try again later or try reaching out to me via email or via one of my social media links.</p>}

                    <div className={styles.submitBtnContainer}>
                        <button type='submit'>{sending ? 'Sending' : 'Send Message'}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
