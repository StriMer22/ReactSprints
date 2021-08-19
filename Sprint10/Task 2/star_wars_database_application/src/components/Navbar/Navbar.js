import s from './Navbar.module.css'

export function Navbar(props) {
    return <nav>
        <div className={s.header} onClick={props.changeQuery}>
            People
        </div>

        <div className={s.header} onClick={props.changeQuery}>
            Planets
        </div>

        <div className={s.header}  onClick={props.changeQuery}>
            Starships
        </div>
    </nav>
}