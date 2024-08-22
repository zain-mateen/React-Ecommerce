import Button from '../../components/Button/Button.component';
import ThemeInput from '../../components/ThemeInput/ThemeInput.component';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="row wrapper_otr">
                <div className="col-lg-8 wrapper_inr">
                    <h2 className="heading heading-h2-bold">Contact</h2>
                </div>
            </div>
            <div className="row row_custom">
                <div className="col-lg-8 col_content_main">
                    <div className="row row_custom_inr">
                        <div className="col-lg-6 col_content_otr">
                            <div className="col_content_inr">
                                <h3 className="heading heading-h3-bolb">Store in London</h3>
                                <p className="desc heading-xs">
                                    1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                                </p>
                                <ul className="link_ul">
                                    <li className="link_li">
                                        <a href="mailto:sale@uomo.com" className="link_a heading-xsm">sale@uomo.com</a>
                                    </li>
                                    <li className="link_li">
                                        <a href="tel:+1 246-345-0695" className="link_a heading-xsm">+1 246-345-0695</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col_content_otr">
                            <div className="col_content_inr">
                                <h3 className="heading heading-h3-bolb">Store in Istanbul</h3>
                                <p className="desc heading-xs">
                                    1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                                </p>
                                <ul className="link_ul">
                                    <li className="link_li">
                                        <a href="mailto:sale@uomo.com" className="link_a heading-xsm">sale@uomo.com</a>
                                    </li>
                                    <li className="link_li">
                                        <a href="tel:+1 246-345-0695" className="link_a heading-xsm">+1 246-345-0695</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <form className='form_inr'>
                        <h3 className="heading heading-h3-bold">Get In Touch</h3>
                        <div className="input_otr mt_20">
                            <ThemeInput 
                                inputClass='coming_soon_email'
                                inputType='text'
                                inputName='name'
                                inputPlaceholder='Name *'
                            />
                        </div>
                        <div className="input_otr mt_20 mb_20">
                            <ThemeInput 
                                inputClass='coming_soon_email'
                                inputType='email'
                                inputName='email'
                                inputPlaceholder='Email Address *'
                            />
                        </div>
                        <div className="textarea_otr">
                            <textarea className="textarea" placeholder="Your Review"></textarea>
                        </div>
                        <div className="form_action mt_20">
                            <Button type='submit' buttonType='dark'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;