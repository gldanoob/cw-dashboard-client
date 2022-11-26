import '../style/Footer.css'

interface Props {
    children: string
}

export default function Footer(props: Props) {
    return (
        <div className="footer-container">
            {props.children}
        </div>
    )
}