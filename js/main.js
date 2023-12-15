import datosNav from './json/datos.json' assert {type:'json'};
console.log(typeof(datosNav.aeroterra.position[0]));


window.initMap=function(){
 
    // Coordenadas del punto
    var myLatLng = { lat: datosNav.aeroterra.position[0], lng: datosNav.aeroterra.position[1]};
    // Creando mapa
    var map = new google.maps.Map(document.getElementById('maps'), {
      center: myLatLng,
      zoom: 10
     });

     const contentString =
     `
     <div id="content">
     <div id="siteNotice">
     </div>
     <h2 id="firstHeading" class="firstHeading">${datosNav.aeroterra.descripcion}</h2> 
     <div id="bodyContent">
     <p>${datosNav.aeroterra.direccion}</p> 
     <p>${datosNav.aeroterra.categoria}</p> 
     </div>
     </div>`
     ;

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: datosNav.aeroterra.descripcion,
  });
  
    // Creando marcador
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: datosNav.aeroterra.descripcion
    });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
    
};