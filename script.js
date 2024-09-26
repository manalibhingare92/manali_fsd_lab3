$(document).ready(function() {
    $('#changeTextButton').click(function() {
        $(this).text('Image Changed!');
    });

   
    $('body').css({
        'background-image':'url("ihttps://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg")',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center'

    });

    
    $('#submitForm').click(function() {
        var username = $('#username').val();
        var email = $('#email').val();
        alert('Username: ' + username + '\nEmail: ' + email);
    });

 
    $('#removeButton').attr('title', 'Click to remove the info');
});

function change() {
    const title = document.getElementById('title');
    title.innerHTML = 'Heaven on Earth.....';
    title.style.color = 'cyan';
    title.style.textAlign='center';
}

function changeImage() {
    const image = document.getElementsByClassName('image')[0];
    image.src = 'https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg';
}

function addTextNode() {
    const parent = document.getElementById('parentNode');
    const newText = document.createTextNode('Paradise on Earth');
    parent.appendChild(newText);
}

function removeNode() {
    const parent = document.getElementById('parentNode');
    parent.textContent = "Click to add information!";
}
