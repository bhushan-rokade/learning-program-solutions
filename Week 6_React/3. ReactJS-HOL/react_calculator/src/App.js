import { CalculateScore } from '../src/Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name={'Bhushan'}
        schoolName={'Dr.D.Y.Patil School'}
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
