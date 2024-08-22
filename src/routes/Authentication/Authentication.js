
import { Tab, Nav } from 'react-bootstrap';

import './Authentication.scss';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

const Authentication = () => {
    return (
        <div className="Authentication">
            <div className="container">
                <div className="Authentication_inr">
                    <Tab.Container defaultActiveKey="login">
                        <Nav variant="pills" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey="login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="register">Register</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="login">
                                <SignIn />
                            </Tab.Pane>

                            <Tab.Pane eventKey="register">
                                <SignUp />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </div>
    );
}

export default Authentication;
