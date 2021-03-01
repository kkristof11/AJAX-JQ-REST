$(function(){
    $("#beolvas").on("click",beolvas);
    $("#kuld").on("click",adBeir);
});

var telefonkonyvem = [];
function kiir(){
    var nev=$("#nev").val();
    var tel=$("#tel").val();
    var kep=$("#kep").val();
    $("article").empty();
    for (var i = 0; i < telefonkonyvem.length; i++) {
        var nev=telefonkonyvem[i].nev;
        var tel=telefonkonyvem[i].tel;
        var kep=telefonkonyvem[i].kep;
    }
    
    var elem ="<div> <h2>"+ nev+" </h2> <p>"+ tel+" </p> <p>"+ kep+"</p> \n\
<button class='torol'>Töröl</button></div>";
    $("article").append(elem);
}

function beolvas(){
    $.ajax({
        type: "GET",
        url: "feldolgoz.php", 
        success: function(result){
            telefonkonyvem=JSON.parse(result);
            console.log(telefonkonyvem);
            
        },
        error: function(){
            alert("Hiba a betöltéskor");
        }
  });
}

function adBeir(){
    var szemely= {
        nev=$("#nev").val(),
        tel=$("#tel").val(),
        kep=$("#kep").val()
    };
    
    $.ajax({
        type: "POST",
        url: "beir.php", 
        data:szemely,
        success: function(ujSzemely){
            telefonkonyvem.push(JSON.parse(ujSzemely));
            console.log(telefonkonyvem);
            
        },
        error: function(){
            alert("Hiba a betöltéskor");
        }
  });
}






















