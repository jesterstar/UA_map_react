/**
 * Script for init map plugin
 */
$(document).ready(function(){
    
    
    /**
     * Variables
     */
	var mapContainer = document.getElementById('js-direction-map');
	var mapDirectionsContainer = $('.js-map-navigation');
	var mapDirectionsItems = mapDirectionsContainer.find('a');

	if (mapContainer) {

		mapContainer.addEventListener("load", function () {
			var svgDocument = mapContainer.contentDocument;
			var svgElement = svgDocument.getElementsByClassName('st0');

            console.log(svgDocument);
			mapDirectionsItems.mouseover(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0 hover')
					}
				});

			});

			mapDirectionsItems.mouseleave(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0')
					}
				});

			});


		}, false);

	}

});