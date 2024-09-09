import Accordion from 'react-bootstrap/Accordion';

import './Faq.scss';

const FaqCart = ({ section }) => {
    return (
        <div className="accordion_main">
            <h3 className="heading heading-h3-medium">{section.category}</h3>
            <Accordion defaultActiveKey="0">
                {section.questions.map((faq, index) => (
                    <Accordion.Item key={faq.id} eventKey={index.toString()}>
                        <Accordion.Header>
                            {faq.question}
                            <i className="plus_icon ri-add-fill"></i>
                        </Accordion.Header>
                        <Accordion.Body>
                            {faq.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default FaqCart;
