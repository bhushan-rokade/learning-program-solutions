import './style.css';

const convertToDecimal = (decimal) => {
  return decimal.toFixed(2) + '%';
};

const calulate = (total, goal) => {
  return convertToDecimal(total / goal);
};
export const CalculateScore = ({ name, schoolName, total, goal }) => (
  <div className='formatstyle'>
    <h1>Student Details:</h1>

    <div>
      <b>
        <span> Name: </span>
      </b>
      <span>{name}</span>
    </div>

    <div>
      <b>
        <span> School: </span>
      </b>
      <span>{schoolName}</span>
    </div>

    <div>
      <b>
        <span>Total:</span>
      </b>
      <span>{total}</span>
      <span>Marks</span>
    </div>

    <div>
      <b>Score:</b>
      <span>{calulate(total, goal)}</span>
    </div>
  </div>
);
