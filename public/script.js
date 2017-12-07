/**
 * Script for init map plugin
 */
$(document).ready(function(){    
    
    /**
     * Variables
     */
	var mapContainer = document.getElementById('js-direction-map'); //обязательно обращаться через натив, jquery тупит
	var mapDirectionsContainer = $('.js-map-navigation');
	var mapDirectionsItems = mapDirectionsContainer.find('a');

	//проверка на наличие елемента mapContainer на странице
	if (mapContainer) {

		//прослушка которая сработает в момент полной закрузки свг
		//сейчас работает для одной области, как начнешь работать решим с тобой как именно будем подсвечивать сектора

		//тебе наверное, надо будет повторить обратную логику при наведении на карту, подсветить нужные области и пункт
		mapContainer.addEventListener("load", function () {
			var svgDocument = mapContainer.contentDocument;
			var svgElement = svgDocument.getElementsByClassName('st0');

			//событие на наведение
			mapDirectionsItems.mouseover(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0 hover');
					}
				});

			});

			//событие на наведение
			mapDirectionsItems.mouseleave(function () {
				var curName = this.getAttribute('data-name');

				$(svgElement).each(function () {
					var mapName = this;
					if (mapName.getAttribute('data-name') == curName) {
						this.setAttribute('class', 'st0');
					}
				});

			});


		}, false);

	}

});