import '../Css/PetSelector.css'

export function PetSelector({handleSubmit, petsNames}){
    
    return(
        <>
        <form>
            <section className="petSelector">
                <select  onChange={e => handleSubmit(e)}>                  
                    {
                        petsNames.map((name) => <option value={name} key={name} >{name}</option>)
                    }                             
                </select>
            </section>
    </form>
    </>
    )
}