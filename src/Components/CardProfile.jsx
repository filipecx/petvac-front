import '../Css/Profile.css';
export function CardProfile({picture, petName, petRace}){
    return(
        <section className='profile'>
            <section>
            <img src={picture} alt="" />
            
            </section>
            
            <section className='info'>
                <h3>{petName}</h3>
                <p>{petRace}</p>
            </section>
             
        </section>
    )
}