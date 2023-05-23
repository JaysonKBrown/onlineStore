// import Single from "./Single"
import { Link, Outlet } from 'react-router-dom'

export default function Store() {

    // const productElements = products.map(item => {
    //     return <Single key={item.id} name = {item.name} />
    // })
    return (
            <>
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
        <li><a href="index.html">Home</a></li>
        <li><a className="active" href="shop.html">Shop</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li id="lg-bag"><a href="cart.html"><i className="fa-solid fa-shop" /></a></li>
        <a href="#" id="close"><i className="far fa-times" /></a>
    </ul>
    </div>
    <div id="mobile">
    <a href="cart.html"><i className="fa-solid fa-shop" /></a>
    <i id="bar" className="fas fa-outdent" />
    </div>
</section>
<section id="page-header">
    <h2>Local pick up available!</h2>
    <p>New inventory in stock weekly!</p>
</section>
<section id="product1" className="section-p1">
    <div className="product-container">
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/brown-dress.jpeg" alt="brown-dress"  className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/long-skirt-two-piece.jpeg" alt="long-skirt-two-piece" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/green-medi-dress.jpeg" alt="green-medium-dress" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/red-mini-dress.jpeg" alt="red-mini-dress" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/red-satin-dress.jpeg" alt="red-dress-satin-material" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/summer-green-dress.jpeg" alt="green-summer-plant-dress" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/two-piece-pant-set.jpeg" alt="tan-two-piece-pant-set" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/white-long-dress.jpeg" alt="white-long-dress" className="img-fluid placeholder-image" />
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
    <div className="pro" onclick="window.location.href='sproduct.html';">
        <img src="/media/yellow-long-dress.jpeg" alt="yellow-long-dress" className="img-fluid placeholder-image" />
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
<section id="pagination" className="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#"><i className="fa-solid fa-arrow-right" /></a>
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

        </>
    )
}

