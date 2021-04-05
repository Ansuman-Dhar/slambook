var dateObj = new Date();
var usp = new URLSearchParams(window.location.search);

var gender = 'female';
document.getElementById('gender').addEventListener('change', () => {
    if (document.getElementById('gender').checked)
        gender = 'male';
    else
        gender = 'female';
});

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        if (id_Global != null && id_Global != "" && usp.has('bookid') && usp.get('bookid').length == 36 && (usp.get('bookid').match(/-/g)).length == 4 && $('#name').val() != null && $('#name').val() != "" && gender != null && gender != ""){
            $.ajax({
                data : {
                    senderid: id_Global,
                    ownerid: usp.get('bookid'),
                    date: dateObj.getUTCDate() + "-" + (dateObj.getUTCMonth() + 1) + "-" + dateObj.getUTCFullYear(),
                    time: dateObj.getUTCHours() + ":" + dateObj.getUTCMinutes() + ":" + dateObj.getUTCSeconds(),
                    name: $('#name').val(),
                    gender: gender,
                    bstfrndname: $('#bfname').val(),
                    schlname: $('#sname').val(),
                    hobby: $('#ho').val(),
                    hroname: $('#he').val(),
                    favplace: $('#place').val(),
                    goal: $('#goal').val(),
                    favsub: $('#favsu').val()
                },
                type: 'POST',
                url: 'https://ansuman2005.pythonanywhere.com/submitbook'
            })
            .done(function(data){
                console.log(data)
                alert(data)
                if (data == "Done")
                    open('https://ansuman-dhar.github.io/slambook/','_self');
            })
        } else {
            alert("Something went wrong.");
            if (id_Global == null || id_Global == "" || id_Global == undefined){
                alert("Please clear your cookies and try again");
            } else if (!usp.has('bookid') || usp.get('bookid').length != 36 || (usp.get('bookid').match(/-/g).length != 4)){
                alert("Invalid URL. Slambook owner id is not valid");
            } else {
                alert("Please fill atleast Name and Gender field");
            }
            console.error("Something went wrong");
            console.error({ 'yourId': id_Global, 'ownerId': usp.get('bookid'), 'Your Name': $('#name').val(), 'Gender': gender });
        }

        setCookie("name", $('#name').val(), 365) //cookie operation

    })
})