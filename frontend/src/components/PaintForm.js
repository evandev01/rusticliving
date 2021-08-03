import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Image, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listPaints } from '../actions/customProducts/paintActions'
import {
  addPaint,
  addPaintTotal,
} from '../actions/customProducts/customPreOrderActions/tableBuildActions'

const PaintForm = () => {
  const [checkedValue, setCheckedValue] = useState('')
  const [total, setTotal] = useState(0)

  const dispatch = useDispatch()

  const tableBuild = useSelector(state => state.tableBuild)
  const { size, paint, paintTotal } = tableBuild

  const paintList = useSelector(state => state.paintList)
  const { paints, error, loading } = paintList

  useEffect(() => {
    dispatch(listPaints())

    if (paintTotal && paintTotal !== null) {
      setTotal(paintTotal)
    } else {
      setTotal(0)
    }

    if (paint) {
      setCheckedValue(paint._id)
    }
  }, [dispatch, size, paint, paintTotal])

  return (
    <Row className='mt-3'>
      <Col md={2}>
        <h5>Select a paint: </h5>
        <p>(Cost per sq ft)</p>
      </Col>
      <Col md={8}>
        <Card>
          <Form inline>
            <Row>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message>{error}</Message>
              ) : (
                paints.map(
                  (paint, index) =>
                    paint.productType === 'Table' && (
                      <Col md={2} key={index}>
                        <Image
                          key={paint.paintImage}
                          src={paint.paintImage}
                          id='paintImage'
                          fluid
                          thumbnail
                          rounded
                        />

                        <Form.Check
                          key={paint._id}
                          id={`radio-${index}`}
                          type='radio'
                          variant='outline-success'
                          name={paint.speciesName}
                          value={paint._id}
                          onChange={() => setCheckedValue(paint._id)}
                          checked={paint._id === checkedValue}
                          onClick={() => {
                            dispatch(addPaint(paint._id))
                            dispatch(addPaintTotal(paint.paintPrice * size))
                          }}
                          isValid
                        />
                        <p>
                          {paint.paintName}
                          <br />${paint.paintPrice}
                        </p>
                      </Col>
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
              <h5>Total: ${total}.00</h5>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default PaintForm