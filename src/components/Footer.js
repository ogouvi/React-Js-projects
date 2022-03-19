import React from 'react'
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                         type='email'
                         name='email'
                         placeholder='Your email'
                         className='footer-input'
                        />
                      <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>

                </div>
            </section>
            <div className='footer-links'></div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>Address</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Privacy policy</h2>
                    <Link to='/sign-up'>Refund Policy</Link>
                    <Link to='/'>Data security</Link>
                    <Link to='/'>Lost items policies</Link>
                    <Link to='/'>Terms of services</Link>
                </div>
                
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Payments</h2>
                    <Link to='/sign-up'>PayPal</Link>
                    <Link to='/'>Visa</Link>
                    <Link to='/'>MasterCard</Link>
                    <Link to='/'>GooglePay</Link>
                </div>
                
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            WEZON<i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>WEZON © 2020</small>
                    <div className='social-icons'>
                     <Link 
                     className='social-icon-link facebook'
                     to='/'
                     target='_blank'
                     aria-label='Facebook'>
                         <i className='fab fa-facebook-f'/>
                     </Link>

                     <Link 
                     className='social-icon-link instagram'
                     to='/'
                     target='_blank'
                     aria-label='Instagram'>
                         <i className='fab fa-instagram'/>
                     </Link>
                     <Link 
                     className='social-icon-link youtube'
                     to='/'
                     target='_blank'
                     aria-label='Youtube'>
                         <i className='fab fa-youtube'/>
                     </Link>
                     <Link 
                     className='social-icon-link twitter'
                     to='/'
                     target='_blank'
                     aria-label='Twitter'>
                         <i className='fab fa-twitter'/>
                     </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
