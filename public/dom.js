document.getElementById('citySearch').addEventListener('keyup', () => {
  const inputValue = document.getElementById('citySearch').value;
  cityCall(inputValue);
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
      console.log(cities);
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
