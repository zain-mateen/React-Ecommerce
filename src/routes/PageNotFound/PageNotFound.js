import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.component';
import './PageNotFound.scss';

const PageNotFound = () => {
    return (
        <div className='PageNotFound'>
            <div className="container wrapper_otr">
                <div className="wrapper">
                    <h1 className="error_heading">OOPS!</h1>
                    <h3 className="heading heading-h3-medium">Page not found</h3>
                    <p className="desc heading-xsm">
                        Sorry, we couldn't find the page you where looking for. We suggest that you <br />return to home page.
                    </p>
                    <div className="action_otr">
                        <Link className="action_inr" to='/'>
                            <Button buttonType='dark'>Go Back Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
