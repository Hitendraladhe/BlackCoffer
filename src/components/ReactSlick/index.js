import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <h4 className="heading">Website Analytics</h4>
          <p>Total 28.5% Conversion Rate</p>
          <h5>Traffic</h5>
          <p>
            <span style={{backgroundColor: 'Blue'}}>1.2k</span>Leads
            <span style={{backgroundColor: 'Blue'}}>12%</span>Page Views
          </p>
          <p>
            <span style={{backgroundColor: 'Blue'}}>1.5k</span>Sessions
            <span style={{backgroundColor: 'Blue'}}>3.1k</span>Conversions
          </p>
        </div>
        <div className="card">
          <h4 className="heading">Website Analytics</h4>
          <p>Total 28.5% Conversion Rate</p>
          <h5>Spending</h5>
          <p>
            <span style={{backgroundColor: 'Blue'}}>12h</span>Spend
            <span style={{backgroundColor: 'Blue'}}>182</span>Order Size
          </p>
          <p>
            <span style={{backgroundColor: 'Blue'}}>127</span>Order
            <span style={{backgroundColor: 'Blue'}}>23k</span>Items
          </p>
        </div>
        <div className="card">
          <h4 className="heading">Website Analytics</h4>
          <p>Total 28.5% Conversion Rate</p>
          <h5>Revenue Sources</h5>
          <p>
            <span style={{backgroundColor: 'Blue'}}>268</span>Direct
            <span style={{backgroundColor: 'Blue'}}>890</span>Organic
          </p>
          <p>
            <span style={{backgroundColor: 'Blue'}}>622</span>Referral
            <span style={{backgroundColor: 'Blue'}}>1.2k</span>Campaign
          </p>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
