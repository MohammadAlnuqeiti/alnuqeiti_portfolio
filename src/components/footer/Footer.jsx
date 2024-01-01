import './footer.css';

const Footer = () => {

    return (
        <section className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nuqeiti</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/mohammadalnuqeiti?igshid=YTQwZjQ0NmI0OA==" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-alnuqeiti-1954b1251/" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/MohammadAlnuqeiti" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className='footer__copy'>Copyright &#169;  2024 by Mohammad Ali Alnuqeiti. All rights reserved</span>
            </div>
        </section>
    );
}

export default Footer;
