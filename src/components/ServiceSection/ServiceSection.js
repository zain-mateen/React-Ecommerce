import React from 'react';
import './ServiceSection.scss';
import { ServiceSectionData } from '../../Data';


const ServiceSection = () => {
    return (
        <div className='ServiceSection'>
            <div className="container">
                <div className="row row_custom">
                    {ServiceSectionData.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col_box_otr" key={item.id}>
                            <div className="col_box_inr">
                                <div className="icon_otr">{item.icon}</div>
                                <div className="content_otr">
                                    <h5 className="heading heading-mm">{item.heading}</h5>
                                    <p className="desc heading-s">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
