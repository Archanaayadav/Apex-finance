// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 28.613939, lng: 77.209023 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}



// Sticky menu background (Regular Javascript)
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


//Smooth Scrolling (Jquery)
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100  //-100px so that navbar doesnt cover the targetting section
      },
      800 // this 800 is the scrolling speed , can be set accordingly
    );
  }
});


