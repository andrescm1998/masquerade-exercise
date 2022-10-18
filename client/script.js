async function getData(route){
    const res = await fetch(`http://localhost:5151/${route}`)
    const data = await res.json();
    return data;
}

async function addToTable(e){
    e.preventDefault();

    const option = e.target.table.value
    console.log(option)
    const nameValue = e.target.value.value
    let row = {}
    if(option === 'entities'){
        const type = e.target.type.value
        row = {
            name: nameValue,
            type: type
        }
    }
    else {
        row = {
            name: nameValue
        }
    }
    
    

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(row)
    }

    const res = await fetch(`http://localhost:5151/${option}`, options);
    

}

const submitBtn = document.querySelector('form')
submitBtn.addEventListener('submit', addToTable)


// async function loadOptions(e){
//     const options = e.target.value;
//     const data = await getData(`${options}`)

//     const selectOptions = document.querySelector('#option-d');
//     for (let item of )
// }

async function addToSelect(){
    const entityData = await getData('entities');
    const locationsData = await getData('locations');
    console.log(locationsData)
    const entities = document.querySelector('#entity');
    for (let item of entityData){
        const option = document.createElement('option')
        option.value = item.entity_id;
        option.textContent = item.entity_name;
        entities.appendChild(option)
    }
    const locations = document.querySelector('#location');
    for (let item of locationsData){
        const option = document.createElement('option')
        option.value = item.locations_id;
        option.textContent = item.locations_name;
        locations.appendChild(option)
    }

    const entitiesD = document.querySelector('#option-d');
    for (let item of entityData){
        const option = document.createElement('option')
        option.value = item.entity_id;
        option.textContent = item.entity_name;
        entitiesD.appendChild(option)
    }

    // const deleteSelect = document.querySelector('#delete');
    // deleteSelect.addEventListener('select', loadOptions)

}
 addToSelect()


async function addToIncident(e){
    e.preventDefault()
    const entity = e.target.entity.value;
    const location = e.target.location.value;
    const time = e.target.time.value;
    const severity = e.target.severity.value;
    const description = e.target.description.value;

    const incident = {
        entity: entity,
        location: location,
        time: time,
        severity: severity,
        description: description
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(incident)
    }

    const res = await fetch(`http://localhost:5151/incidents`, options);
    

}

 const form2 = document.querySelector('#incident')
 form2.addEventListener('submit', addToIncident)

async function deleteOption(e){
    e.preventDefault()
    const id = e.target.option_d.value;


    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    }

    const res = await fetch(`http://localhost:5151/remove/entity/${id}`, options);
    console.log(res)
}


 const deleteForm = document.querySelector('#delete-form')
 deleteForm.addEventListener('submit', deleteOption)
