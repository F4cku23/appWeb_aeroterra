window.initMap=function(){
    // Coordenadas del punto
    var myLatLng = { lat: -34.595986, lng: -58.3724715 };

    // Crear mapa
    var map = new google.maps.Map(document.getElementById('maps'), {
      center: myLatLng,
      zoom: 12
     });

     const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h2 id="firstHeading" class="firstHeading">AEROTERRA S.A.</h2>' +
    '<div id="bodyContent">' +
    "<p>Av. Eduardo Madero 1020, C1001 CABA</p>" +
    "<p>-34.595986, -58.3724715</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "aeroterra",
  });
  
    // Crear marcador
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'AEROTERRA S.A.'
    });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
    
    
};