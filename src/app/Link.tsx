import { ReactNode } from "react"
import '../style/Link.css'

interface Props {
    children: ReactNode,
    url: string
}

export default function Link(props: Props) {
    return (
        <div className="link" onClick={() => window.open(props.url)}>
            {props.children} 
        </div>
    )
}