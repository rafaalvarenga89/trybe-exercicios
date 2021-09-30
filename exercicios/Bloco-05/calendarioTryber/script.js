function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createDezDaysList() {

let dezDaysList = [29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

let daysOfMonth = document.querySelector('#days');

for (index=0; index < dezDaysList.length; index+=1 ) {
    let dezDays = dezDaysList[index];
    let dezDaysItem = document.createElement('li');
    dezDaysItem.className = "day";
    dezDaysItem.innerText = dezDays;
    daysOfMonth.appendChild(dezDaysItem);

    let holiday = [24,25,31]
    for (index2 = 0; index2 < holiday.length; index2 += 1) {
      let holidayList = holiday[index2];
        if (holidayList === dezDays) {
            dezDaysItem.className += " holiday "
        }
    }
    
    let friday = [4,11,18,25]
    for (index3 = 0; index3 < friday.length; index3 += 1) {
      let fridayList = friday[index3];
      if (fridayList === dezDays) {
        dezDaysItem.className += " friday "
      }
    }

    
}


}

createDezDaysList();

function holidayButton () {
  let buttonContainer = document.querySelector(".buttons-container");
  let buttonHoliday = document.createElement("button");
  buttonHoliday.id = "btn-holiday";
  buttonHoliday.innerHTML= "Feriados"
  buttonContainer.appendChild(buttonHoliday);
}

holidayButton();



function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();



function fridayButton () {
  let buttonContainer = document.querySelector(".buttons-container");
  let fridayButton = document.createElement("button");
  fridayButton.id = "btn-friday";
  fridayButton.innerHTML = "Sexta-Feira";
  buttonContainer.appendChild(fridayButton);
}

fridayButton();

function displayFriday () {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFriday = document.querySelectorAll('.friday');
  let innerHTMLFriday = 'SEXTOU \o/';
  let returnInnerHTML = [4,11,18,25];

  getFridayButton.addEventListener('click', function() {
    for(let index1 = 0; index1 < getFriday.length; index1 +=1) {
      if (getFriday[index1].innerHTML === innerHTMLFriday) {
        getFriday[index1].innerHTML = returnInnerHTML[index1];
      } else {
        getFriday[index1].innerHTML = innerHTMLFriday;
      }
    }
  } )

}

displayFriday();

let displayZoom = document.getElementById("days");

displayZoom.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '1.5em'

});

displayZoom.addEventListener('mouseout', function(event) {
  event.target.style.fontSize = 'unset';

});