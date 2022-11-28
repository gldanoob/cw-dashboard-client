import Header from "./Header";
import { Section, SectionData } from "./Section";

export interface ModuleData {
    name: string
    desc: string
    sections: SectionData[] 
}

export default function Module(props: ModuleData) {
    return (
        <>
            <Header desc={props.desc}>
                {props.name}
            </Header>
            {
                props.sections.reverse().map(
                    (section, i) => <Section name={section.name} desc={section.desc} tasks={section.tasks} key={i} />
                )
            }
        </>
    )
}