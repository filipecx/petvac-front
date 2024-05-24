export function AddVac({addVac}){
    return(
        <form action="" method="post" id='addVacForm' onSubmit={addVac}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />

            <label htmlFor="date">Date: </label>
            <input type="text" name="date" id="date" />

            <label htmlFor="ReapplicationDate">Reapplication Date: </label>
            <input type="text" name="ReapplicationDate" id="ReapplicationDate" />

            <button type="submit">Adicionar</button>
        </form>
    )
    
}