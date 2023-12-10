document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        openCookieModal();
    }, 5000);
});

function openCookieModal() {
    var modal = document.getElementById('cookieModal');
    var modalcookie = document.getElementById('modalcookie');
    var modalText = document.getElementById('modalText');
    var acceptButton = document.getElementById('acceptButton');
    var rejectButton = document.getElementById('rejectButton');
    var closemodal = document.getElementById('closecookie')

    modal.style.display = 'block';

    closemodal.addEventListener('click', function (){
        modalcookie.style.border = '2px solid red';
        modalcookie.style.boxShadow = '2px 2px 10px #FF0000FF';
        alert('Нямате възможност да затворите модалния прозорец преди да сте приели бисквитките. ' +
            'Моля приемете ги!')
        modalText.style.color = '#FF0000FF'
        modalText.style.fontWeight = '600'
        rejectButton.style.color = '#afafaf'
        closemodal.style.color = '#FF0000FF'
        rejectButton.style.boxShadow = 'none'
        acceptButton.style.boxShadow = 'box-shadow: 1px 1px 10px #12C501FF;'
        acceptButton.style.color = 'white'
    })

    acceptButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    rejectButton.addEventListener('click', function() {
        modalcookie.style.border = '2px solid red';
        modalcookie.style.boxShadow = '2px 2px 10px #FF0000FF';
        alert('Нямате възможност за отказване от бисвитките в сайта. ' +
            'Моля приемете ги!')
        modalText.style.color = '#FF0000FF'
        modalText.style.fontWeight = '600'
        closemodal.style.color = '#FF0000FF'
        acceptButton.style.boxShadow = 'box-shadow: 1px 1px 10px #12C501FF;'
        acceptButton.style.color = 'white'
    });


    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}