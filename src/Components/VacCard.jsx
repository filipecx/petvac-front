import '../Css/VacCard.css'


export function VacCard({ vacName, date, reDate, vetName, deleteVac, id }) {
    return (
        <section className="vac-card">
            <h3>{vacName}</h3>
            <section className='dates'>
                <p>First shot date: {date}</p>
                <p>Second shot date: {reDate}</p>
            </section>
            <p>Vet: {vetName}</p>
            <button onClick={() => deleteVac(id)} >x</button>
        </section>
    )
}