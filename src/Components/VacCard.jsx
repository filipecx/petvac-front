import '../Css/VacCard.css'


export function VacCard({ vacName, date, reDate, vetName }) {
    return (
        <section className="vac-card">
            <h3>{vacName}</h3>
            <p>First shot date: {date}</p>
            <p>Second shot date: {reDate}</p>
            <p>Vet: {vetName}</p>
        </section>
    )
}