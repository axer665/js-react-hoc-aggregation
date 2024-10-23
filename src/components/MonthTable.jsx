/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import { transformedData, withValidator } from './../utils/utils.jsx';
import PropTypes from 'prop-types';

export const MonthTable = (props) => {

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <thead>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {props.list.map(item => (
                    <tr key={nanoid()}>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

MonthTable.propTypes = {
    month: PropTypes.string,
    amount: PropTypes.number
}

const MonthSort = withValidator(MonthTable, transformedData, 'month');
export default MonthSort;