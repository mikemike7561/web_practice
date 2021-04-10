var cmp = 19;
$(function(){
    $("input").on("click", function(){
        //alert("Hi");
        var numberListName = $("li").length;
        while(true){
            numChild = Math.floor(Math.random()*numberListName);
           if(cmp != numChild)
                break;
        }
        $("h1").text($("li").eq(numChild).text());
        if(numChild == 0){
            document.getElementById("img").src = "img3.jpg";
        }
        else if(numChild == 1){
            document.getElementById("img").src = "img1.jpg";
        }
        else{
            document.getElementById("img").src = "img2.jpg";
        }
        cmp = numChild;
    });
});