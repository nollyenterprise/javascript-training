$('document').ready(function () {







const colorVariations = [ "blue", "green", "black", "orange", "violet" ];

// // Using Ordinary Javascript =================================
// // define an Interval
// setInterval(() => {
//     let cont1 = document.querySelector(".change-color");
//     let cont2 = document.querySelector(".change-font");
//     cont1.style.backgroundColor = colorVariations[Math.floor(Math.random()*colorVariations.length)];
//     cont2.style.color = colorVariations[Math.floor(Math.random()*colorVariations.length)];

// // Run every 3 seconds 
// }, 3000);



// Using Ordinary Javascript =================================
function start () {
    if(!confirm('Are you sure you want to start')) 
        return false;
    setInterval(() => {

        let cont1 = $(".change-color");
        let cont2 = $(".change-font");
        cont1.css({backgroundColor: colorVariations[Math.floor(Math.random()*colorVariations.length)]});
        cont2.css({color: colorVariations[Math.floor(Math.random()*colorVariations.length)]});

    // Run every 3 seconds 
    }, 3000);
}


// Tag Selector 
$("tag")

// Class Selector 
$(".class")

// ID Selector 
$("#class")


// document.querySelector(".start-button").addEventListener("click", function () {
//     if(!confirm('Are you sure you want to start')) 
//         return false;
//     start();
// });

// $(".start-button").on("click", function () {
//     if(!confirm('Are you sure you want to start')) 
//         return false;
//     start();
// })

$(".start-button").on("click", function () { start() });

document.querySelector(".start-button").addEventListener("click", start);




})