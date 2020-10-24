 // Dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdownIcon").classList.toggle("open");
}

$('.slick-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next'
});




/*
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  let open = false;
  let div = document.getElementById('myDropdownIcon');
  div.addEventListener('click', function() {
    if(open) {
      icon.className = 'dropdown-icons';
    }
    else {
      icon.className = 'dropdown-icons open';
    }
    open = !open;
  });
}*/



