    var locations = [
        
        ['Ikeja', 6.605874,3.349149, ],
        ['Lekki Phase 1',6.458985, 3.601521],
        ['Surulere',6.500000, 3.350000],
        ['Ikoyi',6.454812, 3.434691],
        ['Victoria Island',6.429334740422412, 3.420528142295544],
        ['Yaba', 6.517791, 3.382686 ]
        
    
    ];
    
    
    
    var map = new google.maps.Map(document.getElementById('map'), {
        mapId:'6cda519ed53d0689',
        zoom: 11,
        center: new google.maps.LatLng(6.5243793 ,3.379205700000057),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        
        

    });
    
    
    const icon = {
    url: "../js/mymarker.png", // url
    scaledSize: new google.maps.Size(55, 55), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    
    
    };
    
    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map,
        icon:icon,
        
            
        });
        
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
        })(marker, i));
    }