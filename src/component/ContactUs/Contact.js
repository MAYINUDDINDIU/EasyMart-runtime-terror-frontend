import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './Contact.css'

const Contact = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const contactSubmit = (e) => {
        e.preventDefault()
        const name = e.target.fullName.value;
        const mobile = e.target.phone.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const url = process.env.REACT_APP_Contact

        if (name === '' ||
            mobile === '' ||
            
            mobile.length !== 11 ||
            mobile.length > 11 ||
            mobile.length < 11
        ) {
            toast.error('Please, correct your information!')
        } else {
            setIsDisabled(true)
            const data = {
                name,
                mobile,
                email,
                message
            }
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
                .then(res => {
                    if (res.status === 201) {
                        e.target.reset()
                        toast.info('We got your message')
                        setIsDisabled(false)
                    }
                })
        }
    }
    return (
        <section className="contact-me-area relative rounded" id="contact-me_area" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="contact-me-title text-4xl text-bold pt-5 pb-9" >
                            <h3 className='text-primary'>Connect With Me</h3>
                        </div>


                        <div className="contact-area py-24 mb-5">
                            <form onSubmit={contactSubmit}>
                                <div className="contact-title pt-5 pb-4" >
                                    <h3 className="mb-4 text-4xl text-bold text-primary">Send a Message</h3>
                                </div>
                                <div className="contact-input mb-5">
                                    <input name='fullName' id="con-name" className="px-3 py-3 mb-3" type="text" placeholder="Enter Your Full Name" />

                                    <input name="phone" id="con-mobile" className="px-3 py-3 mb-3" type="number" placeholder="Enter Your Mobile Number" />

                                    <input name='email' id="con-mail" className="px-3 py-3 mb-3" type="email" placeholder="Enter Your E-mail" />
                                </div>
                                <div className="contact-msg mb-5">
                                    <input name='message' id="con-msg" className="px-3 py-5 mb-3" type="text" placeholder="Write your massage here..." />
                                </div>

                                <input disabled={isDisabled} type='submit' id="con-btn" className="contact-btn btn btn-primary text-white mb-5" value='send' />

                            </form>

                        </div>

                        <div className="contact-top-area rounded bg-primary" >
                            <div className="contact-top-title ml-5 pt-5 text-white" >
                                <h3>Contact Info</h3>
                            </div>
                            <div className="contact-address ml-5 pt-4 text-white" >
                                <h3></h3>
                            </div>
                            <div className="contact-address ml-5 pt-4 text-white" >
                                <h3></h3>
                            </div>
                            <div className="contact-mail ml-5 pt-4 text-white" >
                                <h3>runtimeph1@gmail.com</h3>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
