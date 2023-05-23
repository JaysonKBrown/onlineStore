import { Link, Outlet} from 'react-router-dom'

export default function About() {
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
                        <li><Link className='active' to='/about'>about</Link></li>
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
                <section id="page-header" className="about-header">
                    <h2>Know Us</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </section>
                <section id="about-head" className="section-p1">
                    <img src="/media/a6.jpg" alt="" />
                    <div>
                    <h2>Who Are We</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptate odit placeat ea molestias ipsam ut est eaque odio? Deleniti in magni officia fuga omnis vel saepe, ipsa cum quasi necessitatibus temporibus quae, reprehenderit eum. Sint nobis dolor enim illo.</p>
                    <abbr title>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio ipsa quaerat quibusdam in!</abbr>       
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
                    </div></section></div>
            );
            }