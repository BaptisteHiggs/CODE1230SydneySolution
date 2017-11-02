var reader = new FileReader();
reader.readAsText(files[i]);
      document.onload = readSuccess; 

        function readSuccess(evt) {
          file_contents = evt.target.result;
                  dropped_building = JSON.parse(file_contents);

                map.addSource('dragndrop', {
                    'type': 'geojson',
                      'data': {
                        "type":"FeatureCollection",
                        "features": dropped_building.features
                      }
                  })
        map.addLayer({
                "id": "fromdragndrop",
                "type": "fill-extrusion",
                "source": "dragndrop",
                  'paint': {
                      'fill-extrusion-color' : {
                        'property': 'colour',
                        'type': 'identity'
                      },
                      'fill-extrusion-height' : {
                          'type': 'identity',
                          'property': 'height'
                      },
                      'fill-extrusion-base' : {
                          'type': 'identity',
                          'property': 'base_height'
                      }
                  }
        })

        var coordinates = (dropped_building['features'][0]["geometry"]["coordinates"][0][0])
        map.flyTo({
          center:coordinates

        })
       
        buttonVals = new Set([])

        function layerGetter(feature){
            layerVal = feature["properties"]["layer"]
            buttonVals.add(layerVal) //set
        }

        dropped_building.features.forEach(layerGetter)

        buttonMenu = Array.from(buttonVals) //iterator 


            // Add checkbox and label elements for the layer.
          selectedSet= new Set 
            for (var i in buttonMenu) {
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.id = buttonMenu[i];
            input.checked = true;
            filterGroup.appendChild(input);

            var label = document.createElement('label');
            label.setAttribute('for', buttonMenu[i]);
            label.textContent = buttonMenu[i];
            filterGroup.appendChild(label);
          


          input.addEventListener('change', function(e) {

            id = e.target.checked?e.target.id:0
            if (id==0){
              selectedSet.delete(e.target.id)
            }else{
              selectedSet.add(e.target.id)
            }
            hiddenElements = Array.from(selectedSet)
            console.log(hiddenElements)
          
          hiddenFilters = ["any"]
          hiddenElements.forEach((element) => {
          hiddenFilters.push([
            '==',
            'layer',
            element.toString()
                ]);
          });
          console.log(JSON.stringify(hiddenFilters))
          map.setFilter( 'fromdragndrop', hiddenFilters);
            
});
        }
    
        }

    }


}