import { Link, Outlet} from 'react-router-dom'

export default function Contact() {
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
                        <li><Link to='/store'>store</Link></li>
                        <li>
                <Link to='/blog'>blog</Link>
            </li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link className='active' to='/contact'>contact</Link></li>
        <li id="lg-bag"><a href="cart.html"><i className="fa-solid fa-shop" /></a></li>
        <a href="#" id="close"><i className="far fa-times" /></a>
    </ul>
    </div>
    <div id="mobile">
    <a href="cart.html"><i className="fa-solid fa-shop" /></a>
    <i id="bar" className="fas fa-outdent" />
    </div>
</section>
<section id="page-header" className="about-header">
    <h2>Chat With Us</h2>
    <p>Leave a message!</p>
</section>
<section id="contact-details" className="section-p1">
    <div className="details">
    <span>Get In Touch</span>
    <h2>Visit us or contact us today!</h2>
    <h3>Order Pick-up Office</h3>
    <div>
        <li>
        <i className="fa-solid fa-map" />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatum.</p>
        </li>
        <li>
        <i className="fa-solid fa-envelope" />
        <p> example@gmail.com</p>
        </li>
        <li>
        <i className="fa-solid fa-phone" />
        <p> 123-456-7890</p>
        </li>
        <li>
        <i className="fa-solid fa-clock" />
        <p> Monday to Saturday: 9:00 am to 4:30 pm</p>
        </li>
    </div>
    </div>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.4451970801897!2d-90.18302938675922!3d32.299891173757594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8629cda7e8a5b54f%3A0xba271fb88a734d5f!2sInnovate%20Mississippi!5e0!3m2!1sen!2sus!4v1683760107080!5m2!1sen!2sus" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
</section>
<section id="form-details">
    <form action>
    <span>Leave A Message</span>
    <h2>We Would Love To Hear From You</h2>
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="E-Mail" />
    <input type="text" placeholder="Subject" />
    <textarea name id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
    <button className="normal">Submit</button>
    </form>
    <div className="people">
    <div>
        <img className="rounded-circle shadow-4-strong" src="/media/Headshot.JPG" alt="" />
        <p><span>Jayson Brown</span> Marketing Manager <br /> Phone: 123-456-7890 <br />Email: example@gmail.com</p>
    </div>
    <div>
        <img className="rounded-circle shadow-4-strong" src="/media/BiancaHeadshot.JPG" alt="" />
        <p><span>Bianca Esparza-Salas-Brown</span> Owner/CEO <br /> Phone: 123-456-7890 <br />Email: example@gmail.com</p>
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