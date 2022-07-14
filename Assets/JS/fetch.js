
class Fetch {
    async getCurrent(input) {
      const myKey = "08744d7860a2196999b62b43c24947c5";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }