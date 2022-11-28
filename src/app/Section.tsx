import '../style/Section.css'
import {TaskProgress, TaskData} from "./Tasks"


export interface SectionData {
    name: string,
    desc: string,
    tasks: TaskData[]
}

export function Section(props: SectionData) {
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