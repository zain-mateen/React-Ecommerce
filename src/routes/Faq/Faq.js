import { FaqData } from '../../Data';
import FaqCart from './FaqCart';

import './Faq.scss';

const Faq = () => {
    return (
        <div className='Faq'>
            <div className="container">
                <div className="row row_custom">
                    <div className="col-lg-8 col-md-10 col_content_otr">
                        <div className="col_content_inr">
                            <h2 className="heading heading-h2-bold">FREQUENTLY ASKED QUESTIONS</h2>

                            {FaqData.map((section, index) => (
                                <FaqCart key={index} section={section} />
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
