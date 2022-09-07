import React, { useState } from 'react';

import styles from './Feedback.module.scss';

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positive, setPositive] = useState(0);

    const handleGood = () => {
        setGood(prevGood => prevGood + 1);
        countTotalFeedback();
    };

    const handleNeutral = () => {
        setNeutral(prevNeutral => prevNeutral + 1);
        countTotalFeedback();
    };

    const handleBad = () => {
        setBad(prevBad => prevBad + 1);

        countTotalFeedback();
    };

    const countTotalFeedback = () => {
        setTotal(prevTotal => prevTotal + 1);
        countPositiveFeedbackPercentage();
    };

    const countPositiveFeedbackPercentage = () => {
        setPositive(prevPositive => prevPositive * (good / total) * 100);
    };

    return (
        <>
            <h1 className={styles.title}>Please leave Feedback</h1>
            <div className={styles.container}>
                <div>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleGood}
                    >
                        Good
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleNeutral}
                    >
                        Neutral
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleBad}
                    >
                        Bad
                    </button>
                </div>
                <h2 className={styles.title__stat}>Statistics</h2>
                <d>Good: {good}</d>
                <d>Neutral: {neutral}</d>
                <d>Bad: {bad}</d>
                <d>Total: {countTotalFeedback}</d>
                <d>Positive FeedBack: {countPositiveFeedbackPercentage}%</d>
            </div>
        </>
    );
};
export default Feedback;
