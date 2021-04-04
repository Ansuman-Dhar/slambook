var id_Global;
var cookieAllowed_Global = false;
var recieverId;
var loaded;

var gender;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomId(){
    fetch('https://ansuman2005.pythonanywhere.com/getId', { method: 'get', mode: 'cors' })
    .then((res) => { return res.json() })
    .then((myData) => { id_Global = myData.id })
    .catch(error => console.warn(error));
}