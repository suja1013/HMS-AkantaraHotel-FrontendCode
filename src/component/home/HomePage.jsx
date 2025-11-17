const HomePage = () => {

    return (
        <div className="home">
            {/* Banner section displaying the hotel image and welcome text */}
            <section>
                <header className="header-banner">
                    <img src="./assets/images/Akantara.jpg" alt="Akantara Hotel" className="header-image" />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="hotel-color">Akantara Hotel</span>
                        </h1>
                        <h2>Feel at home in a place of calm and comfort</h2>
                    </div>
                </header>
            </section>

            
            {/* Heading for facilities section */}
            <h2 className="home-services">Facilities provided at <span className="hotel-color">Akantara Hotel</span></h2> 

            {/* Services section showing hotel facilities */}
            <section className="service-section"><div className="service-card">
                <img src="./assets/images/Breakfast.jpg" alt="Breakfast" />
                <div className="service-details">
                    <h3 className="service-title">Free Breakfast</h3>
                    <p className="service-description">Start your day right with our complimentary breakfast, served fresh every morning.</p>
                </div>
            </div>
                <div className="service-card">
                    <img src="./assets/images/Pet Friendly.jpg" alt="Pet Friendly" />
                    <div className="service-details">
                        <h3 className="service-title">Pet Friendly</h3>
                        <p className="service-description">Your pets are welcome here - comfort for both you and your companions.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/parkinglot.jpg" alt="Parking Lot" />
                    <div className="service-details">
                        <h3 className="service-title">Parking Lot</h3>
                        <p className="service-description">Enjoy complimentary or convenient on-site parking during your stay, with easy access to the hotel entrance.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi.jpg" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Enjoy seamless connectivity throughout the hotel with our free high-speed WiFi. </p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/bar.jpg" alt="bar" />
                    <div className="service-details">
                        <h3 className="service-title">Bar</h3>
                        <p className="service-description">From classic cocktails to local favorites, our bar is perfect for socializing or relaxing in style.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;