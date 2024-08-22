import CountdownTimer from '../../components/CountdownTimer/CountdownTimer.component';
import Button from '../../components/Button/Button.component';
import ThemeInput from '../../components/ThemeInput/ThemeInput.component';
import './ComingSoon.scss';

const ComingSoon = () => {
    return (
        <div className='ComingSoon'>
            <div className="container wrapper_otr">
                <div className="wrapper">
                    <h1 className="comming_soon_heading">Coming Soon</h1>
                    <p className="desc heading-xs">
                        Sorry, we couldn't find the page you where looking for. We suggest that you <br />return to home page.
                    </p>
                    <div className="countdown_timer_main">
                        <CountdownTimer targetDate="2024-12-31T00:00:00" />
                    </div>
                    <form className='input_main'>
                        <div className="input_otr">
                            <ThemeInput 
                                inputClass='coming_soon_email'
                                inputType='email'
                                inputName='email'
                                inputPlaceholder='Your email Address'
                            />
                        </div>
                        <div className="action_otr">
                            <Button buttonType='dark'>Join</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
