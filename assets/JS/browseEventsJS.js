//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";



//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundEvents(this.responseText);
        });
    }
};
console.log("getting events!");
xhttp.open("GET", ip + "api/event/", true);
xhttp.send();


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var currentTime = new Date();

var displayFoundEvents = function (event_list) {

    var parsed = JSON.parse(event_list);
    console.log("parsed: ", parsed);

    var grouped = _.groupBy(parsed, 'event_id');
    console.log("grouped: ", grouped);

    var grouped_list = [];

    for(var index in grouped){
        grouped_list.push(grouped[index])
    }

    grouped_list.sort(function(a,b){
        var d1 = new Date(a[0].event_date)
        var d2 = new Date(b[0].event_date)
        return  d1 - d2
    });

    console.log("grouped_list: ", grouped_list);

    generateEventDivs(grouped_list);
};




var generateEventDivs = function(grouped) {

    for(var event_id in grouped){

        var e_date = new Date(grouped[event_id][0].event_date)
        var past = e_date < currentTime;
        var classes = "glyphicon glyphicon-calendar";
        var classes = "timeline-badge info";
        if(past){
            console.log(grouped[event_id][0].event_name)
            classes = "past " + classes
        }


        if($('ul.timeline li').length % 2 == 0){
            var $a = $('<a />', {href: ip + 'pages/event.html?event_id=' + event_id});

            $('.timeline').prepend(
                '<li class="timeline-inverted" href=' + ip + "pages/event.html?event_id=" + event_id +'>'
                +'<div class="' + classes + '"><i class="glyphicon glyphicon-calendar"></i></div>'
                +'<div class="timeline-panel">'
                +'<div class="timeline-heading">'
                +'<h4 class="timeline-title">'
                +'<a href=' + ip + "pages/event.html?event_id=" + event_id +'>'
                + grouped[event_id][0].event_name
                +'</a>'
                +'</h4>'
                +'<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>'
                +' ' + grouped[event_id][0].event_date.substr(0, 10)
                +'</small></p>'
                +'</div>'
                +'<div class="timeline-body">'
                +'<p>'
                + grouped[event_id][0].brief_summary
                +'</p>'
                +'</div>'
                +'</div>'
                +'</li>'
                + '</a>'
            );

        }
        else{

            $('.timeline').prepend(
                '<li>'
                +'<div class="' + classes + '"><i class="glyphicon glyphicon-calendar"></i></div>'
                +'<div class="timeline-panel">'
                +'<div class="timeline-heading">'
                +'<h4 class="timeline-title">'
                +'<a href=' + ip + "pages/event.html?event_id=" + event_id +'>'
                + grouped[event_id][0].event_name
                +'</a>'
                +'</h4>'
                +'<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>'
                +' ' + grouped[event_id][0].event_date.substr(0, 10)
                +'</small></p>'
                +'</div>'
                +'<div class="timeline-body">'
                +'<p>'
                + grouped[event_id][0].brief_summary
                +'</p>'
                +'</div>'
                +'</div>'
                +'</li>'
            );
        }
    }


    };