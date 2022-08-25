import React from 'react';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
    state = {
        valueGood: 0,
        valueNeutral: 0,
        valueBad: 0,
        total: 0,
        positive: 0,
    };

    handleGood = () => {
        this.setState(
            prevValue => ({
                valueGood: prevValue.valueGood + 1,
            }),
            this.countTotalFeedback(),
        );
    };
    handleNeutral = () => {
        this.setState(
            {
                valueNeutral: this.state.valueNeutral + 1,
            },
            this.countTotalFeedback(),
        );
    };
    handleBad = () => {
        this.setState(
            {
                valueBad: this.state.valueBad + 1,
            },
            this.countTotalFeedback(),
        );
    };
    countTotalFeedback = () => {
        this.setState(
            prevValue => ({
                total: prevValue.total + 1,
            }),
            this.countPositiveFeedbackPercentage(),
        );
    };
    countPositiveFeedbackPercentage = () => {
        this.setState(prevValue => ({
            positive: Math.round((prevValue.valueGood / prevValue.total) * 100),
        }));
    };

    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Please leave Feedback</h2>
                <div>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={this.handleGood}
                    >
                        Good
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={this.handleNeutral}
                    >
                        Neutral
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={this.handleBad}
                    >
                        Bad
                    </button>
                </div>
                <h2 className={styles.title}>Statistics</h2>
                <span>Good: {this.state.valueGood}</span>
                <span>Neutral: {this.state.valueNeutral}</span>
                <span>Bad: {this.state.valueBad}</span>
                <span>Total: {this.state.total}</span>
                <span>Positive FeedBack: {this.state.positive}%</span>
            </div>
        );
    }
}

export default Feedback;
