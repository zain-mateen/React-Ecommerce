import { TermsPageData } from '../../Data';
import './TermsAndConditions.scss';

const TermsAndConditions = () => {
    return (
        <div className='TermsPage'>
            <div className="container">
                <div className="row row_custom">
                    <div className="col-lg-8 col_content_otr">
                        <h2 className="title heading-h2-bold">Terms & Conditions</h2>
                        {TermsPageData.map((item) => (
                            <div key={item.id} className="terms_item">
                                <h6 className="heading heading-sm">{item.heading}</h6>
                                <p className="desc heading-xs">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
