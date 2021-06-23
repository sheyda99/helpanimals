$(function() {
  $('#navbarToggle').blur(function(event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $('#navbarNav').collapse('hide');
    }
  });
});

let anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorlinks) {
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href');
    let target = document.querySelector(hashval);
    target.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}

window.onscroll = function() { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('go-to-top').style.bottom = '40px';
  } else {
    document.getElementById('go-to-top').style.bottom = '-70px';
  }
}