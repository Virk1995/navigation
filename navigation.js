$(".menu").click(function(){
  $("ul").toggleClass("check");
  $(".main-container").toggleClass("blur");
  $(".menu").toggleClass("fa-regular fa-xmark")
  $("a").toggleClass("active");

  var listitems= document.querySelectorAll("a");
  console.log(listitems);
  listitems.forEach(function(item, index){
 item.style.transition=`all .5s linear ${index*0.1}s`;

  })

});
