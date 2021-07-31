import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Image, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listStains } from '../actions/customProducts/stainActions'
import { addStain } from '../actions/customProducts/customPreOrderActions/tableBuildActions'

const StainForm = () => {
  const [checkedValue, setCheckedValue] = useState('')
  const [total, setTotal] = useState('')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()

  const tableBuild = useSelector(state => state.tableBuild)
  const { size, stain } = tableBuild

  const stainList = useSelector(state => state.stainList)
  const { stains, error, loading } = stainList

  useEffect(() => {
    dispatch(listStains())

    if (size && price) {
      setTotal(size * price)
    }

    if (stain) {
      console.log(`stain name: ${stain.stainName}`)
    }
  }, [dispatch, size, price, stain, tableBuild])

  return (
    <Row className='mt-3'>
      <Col md={2}>
        <h5>Select a stain: </h5>
        <p>(Cost per sq ft)</p>
      </Col>
      <Col md={8}>
        <Card>
          <Form inline>
            <Row>
              {/* MAP THROUGH STAINS HERE */}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message>{error}</Message>
              ) : (
                stains.map(
                  (stain, index) =>
                    stain.productType === 'Table' && (
                      <>
                        <Col md={2} key={stain._id}>
                          <Image
                            src={stain.stainImage}
                            fluid
                            thumbnail
                            rounded
                          />

                          <Form.Check
                            id={`radio-${index}`}
                            type='radio'
                            variant='outline-success'
                            name={stain.speciesName}
                            value={index}
                            onChange={() => setCheckedValue(index)}
                            checked={index === checkedValue}
                            onClick={() => {
                              dispatch(addStain(stain._id))

                              setPrice(stain.stainPrice)
                            }}
                            isValid
                          />
                          <p>
                            {stain.stainName}
                            <br />${stain.stainPrice}
                          </p>
                        </Col>
                      </>
                    )
                )
              )}
            </Row>
          </Form>
        </Card>
      </Col>
      <Col md={2}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h5>Total: ${total}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default StainForm
