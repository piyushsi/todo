 // Selectors
    var wrapper = document.getElementById('wrapper');
    var alarmHours = document.getElementById('alarm_hours');
    var alarmMinutes = document.getElementById('alarm_minutes');


 // Render initial time, then update every second after
    renderTime();
    setInterval(renderTime, 1000);
 // Render time
    function renderTime(){
// create new date object
        var time = new Date();
        var ampm = 'AM';
 // Get values
        var timeSeconds = time.getSeconds();
        var timeMinutes = time.getMinutes();
        var timeHours = time.getHours();

// Format values
        if (timeHours > 12){
            timeHours -= 12;
            ampm = 'PM'
        }

        if (timeMinutes < 10){
            timeMinutes = '0' + timeMinutes;
        }

        if (timeSeconds < 10){
            timeSeconds = '0' + timeSeconds;
        }

// Display time
        wrapper.innerHTML = timeHours + ':' + timeMinutes + ':' + timeSeconds + ' ' + ampm;
    }
