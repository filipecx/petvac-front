import '../Css/PetSelector.css'

export function PetSelector({setPetName, petsNames}){
    
    return(
        <>
        <form>
            <section className="petSelector">
                <select  onChange={e => setPetName(e.target.value)}>                  
                    {
                        petsNames.map((name) => <option value={name} key={name} >{name}</option>)
                    }                             
                </select>
            </section>
    </form>
    </>
    )
}