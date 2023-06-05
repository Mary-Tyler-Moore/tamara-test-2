import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'
import '../styles/base.scss'

const Layout = ({children}) => {
    return (
        <div>
            <Helmet 
                title='Dean Harper'
                meta={[
                    {
                      name: "description",
                      content: "Lorem Ipsum",
                    },
                    {
                      name: "keywords",
                      content: "Lorem Ipsum",
                    },
                  ]}
            >
              <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
