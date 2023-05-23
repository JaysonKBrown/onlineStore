import { Link, Outlet} from 'react-router-dom'

export default function Home() {
    return (
                <div>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bianca's Brands 4 Less</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/CSS/style.css" />
                <section id="header">
                    <a href="#"><img src="media/biancaLogo2.jpg" className="logo" alt="" width="100px" /></a>
                    <div>
                    <ul id="navbar">
                        <li><Link className='active' to='/'>home</Link></li>
                        <li><Link to='/store'>store</Link></li>
                        <li>
                <Link to='/blog'>blog</Link>
            </li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                        <li id="lg-bag"><a href="cart.html"><i className="fa-solid fa-shop" /></a></li>
                        <a href="#" id="close"><i className="far fa-times" /></a>
                    </ul>
                    </div>
                    <div id="mobile">
                    <a href="cart.html"><i className="fa-solid fa-shop" /></a>
                    <i id="bar" className="fas fa-outdent" />
                    </div>
                </section>
                <section id="hero">
                    <h4>All items are brand new</h4>
                    <h2>Local pick up available!</h2>
                    <h1>Shipping available!</h1>
                    <p>New inventory in stock weekly!</p>
                    <button>Shop Now</button>
                </section>
                <section id="feature" className="section-p1">
                    <div className="fe-box">
                    <img src="/media/f1.png" alt="" />
                    <h6>Free Shipping</h6>
                    </div>
                    <div className="fe-box">
                    <img src="/media/f2.png" alt="" />
                    <h6>Local Pickup</h6>
                    </div>
                    <div className="fe-box">
                    <img src="/media/f3.png" alt="" />
                    <h6>Save Money</h6>
                    </div>
                    <div className="fe-box">
                    <img src="/media/f4.png" alt="" />
                    <h6>Promos</h6>
                    </div>
                    <div className="fe-box">
                    <img src="/media/f5.png" alt="" />
                    <h6>Great Deals</h6>
                    </div>
                    <div className="fe-box">
                    <img src="/media/f6.png" alt="" />
                    <h6>Support</h6>
                    </div>
                </section>
                <section id="product1" className="section-p1">
                    <h2>Featured Products</h2>
                    <p>Summer Collection</p>
                    <div className="product-container">
                    <div className="pro">
                        <img src="/media/bergundy-mini-dress.jpeg" alt="bergundy-mini-dress" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/bergundy-two-piece.jpeg" alt="bergundy-two-piece" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                    </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/black-long-dress.jpeg" alt="black-long-dress" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/brown-dress.jpeg" alt="brown-dress" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/brown-maxxi.jpeg" alt="brown-maxxi-dress" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/checkered-two-piece.jpeg" alt="checkered-dress" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/decorative-black-dress.jpeg" alt="black-dress-glittery" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="/media/green-and-white-two-piece.jpeg" alt="green-and-white-two-piece" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    </div>
                </section>
                <section id="banner" className="section-m1">
                    <h4>Returns</h4>
                    <h2>Buy in bulk for a <span>DISCOUNT</span></h2>
                    <button className="normal">Explore More</button>
                </section>
                <section id="product1" className="section-p1">
                    <h2>New Arrivals</h2>
                    <p>Summer Collection</p>
                    <div className="product-container">
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    <div className="pro">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" className="img-fluid placeholder-image" />
                        <div className="description">
                        <span>Lorem, ipsum.</span>
                        <h5>dress</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>$7</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                    </div>
                    </div>
                </section>
                <section id="sm-banner" className="section-p1">
                    <div className="banner-box">
                    <h4>Crazy Deals</h4>
                    <h2>Lorem.</h2>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                    <button className="white">Learn more</button>
                    </div>
                    <div className="banner-box banner-box2">
                    <h4>Crazy Deals</h4>
                    <h2>Lorem.</h2>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                    <button className="white">Learn more</button>
                    </div>
                </section>
                <section id="banner3">
                    <div className="banner-box">
                    <h2>Lorem.</h2>
                    <h3>Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="banner-box banner-box2">
                    <h2>Lorem.</h2>
                    <h3>Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="banner-box banner-box3">
                    <h2>Lorem.</h2>
                    <h3>Lorem ipsum dolor sit.</h3>
                    </div>
                </section>
                <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                    <h4>Sign up for Newsletters</h4>
                    <p>Get email updated about the latest inventory and  <span>Special offers</span></p>
                    </div>
                    <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <button className="normal">Sign Up</button>
                    </div>
                </section>
                <footer className="section-p1">
                    <div className="col">
                    <img className="logo" src="/media/biancaLogo2.jpg" alt="" width="150px" />
                    <h4>Contact</h4>
                    <p>Address: Lorem ipsum dolor sit amet.</p>
                    <p>Phone: 111-111-1234</p>
                    <p>Hours: Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fa-brands fa-instagram" />
                        <i className="fab fa-youtube" />
                        <i className="fa-brands fa-tiktok" />
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    </div>
                    <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign in</a>
                    <a href="#">View Cart</a>
                    <a href="#">Help</a>
                    </div>
                    <div className="copyright">
                    <p>©2023 MS Coding Academies</p>
                    </div>
                </footer>
                </div>
            );
            }
