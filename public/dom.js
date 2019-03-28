document.getElementById("citySearch").addEventListener("keyup", (event) => {
    const inputValue = document.getElementById("citySearch").value;
    cityCall(inputValue);
});

var cityCall = (value) => {
  const cityRequest = new XMLHttpRequest();
  const cityURL = "/query=" + value;
  cityRequest.onreadystatechange = () => {
    if(this.readyState == 4 && this.status == 200) {
      const datalistEntries = document.getElementById("cityList");
      while (datalistEntries.firstChild) {
        datalistEntries.removeChild(datalistEntries.firstChild);
      }
      const cities = JSON.parse(cityRequest.responseText);
      const x = document.getElementById('cityList');
      cities.forEach(element => {
        const newOption = document.createElement("OPTION");
        newOption.setAttribute("value", element.city);
        x.appendChild(newOption);
      })
    }
  }
  cityRequest.open("GET", cityURL, true);
  cityRequest.send();
}
