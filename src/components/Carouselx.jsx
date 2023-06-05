import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import styles from '../styles/components/Projects.module.scss'

export default function Carouselx () {
  const data = useStaticQuery(graphql`
      query CarouselQuery {
        soccerPhotos: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "soccer"}}, sort: {fields: relativePath, order: ASC}) {
         edges {
           node {
             id
             base
             childImageSharp {
               fluid( maxWidth: 1200, maxHeight: 800, fit: COVER, cropFocus: NORTH ) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
         }
       }
      }
    `)

  return (
    <div>
      <section id='photos' className={styles.projectsContainer}>
        <h2 className='section-header'>PHOTOS</h2>
        <h1 className='section-subheader'>MY PHOTOS</h1>
        <div className='section-body'>
          <Container>
            <Carousel>
              {
                data.soccerPhotos.edges.map(image => (
                  <Carousel.Item key={image.node.id}>
                    <Img
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split('-').join(' ').split('.')[0]}
                    />
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </Container>
        </div>
      </section>
    </div>
  )
}
