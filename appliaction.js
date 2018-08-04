var notification_class = document.getElementsByClassName('notification');
document.addEventListener("DOMContentLoaded", function() { 
    for (var i = 0 ; i < notification_class.length; i++) {
        notification_class[i].addEventListener("click", notificationDismiss);
        return false 
     };
  });



//notification
function notification(type, text){
    for (i = 0, notification_class.length; i < notification_class.length; i++) {
        if (type == 'success') {
            notification_class[i].style.backgroundColor = '#34bfa3';
        } else if (type == 'error') {
            notification_class[i].style.backgroundColor = '#f4516c';
        } else if (type == 'warning') {
            notification_class[i].style.backgroundColor = '#ffb822';
        } else if (type == 'info') {
            notification_class[i].style.backgroundColor = '#36a3f7';
        }
        notification_class[i].style.visibility = 'visible';
        notification_class[i].innerHTML = text;
        notification_class[i].style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
        setTimeout(function () {
            notificationDismiss();
        }, 2700);

    }

}

function notificationDismiss(){
    for (i = 0, notification_class.length; i < notification_class.length; i++) {
        notification_class[i].style.visibility = 'hidden';
        notification_class[i].style.animation = '';        
    }

}
