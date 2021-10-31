import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div>
            <div className="home">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home image" className="home__image"></img>
            </div>
            <div className="home__row">
            <Product 
             id="1333"
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
             rating={5}  
             image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" 
             price={7.99}/>

             <Product 
             id="1333"
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
             rating={5}  
             image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" 
             price={7.99}/>
            </div>

            <div className="home__row">
            <Product 
             id="1333"
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
             rating={5}  
             image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" 
             price={7.99}/>
             
             <Product 
             id="1333"
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
             rating={5}  
             image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" 
             price={7.99}/>

            <Product 
             id="1333"
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
             rating={5}  
             image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" 
             price={7.99}/>

            </div>

            <div className="home__row">
            <Product 
             id="1333"
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
             rating={5}  
             image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_ML2_.jpg" 
             price={7.99}/>

            </div>
            
        </div>
       
    )
}

export default Home
