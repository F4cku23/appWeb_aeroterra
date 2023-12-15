window.initMap=function(){
    // Coordenadas del punto
    var myLatLng = { lat: -34.595986, lng: -58.3724715 };

    // Crear mapa
    var map = new google.maps.Map(document.getElementById('maps'), {
      center: myLatLng,
      zoom: 12
     });

    // Crear marcador
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Mi marcador'
    });
  }