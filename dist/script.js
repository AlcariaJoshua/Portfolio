const burger_btn = document.querySelector('.burger_btn');
const nav = document.querySelector("nav");

burger_btn.addEventListener('click', () => {
    burger_btn.classList.toggle('open');
    nav.classList.toggle('open');
});


//slider interest
  var slider = tns({
    container: '.slider',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    gutter: 16,
    responsive:{
        990:{
            items: 4,
            autoplay: false,
            
        }
    }
    
  });

  //slider projects
  var slider = tns({
    container: '.project-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    responsive:{
        990:{
            items: 1,
       
            
        }
    }
  });