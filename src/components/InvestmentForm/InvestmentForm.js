import React, {useState} from "react";
import styles from "./InvestmentForm.module.css";


const InvestmentForm = (props) => {
	const [enteredSavings,setEnteredSavings] = useState("");
	const [enteredContribution,setEnteredContribution] = useState("");
	const [enteredReturn,setEnteredReturn] = useState("");
	const [enteredDuration,setEnteredDuration] = useState("");

	const savingsChangeHandler =(event) =>{
		setEnteredSavings(event.target.value);
	}
	const contributionChangeHandler =(event) =>{
		setEnteredContribution(event.target.value);
	}
	const returnChangeHandler =(event) =>{
		setEnteredReturn(event.target.value);
	}
	const durationChangeHandler =(event) =>{
		setEnteredDuration(event.target.value);
	}
	const submitHandler = (event) => {
		event.preventDefault();
		const investmentData = {
			initialSavings:enteredSavings,
			yearlySavings: enteredContribution,
			returnPercentage: enteredReturn,
			duration: enteredDuration
		}
		props.onSubmitted(investmentData);
		
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input
						type='number'
						id='current-savings'
						onChange={savingsChangeHandler}
					/>
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input
						type='number'
						id='yearly-contribution'
						onChange={contributionChangeHandler}
					/>
				</p>
			</div>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor='expected-return'>
						Expected Interest (%, per year)
					</label>
					<input
						type='number'
						id='expected-return'
						onChange={returnChangeHandler}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input
						type='number'
						id='duration'
						onChange={durationChangeHandler}
					/>
				</p>
			</div>
			<p className={styles.actions}>
				<button
					type='reset'
					className={styles.buttonAlt}
				>
					Reset
				</button>
				<button
					type='submit'
					className={styles.button}
				>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default InvestmentForm;
