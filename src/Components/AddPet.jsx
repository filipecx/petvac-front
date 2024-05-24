export function AddPet({addPet}){
    return (
        <>
            <form action="" method="post" onSubmit={addPet} id='addPetForm'>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />

            <label htmlFor="picture">Picture: </label>
            <input type="text" name="picture" id="picture" />

            <label htmlFor="race">Race: </label>
            <input type="text" name="race" id="race" />

            <button type="submit">Adicionar</button>
        </form>
        </>
    )
}