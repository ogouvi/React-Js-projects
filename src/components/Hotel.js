import React from 'react';
import CardItem from './CardItem';

import './Cards.css'

function Hotel() {
    return (
        <div className='cards'>
        <h1>RECOMMENDED HOTELS</h1>
        <p>Thanks to its solid partnership with multiple hotels, Wezon provides hotel Booking
            services in Togo <br/> or for all major tourist destination in West Africa. </p>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/photo-1.webp'
                    text='Mount Nelson Hotel   (35%OFF)'
                    label='BOOK NOW'
                    path='/services'
                    />
                     <CardItem 
                    src='images/photo-3.webp'
                    text='ONOMO HOTEL (40% OFF)'
                    label='BOOK NOW'
                    path='/services'
                    />
                     <CardItem 
                    src='images/photo-2.webp'
                    text='Hotel Sarakawa (55% OFF)'
                    label='BOOK NOW'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                    src='images/sara-dubler-Koei_7yYtIo-unsplash.jpg'
                    text='Resort of Kega '
                    label='BOOK NOW'
                    path='/services'
                    />
                      <CardItem 
                    src='images/photo-5.webp'
                    text='Hostel For Family'
                    label='BOOK NOW'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/photo-6.webp'
                    text='BOOLOP HOTEL'
                    label='BOOK NOW'
                    path='/services'
                    />
                     <CardItem 
                    src='images/photo-8.webp'
                    text='EQATAR 5 STARS'
                    label='BOOK NOW'
                    path='/services'
                    />
                     <CardItem 
                    src='images/photo-9.webp'
                    text="COUPLE'S FAVORITE HOTEL"
                    label='BOOK NOW'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
        <h1>AVAILABLE TRANSPORTS SYSTEM</h1>
        <p>WEZON taxi services help guests's  visit in Togo <br/>and all near
        by tourist spots in West Africa  </p>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/72306162.cms.webp'
                    text='5 seats taxi'
                    label='BOOK NOW'
                    path='/services'
                    />
                     <CardItem 
                    src='images/mercedes-white-6.jpg'
                    text='8 seat vehicle'
                    label='BOOK NOW'
                    path='/services'
                    />
                     <CardItem 
                    src='images/images11.jpg'
                    text='Safari multiple guests'
                    label='BOOK NOW'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                    src='images/mahindra thar.jpg'
                    text='Safari One-Personal'
                    label='BOOK NOW'
                    path='/services'
                    />
                      <CardItem 
                    src='images/26-seater-tempo-traveller-rental.jpg'
                    text='26 seater tempo traveller '
                    label='BOOK NOW'
                    path='/services'
                    />
                </ul>
                </div>
                </div>
    </div>
    
    )
}

export default Hotel

