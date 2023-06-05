import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import styles from '../styles/components/Contact.module.scss'

const Contact = () => {
    const instagramURL = 'https://www.instagram.com/drharper08'

    return (

        <section className={styles.contactContainer} id='contact'>
            <h2 className='section-header'>CONTACT</h2>
            <h1 className='section-subheader'>CONTACT US</h1>
            <div className={styles.contentContainer}>
                <div className={styles.socialLinksContainer}>
                    <div>
                        <a href={instagramURL}>
                            <FaInstagramSquare className={styles.socialIcon} size={48} />
                        </a>
                        <div className={styles.socialLink}>
                            <a href={instagramURL}>drharper08</a>
                        </div>
                    </div>
                    <div>
                        <FaEnvelope className={styles.socialIcon} size={48} />
                        <div><p className={styles.socialLink}>example@gmail.com</p></div>
                    </div>
                </div>
                <form className={styles.contactForm} name="gavin-church" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className={styles.textAreaContainer}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" />
                    </div>
                    <div className={styles.submitBtnContainer}>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </section>


    )
}

export default Contact
