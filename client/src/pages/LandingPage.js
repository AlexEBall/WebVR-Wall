import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2>
                        <Link to={`/`}>
                            <img className="logo" src="../images/logo.png" alt="logo" />
                        </Link>
                    </h2>
                    <nav>
                        <li><a href="#stories">Our Stories</a></li>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#join">Join</a></li>
                    </nav>
                </header>

                <section className="hero">
                    <div className="background-image" style={{ backgroundImage: `url(../images/hero.jpeg)` }}></div>
                    <h1>Motivational VR</h1>
                    <h3>Your motivation is right here</h3>
                    <Link to={`/motivationalWall`} className="btn">Experience Virtual Reality</Link>
                </section>

                <section id="stories" className="our-work">
                    <h3 className="title">Our Stories</h3>
                    <p>Our website is focused around people who started out just like you!</p> 
                    <p>Want to live a better life but don't know what steps to take?</p>
                    <p>Find motivation from people who have been in your shoes.</p>
                    <hr />

                    <ul className="grid">
                        <li className="small" style={{ backgroundImage: `url(../images/profileImage3.jpeg)` }}></li>
                        <li className="large" style={{ backgroundImage: `url(../images/profileImage2.jpeg)` }}></li>
                        <li className="large" style={{ backgroundImage: `url(../images/profileImage1.jpeg)` }}></li>
                        <li className="small" style={{ backgroundImage: `url(../images/profileImage0.jpeg)` }}></li>
                    </ul>
                </section>

                <section id="services" className="features">
                    <h3 className="title">Features and services</h3>
                    <p>With Motivational VR experience first hand what others have done. Get advice from people just like you.</p>
                    <p>Motivate yourself today!</p>
                    <hr />

                    <ul className="grid">
                        <li>
                            <i className="fa fa-camera-retro"></i>
                            <h4>Virtual Reality</h4>
                            <p>Experience virtual reality, 360 images and video through your phone or desktop. No extra hardware needed.</p>
                        </li>
                        <li>
                            <i className="fa fa-cubes"></i>
                            <h4>Motivation</h4>
                            <p>Get advice and practical know-how from people who have learned how to take the first steps to achieve their dreams.</p>
                        </li>
                        <li>
                            <i className="fa fa-newspaper-o"></i>
                            <h4>Networking</h4>
                            <p>Upon experiencing our users reality, feel free to reach out to them for more guidance and possibly mentorship.</p>
                        </li>
                    </ul>
                </section>

                <section id="reviews" className="reviews">
                    <h3 className="title">What others say:</h3>

                    <p className="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <p className="author">— Patrick Farrell</p>

                    <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                    <p className="author">— George Smith</p>

                    <p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.</p>
                    <p className="author">— Kevin Blake</p>
                </section>

                <section id="join" className="contact">
                    <h3 className="title">Join our newsletter</h3>	
                    <p>As we scale our application stay in the loop for any news, events, or products we release in the future.</p>
                    <hr />

                    <form>
                        <input type="email" placeholder="Email" />
                        <a href="#" className="btn">Subscribe now</a>
                    </form>
                </section>

                <footer>
                    <ul>
                        <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-snapchat-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-github-square"></i></a></li>
                    </ul>
                    <p>Made by </p>
                </footer>
            </div>
        );
    }
}