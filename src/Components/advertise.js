import React from 'react'
import image from '../assets/images/google-play.png'
import image2 from '../assets/images/app-store.png'
import image3 from '../assets/images/shape/shape-14.png'
import "../Styles/Contact.css"
function Advertise() {
    return (
        <div class="section section-padding download-section">
            <div class="app-shape-1"></div>
            <div class="app-shape-2"></div>
            <div class="app-shape-3"></div>
            <div class="app-shape-4"></div>
            <div class="container">
                <div class="download-app-wrapper mt-n6">
                    <div class="section-title section-title-white">
                        <h5 class="sub-title">Stay tuned!</h5>
                        <h2 class="main-title">our mobile app coming soon.</h2>
                    </div>
                    <img class="shape-1 animation-right" src={image3} alt="Shape" />
                    <div class="download-app-btn">
                        <ul class="app-btn">
                            <li><a href="#"><img src={image} alt="Google Play" /></a></li>
                            <li><a href="#"><img src={image2} alt="App Store" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Advertise 
