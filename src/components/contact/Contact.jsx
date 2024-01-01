import './contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className="contact section" id='contact'>
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">mohammadalnuqeiti@gmail.com</span>

                            <a href="mailto:mohammadalnuqeiti@gmail.com" className="contact__button" target='_blank' rel="noopener noreferrer">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+9627-9036-9501</span>

                            <a href="http://wa.me/+962790369501" className="contact__button" target='_blank' rel="noopener noreferrer">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                                                        {/* uil uil-linkedin */}
                            <i className="bx bxl-linkedin contact__card-icon"></i>

                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">MohammadAlnuqeiti</span>

                            <a href="https://www.linkedin.com/in/mohammad-alnuqeiti-1954b1251/" className="contact__button" target='_blank' rel="noopener noreferrer">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;
