$(function(){
    $("#beolvas").on("click",beolvas);
    $("#kuld").on("click",adBeir);
    $("article").delegate(".torol","click",adTorol);
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
        var id=telefonkonyvem[i].ID;
    
    
    var elem ="<div> <h2>"+ nev+" </h2> <p>"+ tel+" </p> <p>"+ kep+"</p> \n\
<button id='"+id+"' class='torol'>Töröl</button></div>";
    $("article").append(elem);
}
}
function adTorol(){
    console.log("kiirtrorol");
    var ID =$(this).attr("id");
    var akte=$(this).closest("div");
    //$(this).closest("div").remove();
    
    $.ajax({
        type: "DELETE",
        url: "torles.php?ID="+ID, 
        success: function(result){
            //telefonkonyvem = JSON.parse(result);
            akte.remove();
        },
        error: function(){
            alert("Hiba az adatok törlésekor");
        }
  });
}

function beolvas(){
    $.ajax({
        type: "GET",
        url: "feldolgoz.php", 
        success: function(result){
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function(){
            alert("Hiba a betöltéskor");
        }
  });
}
function adBeir(){
    console.log("torol");
}

function adBeir(){
    var szemely= {
        nev:$("#nev").val(),
        tel:$("#tel").val(),
        kep:$("#kep").val()
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






















