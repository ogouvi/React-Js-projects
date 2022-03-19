import React from 'react';
import './form.css';

function Form() {
    return (
        <div className='forms'>
            <div className='forms-container'>
                <div className="forms-wrapper">
                    <div className="form-items item1">
                    <h1>CONTACT DETAILS!</h1>
                        <div className="form2">
                        <h3>PHONE</h3>
                        <p>+228 911 399 003</p>
                        <p>+228 911 359 087</p>
                        <h3>Whatsapp</h3>
                        <p>+228 912 344 560</p>
                        <h3>Email</h3>
                        <p>wezon@contact.tg</p>
                        </div>
                    </div>

                    <div className="form-items">
                        <div className='form1'>
                            <h1>OFFICE DETAILS!</h1>
                            <p>Adress: Central Park, Near Total ACP, Lome Bp:1278</p>
                            <h1>Make an inquery</h1>
                        </div>
                   <p> Name:*</p>
                  <input 
                  type='text'
                  label='name'/><br/>
                  <p> Email:*</p>
                  <input 
                  type='email'
                  label='email'/><br/>
                  <p>Phone:*</p>
                  <input 
                  type='phone'
                  label='phone'/><br/>
                   <p>Price Range:</p>
                  <input 
                  type='price'
                  label='price'/><br/>
                  <p> Total Person:</p>
                  <input 
                  type='number'
                  label='person'/><br/>
                  <p> Hotel Types:*</p>
                  <input 
                  type='text'
                  placeholder='standard, deluxe, super-deluxe, luxury'
                  label='hotel'/><br/>
                  <p> Vehicle:*</p>
                  <input 
                  type='text'
                  label='vehicule'/><br/>
                   <p>Travel Date:*</p>
                  <input 
                  type='texnumbert'
                  placeholder='dd/mm/yyyy'
                  label='date'/><br/>
                   <p>Extra Informations:*</p><br/>
                  <textarea 
                  type='text'
                  label='name'/><br/>
                  <button className='submit'>Send Inquiry</button>
               


                        </div>
                 
                </div>
            </div>
    
        </div>
    )
}

export default Form
