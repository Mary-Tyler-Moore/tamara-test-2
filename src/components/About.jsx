import React from 'react'
import me from '../../static/Portrait_Placeholder.png'
import styles from '../styles/components/About.module.scss'

const About = () => {
  return (
    <section id='about'>
      <h2 className='section-header'>ABOUT</h2>
      <h1 className='section-subheader'>ABOUT US</h1>
      <div className='section-body'>
        <div className={styles.skillsContainer}>

        </div>
        <div className={styles.aboutContentContainer}>
          <img className={styles.me} src={me} alt="Lorem Ipsum" />
          <div>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Tincidunt lobortis feugiat vivamus at augue. Lacus vel facilisis volutpat est. Enim tortor at auctor urna nunc id cursus metus. Etiam non quam lacus suspendisse faucibus interdum posuere. Aliquet risus feugiat in ante metus dictum at tempor commodo. Malesuada fames ac turpis egestas sed tempus urna. Dignissim enim sit amet venenatis urna cursus eget nunc. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
