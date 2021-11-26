   
   /* start task 1 */
            $(".header-content h1").fadeIn(1000 , function(){
                $(".header-content h2").fadeIn(1000 , function(){
                    $(".header-content button").fadeIn(1000 , function(){
                        $(".header-content form-group").fadeIn(1000)
                    })
                });
            });


let typed = new Typed('.element',{
    strings: ['Leading Tomorrow','Learning Today','Leading Tomorrow'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backDelay: 200,
    startDelay: 100,
    backSpeed: 50,
});


let homeOffset = $("#Home").offset().top ;
let adsOffset = 1200;
let aboutOffset = 2300 ;
let coursesOffset = 3560 ;
let trainersOffset =5100 ;
let pricingOffset = 5750 ;
console.log(coursesOffset,"cor offset");
console.log(trainersOffset,"trainers");
console.log(pricingOffset,"proces00");
$("#homeLink").click(function () 
{

    $("html,body").animate({scrollTop:homeOffset} , 2000);
});

$("#aboutLink").click(function () 
{

    $("html,body").animate({scrollTop:aboutOffset} , 2000);
});


$("#coursesLink").click(function () 
{

    $("html,body").animate({scrollTop:coursesOffset} , 2000);
});


$("#trainersLink").click(function () 
{

    $("html,body").animate({scrollTop:trainersOffset} , 2000);
});


$("#pricingLink").click(function () 
{

    $("html,body").animate({scrollTop:pricingOffset} , 2000);
});



$(window).scroll(function(){

  let wScroll = $(window).scrollTop();

  if(wScroll > adsOffset -550)
  {
     $("#main-nav").css("backgroundColor","black");
     $("#btnUp").fadeIn(500);
     $("#btnChat").fadeIn(500);
  }
  else
  {
    $("#main-nav").css("backgroundColor","transparent");
    $("#btnUp").fadeOut(500);
    $("#btnChat").fadeOut(500);
  }
  });
  
  $("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0} , 1500);
});

/* end task 1 */

/* start task 2 */

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById('myBtnContainer');
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* end task 2 */

/* start task count down */

var countDownDate = new Date("Nov 30, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

  /* end task count */

/* start task 5 */

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

/* end task 5 */



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}