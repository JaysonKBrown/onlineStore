export default function Single() {
    

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
            <li><Link to='/'>home</Link></li>
                        <li><Link className='active' to='/store'>store</Link></li>
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
        <section id="pro-details" className="section-p1">
        <div className="single-pro-image">
            <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid placeholder-image" width="100%" id="MainImg" />
            <div className="small-img-group">
            <div className="small-img-col">
                <img src="https://via.placeholder.com/100x100" alt="placeholder" className="img-fluid placeholder-image" width="100%" />
            </div>
            <div className="small-img-col">
                <img src="https://via.placeholder.com/100x100" alt="placeholder" className="img-fluid placeholder-image" width="100%" />
            </div>
            <div className="small-img-col">
                <img src="https://via.placeholder.com/100x100" alt="placeholder" className="img-fluid placeholder-image" width="100%" />
            </div>
            <div className="small-img-col">
                <img src="https://via.placeholder.com/100x100" alt="placeholder" className="img-fluid placeholder-image" width="100%" />
            </div>
            </div>
        </div>
        <div className="single-pro-details">
            <h6>Lorem, ipsum dolor.</h6>
            <h4>Lorem ipsum dolor sit.</h4>
            <h2>$7</h2>
            <select>
            <option>Select Color</option>
            <option>Select Color</option>
            <option>Select Color</option>
            <option>Select Color</option>
            </select>
            <input type="number" defaultValue={1} />
            <button className="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, libero? Explicabo odit voluptatibus officiis, praesentium hic corrupti eligendi enim cupiditate commodi, reiciendis fuga minima doloribus et maxime sequi sapiente esse?</span>
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
        <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
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
    )
}
