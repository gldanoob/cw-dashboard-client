import '../style/Section.css'
import TaskProgress from "./Tasks"

interface Task {
    name: string,
    score: number,
    total: number
}

interface Props {
    name: string,
    desc: string,
    tasks: Task[]
}

export default function Section(props: Props) {
    return (
        <div className="section-container">
            <p className="section-header">{props.name}</p>
            <p className="section-description">
                {/* <div className="line"></div> */}
                {props.desc}
            </p>
            {/* For indentation */}
            <div className="tasks-block">
                <div className='vertical-line'></div>
                <div className="tasks-container">
                    {props.tasks.map(
                        (task, i) => <TaskProgress name={task.name} score={task.score} total={task.total} key={i} />
                    )}
                </div>
            </div>
        </div>
    )
}