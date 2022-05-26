const findMyState = () =>{

    const status = document.querySelector('.status');

    const success = (position)=> {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude; 
        console.log(latitude+ ' ' + longitude); 

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=fr`;
        
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            console.log(latitude)
            console.log(longitude)
            status.textContent = "You're in " + data.locality
        })
    };

    function error() {
        status.textContent = 'Error 404, Unable to find your location';
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-state').addEventListener('click', findMyState);