/**
 * Script for init map plugin
 */
$(document).ready(function () {

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

			mapDirectionsItems.mouseover(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0 hover');
					}
				});

				$(mapDirectionsItems).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'active');
					}
				});

			});

			mapDirectionsItems.mouseleave(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0');
					}
				});

				$(mapDirectionsItems).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', '');
					}
				});

			});

			$(svgElement).mouseover(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0 hover');
					}
				});

				$(mapDirectionsItems).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'active');
					}
				});

			});

			$(svgElement).mouseleave(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0');
					}
				});

				$(mapDirectionsItems).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', '');
					}
				});

			});

		}, false);

	}

});