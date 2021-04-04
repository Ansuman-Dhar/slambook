var usp = new URLSearchParams(location.search);
let usp_sid, usp_oid, usp_date, usp_time, usp_name, usp_gender, usp_bstfrndname, usp_schlname, usp_hobby, usp_hroname, usp_favplace, usp_goal, usp_favsub;

var signame = document.getElementById('signername');

if (usp.has('sid')){
    signame.innerText = "You signed this";
    console.log('You are in signer view');
} else if (usp.has('oid')){
    usp_name = usp.get('name');
    signame.innerText = usp_name + " signed this";
    console.log('You are in owner view');
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

document.getElementsByTagName('li')[0].innerText += " "  + usp_name;
document.getElementsByTagName('li')[1].innerText += " "  + usp_gender;
document.getElementsByTagName('li')[2].innerText += " "  + usp_bstfrndname;
document.getElementsByTagName('li')[3].innerText += " "  + usp_schlname;
document.getElementsByTagName('li')[4].innerText += " "  + usp_hobby;
document.getElementsByTagName('li')[5].innerText += " "  + usp_hroname;
document.getElementsByTagName('li')[6].innerText += " "  + usp_favplace;
document.getElementsByTagName('li')[7].innerText += " "  + usp_goal;
document.getElementsByTagName('li')[8].innerText += " "  + usp_favsub;
document.getElementsByTagName('li')[9].innerText += " "  + usp_date + " UTC";
document.getElementsByTagName('li')[10].innerText += " "  + usp_time + " UTC";