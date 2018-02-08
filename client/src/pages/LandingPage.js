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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </nav>
                </header>

                <section className="hero">
                    <div className="background-image" style={{ backgroundImage: `url(../images/hero.jpeg)` }}></div>
                    <h1>Motivational VR</h1>
                    <h3>Your motivation is right here</h3>
                    <a href="http://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/" className="btn">Download it Here</a>
                </section>

                <section className="our-work">
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

                <section className="features">
                    <h3 className="title">Features and services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                    <hr />

                    <ul className="grid">
                        <li>
                            <i className="fa fa-camera-retro"></i>
                            <h4>Photography</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                        </li>
                        <li>
                            <i className="fa fa-cubes"></i>
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                        </li>
                        <li>
                            <i className="fa fa-newspaper-o"></i>
                            <h4>Content Editing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                        </li>
                    </ul>
                </section>

                <section className="reviews">
                    <h3 className="title">What others say:</h3>

                    <p className="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <p className="author">— Patrick Farrell</p>

                    <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                    <p className="author">— George Smith</p>

                    <p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.</p>
                    <p className="author">— Kevin Blake</p>
                </section>

                <section className="contact">
                    <h3 className="title">Join our newsletter</h3>	
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
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
                    <p>Made by <a href="http://tutorialzine.com/" target="_blank">tutorialzine</a>. images courtesy to <a href="http://unsplash.com/" target="_blank">unsplash</a>.</p>
                    <p>No attribution required. you can remove this footer.</p>
                </footer>
            </div>
        );
    }
}