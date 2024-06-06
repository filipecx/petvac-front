import '../Css/Profile.css';
export function CardProfile({picture, petName, petRace, updatePet}){
    return(
        <section className='profile'>
            <img src={picture} alt="" />
            <section className='info'>
                <h3>{petName}</h3>
                <p>{petRace}</p>
            </section>
            <button onClick={updatePet}>Edit</button>         
        </section>
    )
}