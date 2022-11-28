import { ReactNode } from 'react'
import '../style/Header.css'

interface Props {
    children: ReactNode,
    desc: string
}

export default function Header(props: Props) {
    return (
        <div className="header-container">
            <div className="header-label">
                { props.children }
            </div>
            <div className="header-description">
                { props.desc }
            </div>
        </div>
    )
}