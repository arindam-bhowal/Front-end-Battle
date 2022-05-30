if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function(position){
        const {latitude}=position.coords;
        const {longitude}=position.coords;
        var map = L.map('map').setView([latitude, longitude], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        L.marker([latitude, longitude]).addTo(map)
            
  
  
            }
    )
  }