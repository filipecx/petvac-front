import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { PetSelector } from './Components/PetSelector'
import { AddPet } from './Components/AddPet';
import { AddVac } from './Components/AddVac';
import { CardProfile } from './Components/CardProfile';
import { VacCard } from './Components/VacCard';

function App() {
  const [petsNames, setPetsNames] = useState([]);
  const [picture, setPicture] = useState();
  const [petName, setPetName] = useState();
  const [petRace, setPetRace]  = useState();

  const [addPetOpen, setAddPetOpen] = useState(false);
  const [addVacOpen, setAddVacOpen] = useState(false);

  const [vacList, setVacList] = useState([])
  const [vacName, setVacName] = useState('Antirrabica');
  const [date, setDate] = useState('12/12/12');
  const [reDate, setReDate] = useState('13/13/13');
  const [vetName, setVetName] = useState('Araujo');

  const baseUrl = 'http://localhost:8080/petvac'

  const addPet = async (e) => {
    e.preventDefault();
    let results = new FormData(addPetForm);
    setPetsNames(petsNames => [...petsNames, results.get("name")]);
    try{
      const response = await axios.post(baseUrl, {picture: results.get("picture"), name: results.get("name"), race: results.get("race")})
      alert("Sucess!");
      setAddPetOpen(false);
    }catch(e){
      console.log(e)
    }
  }

  const addVac = (e) => {
    e.preventDefault();
    let vacData = new FormData(addVacForm);
    vacData.append("petName", pet)
    console.log(vacData);
  }

  const getPetsNames = async () => {
    const response = await axios.get(baseUrl);
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
  const getPetInfo = async (petName) => {
    try{
      if(petName){
        const response = await axios.get(baseUrl + `/${petName}`)
        setPetRace(response.data.race);
        setPicture(response.data.picture);
        console.log(response.data.race);
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
        <CardProfile picture={picture} petName={petName} petRace={petRace} />
        <PetSelector setPetName={setPetName} petsNames={petsNames}/>
        <button onClick={() => setAddPetOpen(!addPetOpen)}>+</button>      
      </section>
      {addPetOpen ? <AddPet addPet={addPet} />: null}
      <h2>Vacinas</h2>
      <button onClick={() => setAddVacOpen(!addVacOpen)}>+</button>
      {addVacOpen ? <AddVac addVac={addVac} />: null}
      {vacList.map((vac) => {
        return(
        <VacCard vacName={vac.name} date={vac.appDate} reDate={vac.reAppDate} vetName={vac.vetName} key={vac.name}/>
      )
      })
      }
    </>
  )
}

export default App
