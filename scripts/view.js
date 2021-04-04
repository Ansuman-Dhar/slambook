var usp = new URLSearchParams(window.location.search);
let usp_sid, usp_oid, usp_date, usp_time, usp_name, usp_gender, usp_bstfrndname, usp_schlname, usp_hobby, usp_hroname, usp_favplace, usp_goal, usp_favsub;

var signame = document.getElementById('signername');

if (usp.has('sid')){
    signame.innerText = "You signed this";
    console.log('You are in signer view');
} else if (usp.has('oid')){
    usp_name = usp.get('name');
    signame.innerText = usp_name + " signed this";
    console.log('You are in owner view');
} else {
    window.close();
}

usp_sid = usp.get('senderid');
usp_oid = usp.get('ownerid');
usp_date = usp.get('date');
usp_time = usp.get('time');
usp_name = usp.get('name');
usp_gender = usp.get('gender');
usp_bstfrndname = usp.get('bstfrndname');
usp_schlname = usp.get('schlname');
usp_hobby = usp.get('hobby');
usp_hroname = usp.get('hroname');
usp_favplace = usp.get('favplace');
usp_goal = usp.get('goal');
usp_favsub = usp.get('favsub');

console.log(usp_sid);
console.log(usp_oid);
console.log(usp_date);
console.log(usp_time);
console.log(usp_name);
console.log(usp_gender);
console.log(usp_bstfrndname);
console.log(usp_schlname);
console.log(usp_hobby);
console.log(usp_hroname);
console.log(usp_favplace);
console.log(usp_goal);
console.log(usp_favsub);

document.getElementsByTagName('span')[0].innerText += " "  + usp_name;
document.getElementsByTagName('span')[1].innerText += " "  + usp_gender;
document.getElementsByTagName('span')[2].innerText += " "  + usp_bstfrndname;
document.getElementsByTagName('span')[3].innerText += " "  + usp_schlname;
document.getElementsByTagName('span')[4].innerText += " "  + usp_hobby;
document.getElementsByTagName('span')[5].innerText += " "  + usp_hroname;
document.getElementsByTagName('span')[6].innerText += " "  + usp_favplace;
document.getElementsByTagName('span')[7].innerText += " "  + usp_goal;
document.getElementsByTagName('span')[8].innerText += " "  + usp_favsub;
document.getElementsByTagName('span')[9].innerText += " "  + usp_date + " UTC";
document.getElementsByTagName('span')[10].innerText += " "  + usp_time + " UTC";
