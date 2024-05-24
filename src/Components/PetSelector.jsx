

export function PetSelector({handleSubmit, petsNames}){
    
    return(
        <>
        <form>
        <select  onChange={e => handleSubmit(e)}>
            <> 
            {
                petsNames.map((name) => <option value={name} key={name} >{name}</option>)
            }           
            </>
        </select>
    </form>
    </>
    )
}