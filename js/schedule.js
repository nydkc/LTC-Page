var schedule  = {
    "dayone": [
        {"day":" Friday, March 23, 2018 "},
        {"starttime":"1:00 PM","endtime":"4:00 PM","title":"Registration/ Arrival"},
        {"starttime":"5:30 PM","endtime":"6:00 PM","title":"Candidates Meeting"},
        {"starttime":"5:30 PM","endtime":"6:15 PM","title":"LTC Orientation & Welcome"},
        {"starttime":"6:30 PM","endtime":"7:30 PM","title":"Dinner (Tribute to Advisors)"},
        {"starttime":"7:30 PM","endtime":"8:30 PM","title":"Opening Session"},
        {"starttime":"8:30 PM","endtime":"9:15 PM","title":"Club Time/ Workshop Planning"},
        {"starttime":"9:30 PM","endtime":"10:45 PM","title":"Playfair"},
        {"starttime":"9:30 PM","endtime":"10:00 PM","title":"Chaperone Meeting"},
        {"starttime":"12:00 AM","endtime":"7:00 AM","title":"Curfew"}
    ],
    "daytwo": [
        {"day":" Saturday, March 24, 2018 "},
        {"starttime":"8:30 AM", "endtime":"9:15 AM", "title":"Breakfast"},
        {"starttime":"8:30 AM", "endtime":"9:15 AM", "title":"President & Club Excellence Reception"},
        {"starttime":"9:30 AM", "endtime":"10:15 AM", "title":"Awards & Recogniton Session"},
        {"starttime":"10:15 AM", "endtime":"11:15 AM", "title":"Keynote Speaker (Saul Flores)"},
        {"starttime":"11:30 AM", "endtime":"12:15 PM", "title":"Workshop Round One"},
        {"starttime":"12:30 PM", "endtime":"1:30 PM", "title":"Lunch"},
        {"starttime":"1:30 PM", "endtime":"3:30 PM", "title":"Caucus Sessions"},
        {"starttime":"3:45 PM", "endtime":"4:30 PM", "title":"Workshop Round Two"},
        {"starttime":"4:45 PM", "endtime":"5:30 PM", "title":"Workshop Round Three"},
        {"starttime":"5:30 PM", "endtime":"6:00 PM", "title":"Break"},
        {"starttime":"6:00 PM", "endtime":"7:00 PM", "title":"Dinner"},
        {"starttime":"7:30 PM", "endtime":"9:00 PM", "title":"General Session"},
        {"starttime":"9:30 PM", "endtime":"11:15 PM", "title":"Governors Ball"},
        {"starttime":"12:00 AM","endtime":"7:00 AM","title":"Curfew"}
    ],
    'daythree': [
        {"day":" Sunday, March 25, 2018 "},
        {"starttime":"7:15 AM", "endtime":"9:15 AM", "title":"Breakfast"},
        {"starttime":"8:00 AM", "endtime":"9:15 AM", "title":"House of Delegates"},
        {"starttime":"8:30 AM", "endtime":"9:15 AM", "title":"Workshop Round Four"},
        {"starttime":"9:30 AM", "endtime":"11:15 AM", "title":"Closing Session"},
        {"starttime":"11:30 AM", "endtime":"12:30 PM", "title":"Farewell Brunch"}
        {"starttime":"12:30 AM", "endtime":"--:-- PM", "title":"Departure"}
    ]
}

var leftbtn = document.getElementById('leftclick');
var rightbtn = document.getElementById('rightclick');
var date = schedule.dayone;
function schedulerender(date){
    var rendered = '',x;
    var template = $('#template').html();
    for (x = 1; x < date.length;x++ ){
        rendered += Mustache.render(template, date[x]);
    }
    $('#tablebody').html(rendered);
}

leftbtn.addEventListener('click', function(){
    var thedate = $('#date');
    if (thedate.html() == schedule.dayone[0].day){
        thedate.html(schedule.daythree[0].day);
        schedulerender(schedule.daythree);
    }
    else if (thedate.html() == schedule.daythree[0].day){
        thedate.html(schedule.daytwo[0].day);
        schedulerender(schedule.daytwo);
    }
    else{
        thedate.html(schedule.dayone[0].day);
        schedulerender(schedule.dayone);
    }
});

rightbtn.addEventListener('click', function(){
    var thedate = $('#date');
    if (thedate.html() == schedule.dayone[0].day){
        thedate.html(schedule.daytwo[0].day);
        schedulerender(schedule.daytwo);
    }
    else if (thedate.html() == schedule.daythree[0].day){
        thedate.html(schedule.dayone[0].day);
        schedulerender(schedule.dayone);
    }
    else{
        thedate.html(schedule.daythree[0].day);
        schedulerender(schedule.daythree);
    }
});
