import s from './Main.module.css'

export function Main(props) {

    function name(query) {
        if (query === 'people') {
            return [`Gender : ${props.useData.gender}`, `Birth year : ${props.useData.birth_year}`, `Eye color : ${props.useData.eye_color}`]
        }
        if (query === 'planets') {
            return [`Climate : ${props.useData.climate}`, `Gravity : ${props.useData.gravity}`, `Orbital period : ${props.useData.orbital_period}`]
        }
        if (query === 'starships') {
            return [`Model : ${props.useData.model}`, `Crew : ${props.useData.crew}`, `Passengers : ${props.useData.passengers}`]
        }
    }

    return <div className={s.wrapper}>
        <img src={`data:image/jpg;base64,${props.useImg}`} alt=""/>
        <div>
            <h3 className={s.name}>{props.useData.name ?? props.useData}</h3>
            <ul className={s.info}>
                {name(props.query).map((el,ind)=>{
                    return <li key={ind + 1}>{el}</li>
                })}
            </ul>
        </div>
    </div>
}