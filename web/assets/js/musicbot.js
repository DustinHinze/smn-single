/*
 * Created by Kuhva.
 */
$(document).ready(function(){$(".volume-slider").on("input",function(){$("#volume-display").html("Lautstärke :"+$(this).val()+"%")})}),$("#connectionsettings").submit(function(t){t.preventDefault(),$.ajax({url:"assets/save_bot.php",method:"POST",data:$("#connectionsettings").serialize()}).done(function(t){"success"===t?smnswal({title:"Einstellungen übernommen",type:"success"}):smnswal({title:"Fehler",text:"Einstellungen können nicht übernommen werden",type:"error"})})}),$("#audiosettings").submit(function(t){t.preventDefault(),$.ajax({url:"assets/save_bot.php",method:"POST",data:$("#audiosettings").serialize()}).done(function(t){"success"===t?($("#currentsong").val($('input[name="streamurl"]').val()),smnswal({title:"Einstellungen übernommen",type:"success"})):smnswal({title:"Fehler",text:"Einstellungen können nicht übernommen werden",type:"error"})})}),$(".do-botstart").click(function(t){t.preventDefault(),$("#bot-start").prop("disabled",!0);var e=$(this).parent().parent().data("bot-id");$.ajax({url:"assets/save_bot.php",method:"POST",data:{method:"start",botid:e}}).done(function(t){"success"===t?window.location.reload():($("#bot-start").prop("disabled",!1),smnswal({title:"Fehler",text:"Bot konnte nicht gestartet werden",type:"error"}))})}),$(".do-botstop").click(function(t){t.preventDefault(),$("#bot-stop").prop("disabled",!0);var e=$(this).parent().parent().data("bot-id");$.ajax({url:"assets/save_bot.php",method:"POST",data:{method:"stop",botid:e}}).done(function(t){"success"===t?window.location.reload():($("#bot-stop").prop("disabled",!0),smnswal({title:"Fehler",text:"Bot konnte nicht gestoppt werden",type:"error"}))})}),$(".do-playmusic").click(function(t){t.preventDefault();var e=$(this).parent().data("bot-id");$.ajax({url:"assets/save_bot.php",method:"POST",data:{method:"resume",botid:e}}).done(function(t){"success"!==t&&smnswal({title:"Fehler",text:"Anfrage konnte nicht verarbeitet werden",type:"error"})})}),$(".do-pausemusic").click(function(t){t.preventDefault();var e=$(this).parent().data("bot-id");$.ajax({url:"assets/save_bot.php",method:"POST",data:{method:"pause",botid:e}}).done(function(t){console.log(t),"success"!==t&&smnswal({title:"Fehler",text:"Anfrage konnte nicht verarbeitet werden",type:"error"})})}),$(".do-botdelete").click(function(t){t.preventDefault();var e=$(this).parent().parent().data("bot-id");smnswal({title:"Bist du dir sicher ?",text:"Den Musicbot bekommst du nicht wieder",showCancelButton:!0,confirmButtonText:"Löschen",showLoaderOnConfirm:!0,preConfirm:()=>{$.ajax({url:"assets/save_bot.php",method:"POST",data:{method:"delete",botid:e}}).done(function(t){"success"===t?smnswal({title:"Gelöscht"}).then(function(){window.location.href="dashboard.php"}):smnswal({title:"Fehler",text:"Bot konnte nicht gelöscht werden",type:"error"})})},allowOutsideClick:()=>!Swal.isLoading()})});
