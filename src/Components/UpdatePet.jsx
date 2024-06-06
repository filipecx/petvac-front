import '../Css/AddPetForm.css'

export function UpdatePet({updatePet, petName, picture, petRace}){
    return (
        
        <section className='updatePetForm'>
            <form action="" method="post" onSubmit={updatePet} id='editPetForm'>
                <label htmlFor="name">Name: </label><br />
                <input type="text" name="name" id="name" defaultValue={petName} /><br />

                <label htmlFor="picture">Picture: </label><br />
                <input type="text" name="picture" id="picture" defaultValue={picture}/><br />

                <label htmlFor="race">Race: </label><br />
                <input type="text" name="race" id="race" defaultValue={petRace}/><br />
              
                <button type="submit">Edit</button>
        </form>
        </section>
        
    )
}