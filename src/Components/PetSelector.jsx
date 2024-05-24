

export function PetSelector({petsNames, setPet}){
    
    return(
        <>
        <form>
        <select>
            <> 
            {
                petsNames.map((name) => <option value={name} key={name} onChange={e => setPet(e.target.value)} >{name}</option>)
            }
            
            </>
        </select>
    </form>
    </>
    )
}