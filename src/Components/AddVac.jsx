export function AddVac({addVac}){
    return(
        <form action="" method="post" id='addVacForm' onSubmit={addVac}>
            <label htmlFor="name">Name: </label> <br />
            <input type="text" name="name" id="name" /><br />

            <label htmlFor="date">Date: </label><br />
            <input type="text" name="date" id="date" /><br />

            <label htmlFor="ReapplicationDate">Reapplication Date: </label><br />
            <input type="text" name="ReapplicationDate" id="ReapplicationDate" /><br />

            <button type="submit">Adicionar</button>
        </form>
    )
    
}