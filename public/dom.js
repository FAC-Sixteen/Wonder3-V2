document.getElementById('citySearch').addEventListener('keyup', () => {
  const inputValue = document.getElementById('citySearch').value;
  cityCall(inputValue);
});

document.getElementById('buttonSubmit').addEventListener('click', () => {
  const inputValue = document.getElementById('citySearch').value;
  capitalCityCall(inputValue);
});

const cityCall = value => {
  const cityRequest = new XMLHttpRequest();
  // console.log('city request', cityRequest);
  const cityURL = '/query=' + value;
  // console.log('this is city url: ', cityURL);
  cityRequest.onreadystatechange = () => {
    if (cityRequest.readyState == 4 && cityRequest.status == 200) {
      const datalistEntries = document.getElementById('cityList');
      while (datalistEntries.firstChild) {
        datalistEntries.removeChild(datalistEntries.firstChild);
      }
      const cities = JSON.parse(cityRequest.responseText);
      console.log("this is everything:", cityRequest);
      console.log("these are the cities:", cities);
      const x = document.getElementById('cityList');
      cities.forEach(element => {
        const newOption = document.createElement('OPTION');
        newOption.setAttribute('value', element);
        x.appendChild(newOption);
      });
    }
  };
  cityRequest.open('GET', cityURL, true);
  cityRequest.send();
};


const capitalCityCall = value => {
  const cityRequest = new XMLHttpRequest();
  // console.log('city request', cityRequest);
  const cityURL = '/city=' + value;
  const y = document.getElementById('data-display');
  // console.log('this is city url: ', cityURL);
  cityRequest.onreadystatechange = () => {
    if (cityRequest.readyState == 4 && cityRequest.status == 200) {
      const dataDisplay = document.getElementById('data-display');
      const datalistEntries = document.getElementById('cityList');
      while (datalistEntries.firstChild || dataDisplay.textContent) {
        datalistEntries.removeChild(datalistEntries.firstChild);
        dataDisplay.textContent = "";
      }
      const cities = JSON.parse(cityRequest.responseText);
      console.log("this is everything:", cityRequest);
      console.log("these are the cities:", cities);
      // const y = document.getElementById('data-display');
      cities.map(element => {
        console.log("this is the element:", element);
        console.log("this is the element:", element);
        const cityDisplay = document.createElement('SPAN');
        cityDisplay.textContent = "The capital city of this country is: " + element;
        y.appendChild(cityDisplay);
      });
    }
  };
  cityRequest.open('GET', cityURL, true);
  cityRequest.send();
};
