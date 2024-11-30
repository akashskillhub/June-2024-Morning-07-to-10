import Carousel from 'react-bootstrap/Carousel';
// import img src="" from 'components/ExampleCarouselImage';

function Slider() {

    const data = [
        {
            hero: "https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            hero: "https://plus.unsplash.com/premium_photo-1731955647580-26479eb21065?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            hero: "https://plus.unsplash.com/premium_photo-1731955647580-26479eb21065?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
    ]
    return (
        <Carousel>
            {
                data.map(item => <Carousel.Item>
                    <img
                        style={{ height: "400px", width: "100%", objectFit: "cover" }}
                        src={item.hero} />
                    <Carousel.Caption>
                        <p>{item.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
}

export default Slider;