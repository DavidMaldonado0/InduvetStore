import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
          dispatch(listProductDetails(match.params.id))  
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

        return <div>
            <Link className="btn btn-success mtopone" to="/">Regresar</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid /> 
                </Col>
                <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Precio: Lps. {product.price}.00
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Descripción: {product.description}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Precio:</Col>
                                    <Col>
                                        <strong>Lps. {product.price}.00</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Estado:</Col>
                                    <Col>
                                       {product.countInStock > 0 ? 'Disponible' : 'Agotado'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Cantidad:</Col>
                                        <Col>
                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                       {
                                        [...Array(product.countInStock).keys()].map(x=> (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))
                                        }
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Añadir a Orden
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}
            
        
        </div>
    
}

export default ProductScreen
