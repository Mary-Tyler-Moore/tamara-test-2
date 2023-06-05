import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/components/404.module.scss'


const errorPage = () => {
    return (
        <Layout>
            <div className={styles.errorPageContainer}>
                <h1 className={styles.errorMsg}>
                    Oops. This page does not exist. Please 
                    click <a className={styles.homeLink} href='/'>here</a> to 
                    navigate back to the home page.
                </h1>
            </div>
        </Layout>
    )
}

export default errorPage
