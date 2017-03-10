var schedule  = {
    "dayone": [
        {"day":" Friday, March 31st, 2017 "},
        {"starttime":"2:00 PM","endtime":"4:30 PM","title":"Registration/ Arrival"},
        {"starttime":"4:45 PM","endtime":"5:30 PM","title":"Candidates Meeting"},
        {"starttime":"5:15 PM","endtime":"6:00 PM","title":"Welcome to LTC Session"},
        {"starttime":"6:15 PM","endtime":"7:15 PM","title":"Dinner (Tribute to Advisors)"},
        {"starttime":"7:30 PM","endtime":"8:15 PM","title":"Opening Session"},
        {"starttime":"8:15 PM","endtime":"8:45 PM","title":"Keynote Speaker: John Shertzer"},
        {"starttime":"9:00 PM","endtime":"9:30 PM","title":"Workshop Round One"},
        {"starttime":"9:45 PM","endtime":"11:15 PM","title":"Playfair"},
        {"starttime":"9:45 PM","endtime":"11:15 PM","title":"Chaperone Meeting"},
        {"starttime":"11:15 PM","endtime":"12:00 AM","title":"Club Time/ Free Time"},
        {"starttime":"12:00 AM","endtime":"--:-- AM","title":"Curfew"}
    ],
    "daytwo": [
        {"day":" Saturday, April 1st, 2017 "},
        {"starttime":"8:30 AM", "endtime":"9:30 AM", "title":"Breakfast"},
        {"starttime":"8:30 AM", "endtime":"9:15 AM", "title":"President & VIP Breakfast"},
        {"starttime":"9:30 AM", "endtime":"10:15 AM", "title":"Awards & Recogniton Session"},
        {"starttime":"10:15 AM", "endtime":"11:15 AM", "title":"Keynote Address"},
        {"starttime":"11:30 AM", "endtime":"12:15 PM", "title":"Workshop Round Two"},
        {"starttime":"11:30 AM", "endtime":"12:00 PM", "title":"Conference Staff & Advisors Lunch"},
        {"starttime":"12:15 PM", "endtime":"1:15 PM", "title":"Lunch (Tribute to Club Presidents)"},
        {"starttime":"1:30 PM", "endtime":"3:30 PM", "title":"Caucus Sessions"},
        {"starttime":"3:45 PM", "endtime":"4:30 PM", "title":"Workshop Round Three"},
        {"starttime":"4:45 PM", "endtime":"5:30 PM", "title":"Workshop Round Four"},
        {"starttime":"4:45 PM", "endtime":"5:30 PM", "title":"Conference Staff & Kiwanis Committee Dinner"},
        {"starttime":"6:00 PM", "endtime":"7:00 PM", "title":"Dinner (Tribute to Members)"},
        {"starttime":"7:00 PM", "endtime":"8:30 PM", "title":"Club Time/ Free Time"},
        {"starttime":"7:15 PM", "endtime":"8:15 PM", "title":"Service Fair (Optional)"},
        {"starttime":"7:15 PM", "endtime":"8:15 PM", "title":"Leadership Games Session One (Optional)"},
        {"starttime":"8:30 PM", "endtime":"10:00 PM", "title":"General Session: Salute to Divisions"},
        {"starttime":"10:30 PM", "endtime":"11:30 PM", "title":"Leadership Games Session Two (Optional)"},
        {"starttime":"10:30 PM", "endtime":"11:45 PM", "title":"Governors Ball (Optional)"},
        {"starttime":"10:30 PM", "endtime":"11:45 PM", "title":"Advisor and Chaperone Social"},
        {"starttime":"12:00 AM","endtime":"--:-- AM","title":"Curfew"}
    ],
    'daythree': [
        {"day":" Sunday, April 2nd, 2017 "},
        {"starttime":"7:00 AM", "endtime":"9:00 AM", "title":"Continental Breakfast"},
        {"starttime":"8:00 AM", "endtime":"9:15 AM", "title":"House of Delegates"},
        {"starttime":"8:30 AM", "endtime":"9:15 AM", "title":"Workshop Round Five"},
        {"starttime":"9:30 AM", "endtime":"11:15 AM", "title":"Closing Session"},
        {"starttime":"11:30 AM", "endtime":"12:30 PM", "title":"Farewell Brunch"}
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
