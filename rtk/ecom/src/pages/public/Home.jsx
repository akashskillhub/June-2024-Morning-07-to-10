import React from 'react'
import { useGetPublicProductsQuery } from '../../redux/apis/publicApi'
import { Link } from 'react-router-dom'

const Home = () => {
    return <>
        <Slider />
        <ProductGrid />
    </>
}

const Slider = () => {
    const { data } = useGetPublicProductsQuery()
    return <div className='mb-2'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="500">
            <div class="carousel-inner" style={{ height: "500px" }}>
                {
                    data && data.map((item, index) => <div class={`carousel-item ${index === 0 && "active"}`} key={item.id}>
                        <img src={item.hero} className='img-fluid' alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{item.name}</h5>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}
const ProductGrid = () => {
    const { data } = useGetPublicProductsQuery()
    return <div>
        <div className="row">
            {
                data && data.map(item => <div className="col-sm-4" key={item.id}>
                    <div className="card">
                        <Link to={`/details/${item.id}`}>
                            <img src={item.hero} className='img-fluid' alt="" />
                        </Link>
                        {/* <img src={item.hero} className='img-fluid' alt="" /> */}
                        <div className="card-body">
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Home