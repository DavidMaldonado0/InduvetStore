import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Start from '../components/Start'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {

    const keyword  = match.params.keyword

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
       dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    return (
        <>
          <Start/>
          <h1 className="text-center mtopone">Productos</h1>
          {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <Row>
            {products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
              </Col>
            ))}
        </Row> }
            
        </>
    )
}

export default HomeScreen
