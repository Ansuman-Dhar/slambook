var myBookList = document.getElementById('myBooks');
var signedBookList = document.getElementById('mysignedBooks');

document.getElementById('user').innerText = getCookie('name');

var myBooks;
function viewMyBooks(){
    if (id_Global != null || id_Global != undefined || id_Global != ""){
        $.ajax({
            data : {
                ownerid: id_Global
            },
            type: 'POST',
            url: 'https://ansuman2005.pythonanywhere.com/getmybooks'
        })
        .done(function(data){
            myBooks = data;
            listMyBooks();
        })
    }
}

var mySignedBooks;
function viewSignedBooks(){
    if (id_Global != null || id_Global != undefined || id_Global != ""){
        $.ajax({
            data : {
                senderid: id_Global
            },
            type: 'POST',
            url: 'https://ansuman2005.pythonanywhere.com/getsignedbooks'
        })
        .done(function(data){
            mySignedBooks = data;
            listSignedBooks();
        })
    }
}

function listMyBooks(){
    myBookList.innerHTML = null;
    if (myBooks != "NONE"){
        myBooks.forEach(e => {
            let li = document.createElement('li');
            let name = document.createElement('span');
            let date = document.createElement('span');
            let time = document.createElement('span');

            li.setAttribute('data-params', '?oid' + '&senderid=' + e.senderid + '&ownerid=' + e.ownerid + '&date=' + e.date + '&time=' + e.time + '&name=' + e.name +'&gender=' + e.gender + '&bstfrndname=' + e.bstfrndname + '&schlname=' + e.schlname + '&hobby=' + e.hobby + '&hroname=' + e.hroname + '&favplace=' + e.favplace + '&goal=' + e.goal + '&favsub=' + e.favsub);
            li.setAttribute('class', 'listitem')
            li.addEventListener('click', function(e){
                e.stopPropagation();
                e.preventDefault();
                open('https://ansuman-dhar.github.io/slambook/view.html' + li.getAttribute('data-params'));
            });
            name.textContent = e.name;
            date.textContent = e.date;
            time.textContent = e.time;
            date.style.color = '#a8a8a8';
            time.style.color = '#a8a8a8';

            li.appendChild(name);
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(date);
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(time);
            myBookList.appendChild(li);
        });
    } else {
        myBookList.innerHTML = "No Records Found";
    }
}

function listSignedBooks(){
    signedBookList.innerHTML = null;
    if (mySignedBooks != "NONE"){
        mySignedBooks.forEach(e => {
            let li = document.createElement('li');
            let name = document.createElement('span');
            let date = document.createElement('span');
            let time = document.createElement('span');

            li.setAttribute('data-params', '?sid' + '&senderid=' + e.senderid + '&ownerid=' + e.ownerid + '&date=' + e.date + '&time=' + e.time + '&name=' + e.name +'&gender=' + e.gender + '&bstfrndname=' + e.bstfrndname + '&schlname=' + e.schlname + '&hobby=' + e.hobby + '&hroname=' + e.hroname + '&favplace=' + e.favplace + '&goal=' + e.goal + '&favsub=' + e.favsub);
            li.setAttribute('class', 'listitem')
            li.addEventListener('click', function(e){
                e.stopPropagation();
                e.preventDefault();
                open('https://ansuman-dhar.github.io/slambook/view.html' + li.getAttribute('data-params'));
            })
            name.textContent = e.name;
            date.textContent = e.date;
            time.textContent = e.time;
            date.style.color = '#a8a8a8';
            time.style.color = '#a8a8a8';

            li.appendChild(name);
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(date);
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(document.createTextNode("\u00A0"));
            li.appendChild(time);
            signedBookList.appendChild(li);
        });
    } else {
        signedBookList.innerHTML = "No Records Found";
    }
}

if (id_Global != null || id_Global != "" || id_Global != undefined){
    setTimeout(() => {
        viewMyBooks();
        viewSignedBooks();
        document.getElementById('link').value = "https://ansuman-dhar.github.io/slambook/fillup.html?bookid=" + id_Global;
    }, 1000)
}

function whatsapp(){
    if (navigator.share){
        navigator.share({
            title: 'SlamBook link',
            text: "Sign my SlamBook",
            url: "https://ansuman-dhar.github.io/slambook/fillup.html?bookid=" + id_Global
        })
    } else {
        document.getElementById('sharedialog').classList.add('is-open')
    }
}

function copyText(elem){
    elem.select();
    elem.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
