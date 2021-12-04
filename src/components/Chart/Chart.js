import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    return (
        <div className='chart'>
            {props.dataPoints.map((month) => (
                <ChartBar
                    key={month.id}
                    value={month.value}
                    maxValue={props.maxValue}
                    label={month.label}
                />
            ))}
        </ div>

    )
}

export default Chart;