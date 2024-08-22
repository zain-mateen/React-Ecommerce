import React, { useState, useEffect, useCallback } from 'react';
import './CountdownTimer.styles.scss';

const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    const calculateTimeLeftCallback = useCallback(() => calculateTimeLeft(targetDate), [targetDate]);

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeftCallback());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, calculateTimeLeftCallback]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
        return;
        }

        timerComponents.push(
            <div className='time_text_otr' key={interval}>
                <p className='time'>{timeLeft[interval]}</p>
                <p className='text'>{interval}{" "}</p>
            </div>
        );
    });

    return (
        <div className='coundown_timer'>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default CountdownTimer;
