import '../style/Task.css';
import { ProgressBar } from './ProgressBar';

interface Props {
    name: string,
    score: number,
    total: number,
}

export default function TaskProgress(props: Props) {
    return (
        <div className="task-container">
            <p className="task-label">
                {props.name}
            </p>
            <p className="task-score">
                {props.score}<span className="greyed-out">/{props.total}</span>
            </p>
            <ProgressBar fill={props.score / props.total}></ProgressBar>
        </div>
    )
}