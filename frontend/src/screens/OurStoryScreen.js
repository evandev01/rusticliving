import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import TempStore from '../assets/store_front/temp_store.png'
import Logo from '../assets/logos/logo_fb.jpg'
import { motion } from 'framer-motion'

const OurStoryScreen = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.01 }}
      >
        <Container className='story-container'>
          <Row>
            <Col md={2} />
            <Col className='text-center' md={8}>
              <motion.img
                src={TempStore}
                alt='Rustic Living store front'
                className='store-front'
              />
            </Col>
            <Col md={2} />
          </Row>

          <Row>
            <Col md={2} />
            <Col md={8} className='text-left mt-3'>
              <p>
                &ensp; A table can be just another piece of furniture in your
                house, but it can also be much more than that! ​
              </p>
              <p>
                &ensp; Consider all of life's moments that are shared at the
                dinner table. From victories to tragic loses, the dinner table
                serves as a gathering space for all of life's stories to be
                shared. ​
              </p>
              <p>
                &ensp; It's for this reason that we not only love what we do,
                but do it with so much love. We realize and cherish that in
                designing, building and delivering our tables, we are providing
                a place for stories to be shared and memories to be made. ​
              </p>
              <p>
                &ensp; At Rustic Living, our hope is to awaken the American
                Culture with the power of the Dinner Table. We want to gather
                families around a meal at a table, and inspire them to play
                games, share laughs & create moments of meaningful conversation
                the same way our business was founded, at the Dinner Table. ​
              </p>
              <p>
                &ensp; We'd be honored to co-create a piece for your home by
                helping you design and deliver a piece of our hearts through the
                furniture we make. Our style is rustic through and through. What
                people call imperfections are to us what gives our pieces unique
                looks that make for one of a kind centerpieces. ​
              </p>
              <p>
                &ensp; We'd love to contribute the work of our hands as a
                starting place for life long memories to be made, and the story
                of our lives to be shared.
              </p>
            </Col>{' '}
            <Col md={2} />
          </Row>

          <Row className='justify-content-center'>
            <Col className='text-center'>
              <Image
                src={Logo}
                style={{ maxWidth: '300px', height: 'auto' }}
                rounded
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  )
}

export default OurStoryScreen
