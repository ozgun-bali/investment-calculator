import React from 'react';
import styles from './ResultTable.module.css'

const ResultTable = (props) => {
	return (
		<table className={styles.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{props.finalData.map((data)=>data.year)}</td>
					<td>{props.finalData.map((data)=>data.savingsEndOfYear)}</td>
					<td>{props.finalData.map((data)=>data.yearlyInterest)}</td>
					<td>TOTAL INTEREST GAINED</td>
					<td>TOTAL INVESTED CAPITAL</td>
				</tr>
			</tbody>
		</table>
	);
};
export default ResultTable;