console.log('Testing')
// Unsplash API
const count = 10;
const unsplashApiKey= 'fnUUlTw-0jX0Ggm2bklZUglB2AMhhZc8DffGFtW4oAg';
const unsplashApiUrl = `https://api.unsplash.com/photos/random/?
client_id=${unsplashApiKey}&count=${count}`;
// Get photos from unsplash api
async function getPhotos(){
    try{
        const response = await fetch(unsplashApiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //catch error here
    }
}
//On load
getPhotos();