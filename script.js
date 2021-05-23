const summary = document.querySelectorAll('summary');
      box = document.querySelector('.box');
      details = document.querySelectorAll('details');
summary.forEach(item=>{
    item.addEventListener('mouseenter', function (){
        box.classList.add('on-hover');
    })
    item.addEventListener('mouseleave', function(){
        box.classList.remove('on-hover');
    })
})



details.forEach((detail) => {
  detail.addEventListener("click", () => {
    details.forEach((item) => {
      if (item !== detail) {
        item.removeAttribute("open");
      }
    });
  });
});

