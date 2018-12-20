var  nam = document.getElementById('nam');
var surname = document.getElementById('surname');
var numb = document.getElementById('numb');
var regV = /^[A-za-za-z\s]+$/;
var regN = /^[+]\d{11}$/;

nam.onblur = function () {

    if(regV.test(nam.value)){
        nam.style.backgroundColor = "#49ff25";
    }
    else{
        nam.style.backgroundColor = "red";
    }
    if(!nam.value){
        nam.style.backgroundColor = "#fff";
    }
};


surname.onblur = function () {

    if(regV.test(surname.value)){
        surname.style.backgroundColor = "#49ff25";
    }
    else{
        surname.style.backgroundColor = "red";
    }
    if(!surname.value){
        surname.style.backgroundColor = "#fff";
    }
};


numb.onblur = function () {
  if(regN.test(numb.value)){
      numb.style.backgroundColor = "#49ff25";
  }
  else{
      numb.style.backgroundColor = "red";
  }
    if(!numb.value){
        numb.style.backgroundColor = "#fff";
    }
};

var sub =  document.getElementById('sub');

sub.onclick = function () {
    if(regV.test(nam.value)){
        nam.style.backgroundColor = "#49ff25";
    }
    else{
        nam.style.backgroundColor = "red";
        nam.value = "";
        return false;

    }
    if(!nam.value){
        nam.style.backgroundColor = "#fff";
    }


    if(regV.test(surname.value)){
        surname.style.backgroundColor = "#49ff25";
    }
    else{
        surname.style.backgroundColor = "red";
        surname.value = "";
        return false;

    }
    if(!surname.value){
        surname.style.backgroundColor = "#fff";
    }

    if(regN.test(numb.value)){
        numb.style.backgroundColor = "#49ff25";
    }
    else{
        numb.style.backgroundColor = "red";
        numb.value = "";
        return false;


    }
    if(!numb.value){
        numb.style.backgroundColor = "#fff";
    }

};






  $("#sub").click(function() {
    $("#sub").addClass("loading");
    setTimeout(function() {
      $("#sub").addClass("hide-loading");
      // For failed icon just replace ".done" with ".failed"
      $(".done").addClass("finish");
    }, 3000);
    setTimeout(function() {
      $("#sub").removeClass("loading");
      $("#sub").removeClass("hide-loading");
      $(".done").removeClass("finish");
      $(".failed").removeClass("finish");
    }, 2500);
  })

$("#sub").click(function(){
    setTimeout(function() {
        $("#form")[0].reset();
    }, 3000);
});



///////manu

var menuBtn = document.getElementById('menuBtn');
    menuBtn.onclick = function(){
    document.getElementById('nav').classList.toggle('navOp');
    var li = document.querySelectorAll("nav li");
    var a = document.querySelectorAll(".inner-nav li a");
    for(var j = 0; j < a.length; j++){
        a[j].style.padding = "0";
    }
    for(var i = 0; i < li.length ; i++){
        li[i].classList.toggle("open");
    }

         window.onscroll = function(){
         for(var k = 0; k < li.length ; k++){
            if(li[k].classList.contains("open")){
            li[k].classList.remove("open");
            document.getElementById('nav').classList.remove('navOp');
}
    }
    }

};

$( document ).ready(function() {


//section

var offHome = $("#home");
    var offAbout = $("#about");
    var offIngredients = $("#ingredients");
    var offMenu = $("#menu");
    var offReviews = $("#reviews");
    var offReservation = $("#reservation");


///menu
var hom = $('#hom');
    var about = $('#ab');
    var ing = $('#ing');
    var men = $('#men');
    var rev = $('#rev');
    var res = $('#res');
//ScrollSmoth//////////////////////////////////////////////////////////////////////////////////////////////////////////
var seeMenu = $("#seeMenu");

    seeMenu.click(function(){
        $("html , body").animate({scrollTop : offMenu.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });

    hom.click(function(){
        $("html , body").animate({scrollTop : offHome.offset().top},1500 , 'easeInOutCubic');
        return false;
    });

    about.click(function(){
     $("html , body").animate({scrollTop : offAbout.offset().top + 2},1500 , 'easeInOutCubic');
     return false;
    });

    ing.click(function(){
        $("html , body").animate({scrollTop : offIngredients.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });

    men.click(function(){
        $("html , body").animate({scrollTop : offMenu.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });
    rev.click(function(){
        $("html , body").animate({scrollTop : offReviews.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });
    res.click(function(){
        $("html , body").animate({scrollTop : offReservation.offset().top + 2},1500 , 'easeInOutCubic');
        return false;
    });

//ScrollSmoth//////////////////////////////////////////////////////////////////////////////////////////////////////////
//menucoloring//////////////////////////////////////////////////////////////////////////////////////////////////////////
var scrolled = $(document).scrollTop() || $(document.documentElement).scrollTop();

    if(scrolled >= offHome.offset().top){
        hom.css({color : "#ff751a"});
    }else{
        hom.css({color : "#fff"});
    }


$(document).scroll(function(){
    var scrolled = $(document).scrollTop() || $(document.documentElement).scrollTop();
    var nav = document.getElementById('nav');


if(scrolled > 100){
    nav.style.position = "fixed";
    nav.style.backgroundColor = "rgba(0,0,0,0.7)";
    }
    else if(scrolled < 100){
    nav.style.position = "absolute";
    nav.style.backgroundColor = "transparent";
    }


if(scrolled >= offHome.offset().top){
    hom.css({color : "#ff751a"});
}else{
     hom.css({color : "#fff"});
}
if( scrolled >= offAbout.offset().top ){
    hom.css({color : "#fff"});
    about.css({color : "#ff751a"});
}else{
    about.css({color : "#fff"});
}
if(scrolled >= offIngredients.offset().top){
    about.css({color : "#fff"});
    ing.css({color : "#ff751a"});
}else{
    ing.css({color : "#fff"});
}
if(scrolled >= offMenu.offset().top){
    ing.css({color : "#fff"});
    men.css({color : "#ff751a"});
}else{
    men.css({color : "#fff"});
}
if(scrolled >= offReviews.offset().top){
    men.css({color : "#fff"});
    rev.css({color : "#ff751a"});
}else{
    rev.css({color : "#fff"});
}
if(scrolled >= offReservation.offset().top){
    rev.css({color : "#fff"});
    res.css({color : "#ff751a"});
}else{
    res.css({color : "#fff"});
}
});
//menucoloring//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Зададим стартовую дату
var start = new Date(),
        prevDay,
        startHours = 9;

// 09:00
start.setHours(9);
start.setMinutes(0);

// Если сегодня суббота или воскресенье - 10:00
if ([6,0].indexOf(start.getDay()) != -1) {
        start.setHours(10);
        startHours = 10
}

$('#timepicker-actions-exmpl').datepicker({
        timepicker: true,
        startDate: start,
        minHours: startHours,
        maxHours: 18,
        onSelect: function(fd, d, picker) {
            // Ничего не делаем если выделение было снято
            if (!d) return;

            var day = d.getDay();

            // Обновляем состояние календаря только если была изменена дата
            if (prevDay != undefined && prevDay == day) return;
            prevDay = day;

            // Если выбранный день суббота или воскресенье, то устанавливаем
            // часы для выходных, в противном случае восстанавливаем начальные значения
            if (day == 6 || day == 0) {
                picker.update({
                    minHours: 10,
                    maxHours: 16
                })
            } else {
                picker.update({
                    minHours: 9,
                    maxHours: 18
                })
            }
        }
});






});


