import '../Css/AddPetForm.css'

export function UpdatePet({updatePet, petName, picture, petRace}){
    return (
        
        <section className='updatePetForm'>
            <form action="" method="post" onSubmit={updatePet} id='editPetForm'>
                
                <label htmlFor="picture">Picture: </label><br />
                <input type="text" name="picture" id="picture" defaultValue={picture}/><br />
              
                <button type="submit">Edit</button>
        </form>
        </section>
        
    )
}