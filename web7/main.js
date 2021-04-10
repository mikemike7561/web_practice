$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var millisecsPerDay = 24*60*60*1000;

    var topicCount = topic.length;
    for(var x = 0; x<topicCount; x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        if(x == 0 || x == 1){
            $("#courseTable").append(`<td><td1>${(new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString().slice(5))}</td1></td>`);
        }
        else{
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString().slice(5))}</td>`);
        }
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("<tr>");
        
    }
});