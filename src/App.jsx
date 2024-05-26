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
  const [picture, setPicture] = useState('data:image/jpeg;base64,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');
  const [petName, setPetName] = useState();
  const [petRace, setPetRace]  = useState('Shih-tzu');

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
      petRace ? null : setPetRace(li)
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
        console.log(response.data);
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
