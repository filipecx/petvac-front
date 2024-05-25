import '../Css/AddPetForm.css'

export function AddPet({addPet}){
    return (
        <section className='addPetForm'>
            <form action="" method="post" onSubmit={addPet} id='addPetForm'>
                <label htmlFor="name">Name: </label><br />
                <input type="text" name="name" id="name" /><br />

                <label htmlFor="picture">Picture: </label><br />
                <input type="text" name="picture" id="picture" /><br />

                <label htmlFor="race">Race: </label><br />
                <input type="text" name="race" id="race" /><br />

                <button type="submit">Add</button>
        </form>
        </section>
    )
}