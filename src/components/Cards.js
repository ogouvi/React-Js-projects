import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these destinations!
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep in Aledjo'
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem 
                        src='images/victoria-falls.webp'
                        text='Explore the roaring Victoria Fall'
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem 
                        src='images/jess-torre-H7TGM7Sx0o4-unsplash.jpg'
                        text='Have a wonderful  stay at Hotel Sarakawa'
                        label='Hotel'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem 
                        src='images/ian-macharia-gogGhbvHrYw-unsplash.jpg'
                        text='Enjoy the traditional dance of the Djaneba '
                        label='Visit'
                        path='/services'
                        />
                          <CardItem 
                        src='images/henry-bauer-S8DTIjQ8nPk-unsplash.jpg'
                        text='Experiment the horror of the haunted House in the middle of Ketao Forest'
                        label='Temptatiom'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
