import { useLocation, useNavigate } from "react-router-dom"
import '../style/Menu.css'


interface Props {
    modules: string[]
}

export default function Menu(props: Props) {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <nav className="menu">
            {
                props.modules.map(
                    (module, i) => <div
                        className="menu-item"
                        onClick={e => navigate('/mod/' + module)}
                        style={
                            location.pathname === '/mod/' + module ? { backgroundColor: '#6c6f78' } : {}
                        }
                        key={i}>
                        {module}
                    </div>
                )
            }
        </nav>
    )

}