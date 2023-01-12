import { ReactNode } from 'react'
import '../style/Footer.css'

interface Props {
    children: ReactNode
}

export default function Footer(props: Props) {
    return (
        <div className="footer-container">
            {props.children}
        </div>
    )
}
