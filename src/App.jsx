import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { PetSelector } from './Components/PetSelector'
import { AddPet } from './Components/AddPet';
import { UpdatePet } from './Components/UpdatePet';
import { AddVac } from './Components/AddVac';
import { CardProfile } from './Components/CardProfile';
import { VacCard } from './Components/VacCard';

function App() {
  const [petsNames, setPetsNames] = useState([]);
  const [picture, setPicture] = useState();
  const [petName, setPetName] = useState();
  const [petRace, setPetRace]  = useState();
  const [petId, setPetId] = useState();

  
  const [addPetOpen, setAddPetOpen] = useState(false);
  const [addVacOpen, setAddVacOpen] = useState(false);
  const [editPetOpen, setEditPetOpen] = useState(false);

  const [vacList, setVacList] = useState([]);

  const baseUrl = 'http://localhost:8080'

  const addPet = async (e) => {
    e.preventDefault();
    let results = new FormData(addPetForm);
    setPetsNames(petsNames => [...petsNames, results.get("name")]);
    try{
      const response = await axios.post(baseUrl + '/pets', {picture: results.get("picture"), name: results.get("name"), race: results.get("race")});
      setAddPetOpen(false);
    }catch(e){
      console.error(e)
    }
  }

  const updatePet = async (e) => {
    e.preventDefault(e);
    let results = new FormData(editPetForm);
    try{
      const response = await axios.put(baseUrl + `/pets/${petName}`, {name: petName, picture: results.get("picture"), race: petRace});
      response ? setEditPetOpen(false): null;
    }catch(e){
      console.error(e);
    }
  }

  const removePet = async () => {
    setPetsNames(petsNames.filter((pet) => {return pet != petName}));
    setPetName(petsNames[0]);
    try{
      axios.delete(baseUrl + `/pets/${petId}`);
    }catch(e){
      console.error(e);
    }
  }

  const addVac = async (e) => {
    e.preventDefault();
    let vacData = new FormData(addVacForm);
    vacData.append("petName", petName);
    setVacList(vacList => [...vacList, vacData]);
    setAddVacOpen(false);
    try{
      await axios.post(baseUrl + "/vaccines", 
      {
        name: vacData.get("name"), 
        firstShot: vacData.get("date"), 
        secondShot: vacData.get("ReapplicationDate"), 
        vetName: vacData.get("vetName"),
        petName: petName  
      })

    setAddVacOpen(false);
    }catch(e){
      console.log(e)
    }
    
    
    getVacFromPet(petName);
    
  }

  const getPetsNames = async () => {
    const response = await axios.get(baseUrl + '/pets');
    const data = response.data;
    const names = [];
    data.map((item) =>  names.push(item.name))  
    fillPetsNames(names);
  }

  const fillPetsNames = (listOfNames) => {
      setPetsNames(listOfNames);
      petName ? null: setPetName(listOfNames[0]);
  }

  const getVacFromPet = async (petName) => {
    try{
      if(petName){
        const response = await axios.get(baseUrl + `/vaccines/${petName}`);
        setVacList(response.data);
    }
    }catch(e){
      console.log(e)
    }
    
  }
  
  const deleteVac = async (vaccineId) => {
  
 
    try{
      const response = await axios.delete(baseUrl + `/vaccines/${vaccineId}`)
      if (response.status == 204){
        setVacList(vacList.filter((vac) => {return vac._id != vaccineId}));
        
      }
    }catch(e){
      console.log(e);
    }
    
  }
  const getPetInfo = async (petName) => {
    try{
      if(petName){
        const response = await axios.get(baseUrl + `/pets/${petName}`);
        setPetRace(response.data[0].race);
        setPicture(response.data[0].picture);
        setPetId(response.data[0]._id);
      }
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    
    getPetsNames();
    getVacFromPet(petName);
    getPetInfo(petName)
  }, [petName])


  return (
    <>
      <h1>Carteirinha de vacinaCão</h1>
      <section className='petSection'>
        <button onClick={() => setEditPetOpen(!editPetOpen)}>Edit</button>      
        <CardProfile picture={picture} petName={petName} petRace={petRace}/>         
        <PetSelector setPetName={setPetName} petsNames={petsNames}/>
        <button onClick={() => setAddPetOpen(!addPetOpen)}>{addPetOpen ? '-': '+'}</button>
        <button onClick={removePet}>-</button>      
      </section>
      {editPetOpen ? <UpdatePet updatePet={updatePet} petName={petName} picture={picture} petRace={petRace} setEditPetOpen={setEditPetOpen}/>: null}
      
      {addPetOpen ? <AddPet addPet={addPet} />: null}
      <h2>Vacinas</h2>
      <button onClick={() => setAddVacOpen(!addVacOpen)}>{addVacOpen ? '-': '+'}</button>
      {addVacOpen ? <AddVac addVac={addVac} />: null}
      {vacList.map((vac) => {
        return(
        <VacCard vacName={vac.name} date={vac.firstShot} reDate={vac.secondShot} vetName={vac.vetName} deleteVac={deleteVac} key={vac._id} id={vac._id}/>
      )
      })
      }
    </>
  )
}

export default App
