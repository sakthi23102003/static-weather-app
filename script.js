//http://api.weatherapi.com/v1/current.json?key= dd35bd1eae9a44bf9d2181232242701&q=London&aqi=no
const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location p1");
const conditionfield = document.querySelector(".condition p");
const searchfield = document.querySelector(".search_area");
const form = document.querySelector("form");


form.addEventListener('submit' , searchforLocation)

let target = 'Coimbatore'

const fetchResults = async(targetLocation) =>{
    
    

    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key= dd35bd1eae9a44bf9d2181232242701&q=${targetLocation}&aqi=no`)
    const data = await res.json()
                       
    console.log(data)


   let locationName= data.location.name
   let time = data.location.localtime
   let temp = data.current.temp_c
   let condition = data.current.condition.text

   updateDetails(temp , locationName , time , condition)
   
  
}

function updateDetails(temp , locationName , time , condition){
   let splitDate = time.split(' ')[0]

   let splitTime = time.split(' ')[1]

   let currentDay = getDayName(new Date(splitDate).getDay())
   
   
   
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionfield.innerText = condition
    

}

function searchforLocation(e){
    e.preventDefault()

    target = searchfield.value
    fetchResults(target)
}
fetchResults(target)


function getDayName(number){
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'

    }
}
