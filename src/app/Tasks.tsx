import '../style/Task.css';
import { ProgressBar } from './ProgressBar';

interface Props {
    name: string
    score: number
    total: number
}

export default function TaskProgress(props: Props) {
    const isMobile = window.innerWidth < 550

    if (isMobile) return (
        <div className="task-container">
            <div className="inline-container">
                <p className="task-label">
                    {props.name}
                </p>
                <p className="task-score">
                    {props.score}<span className="greyed-out">/{props.total}</span>
                </p>
            </div>
            <ProgressBar fill={props.score / props.total}></ProgressBar>
        </div>
    )

    return (
        <div className="task-container">
            <p className="task-label">
                {props.name}
            </p>
            <div className="inline-container">
                <p className="task-score">
                    {props.score}<span className="greyed-out">/{props.total}</span>
                </p>
                <ProgressBar fill={props.score / props.total}></ProgressBar>
            </div>
        </div>
    )
}