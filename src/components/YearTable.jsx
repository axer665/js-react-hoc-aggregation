/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import { transformedData, withValidator } from './../utils/utils.jsx';
import PropTypes from 'prop-types';

export const YearTable = (props) => {

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {props.list.map(item => (
                    <tr key={nanoid()}>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

YearTable.propTypes = {
    year: PropTypes.number,
    amount: PropTypes.number
}

const YearSort = withValidator(YearTable, transformedData, 'year');
export default YearSort;