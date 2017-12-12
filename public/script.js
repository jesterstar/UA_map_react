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
	//проверка на наличие елемента mapContainer на странице
	if (mapContainer) {
		mapContainer.addEventListener("load", function () {
			var svgDocument = mapContainer.contentDocument;
			var svgElement = svgDocument.getElementsByClassName('st0');
			var svgPin = svgDocument.getElementsByClassName('st2');

			var popup = document.getElementsByClassName('popup-window');
			var triangle = document.getElementsByClassName('triangle');
			
			$(document).mouseup(function (e) {
				var popupActive = $(popup).find('.popup-window');
				if (popupActive.has(e.target).length === 0) {
					popupActive.css({
						'display': 'none',
					});
				};
				var mapDirectionsItemClicked = $('.js-map-navigation').find('a.hover');
				if (mapDirectionsItemClicked.has(e.target).length === 0) {
					mapDirectionsItemClicked.removeClass('hover');
					$(svgElement).each(function () {
						$(this).removeClass('clicked');
					});
					//pin
					$(svgPin).each(function () {
						$(this).removeClass('clicked');
					});
				}
			});
			//снятие эффектов при клике на область документа
			$(document).click(function () {
				$(popup).css({
					'display': 'none',
				});
				$(svgPin).removeClass('on');
				$(svgElement).each(function () {
					this.setAttribute('class', 'st0');
				});
				$(mapDirectionsItems).each(function () {
					this.setAttribute('class', '');
				});
			});
			$(svgDocument).click(function () {
				$(popup).css({
					'display': 'none',
				});
				$(svgPin).removeClass('on');
				$(svgElement).each(function () {
					this.setAttribute('class', 'st0');
				});
				$(mapDirectionsItems).each(function () {
					this.setAttribute('class', '');
				});
			});
			//событие onclick на элемент списка
			$(mapDirectionsItems).each(function () {
				var curName = this.getAttribute('data-name');
				$(this).on('click', function (e) {
					e.stopPropagation();
					e.preventDefault();
					$(mapDirectionsItems).each(function () {
						$(this).addClass('');
						$(svgPin).removeClass('on');
						$(popup).css({
							'display': 'none',
						});
					});
					$(this).addClass('hover');
					$(svgElement).each(function () {
						var mapName = this;
						mapName.setAttribute('class', 'st0');
						if (mapName.getAttribute('data-name') == curName) {
							mapName.setAttribute('class', 'st0 clicked');
						}
					});
					$(svgPin).removeClass('on');
				});
				//событие на наведение на элемент списка
				$(this).on('mouseover', function (e) {
					e.stopPropagation();
					e.preventDefault();
					var curName = this.getAttribute('data-name');
					$(svgElement).each(function () {
						var mapName = this;
						if (mapName.getAttribute('data-name') == curName && !$(mapName).hasClass('clicked')) {
							$(this).addClass('hover');
						}
					});
					//pin
					$(svgPin).each(function () {
						var pinName = this;
						if (pinName.getAttribute('data-name') == curName) {
							$(this).addClass('hover');
						}
					});
				});
				//выход с наведения
				$(this).on('mouseleave', function (e) {
					e.stopPropagation();
					e.preventDefault();
					$(svgElement).each(function () {
						var mapName = this;
						if (mapName.getAttribute('data-name') == curName && !$(mapName).hasClass('clicked')) {
							$(this).removeClass('hover');
						}
					});
					//pin
					$(svgPin).each(function () {
						var pinName = this;
						if (pinName.getAttribute('data-name') == curName) {
							$(this).removeClass('hover');
						}
					});
				});
			});
			//подсветка пунктов на наведение на карту
			$(svgElement).mouseover(function () {
				var curName = this.getAttribute('data-name');
				$(mapDirectionsItems).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).addClass('hover');
					}
				});
				$(svgElement).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).addClass('hover');
					}
				});
				$(svgPin).each(function () {
					var pinName = this;
					if (pinName.getAttribute('data-name') == curName) {
						$(this).addClass('hover');
					}
				});
			});
			//подсветка пунктов на наведение на карту. выход
			$(svgElement).mouseleave(function () {
				var curName = this.getAttribute('data-name');
				$(mapDirectionsItems).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).removeClass('hover');
					}
				});
				$(svgElement).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).removeClass('hover');
					}
				});
				$(svgPin).each(function () {
					var pinName = this;
					if (pinName.getAttribute('data-name') == curName) {
						$(this).removeClass('hover');
					}
				});
			});
			//событие при клике на пин
			$(svgPin).on('click', function (e) {
				$(svgPin).each(function(){
					$(svgPin).removeClass('on');
				});
				//появление попапа при клике на пин
				var offsetPin = $(this).offset();
				$(this).addClass('on');
				var curName = this.getAttribute('data-name');
				e.stopPropagation();
				e.preventDefault();
				$(popup).css({
					'display': 'block',
					'left': offsetPin.left - $(popup).width() / 2 + $(triangle).width() - $(svgPin).width() / 2,
					'top': offsetPin.top - $(popup).height() - $(triangle).height() / 1.5,
				});
				//выделение региона на карте при клике на пин
				$(svgElement).each(function () {
					var mapName = this;
					mapName.setAttribute('class', 'st0');
					if (mapName.getAttribute('data-name') == curName) {
						mapName.setAttribute('class', 'st0 clicked');
					}
				});
				//выделение элемента списка при клике на пин
				$(mapDirectionsItems).each(function () {
					var itemName = this;
					itemName.setAttribute('class', '');
					if (itemName.getAttribute('data-name') == curName) {
						itemName.setAttribute('class', 'clicked');
					}
				});
			});
			//подсветка пунктов на наведение на пин
			$(svgPin).mouseover(function () {
				var curName = this.getAttribute('data-name');
				$(this).addClass('hover');
				$(mapDirectionsItems).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).addClass('hover');
					}
				});
				$(svgElement).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).addClass('hover');
					}
				});
			});
			//подсветка пунктов на наведение на пин. выход
			$(svgPin).mouseleave(function () {
				var curName = this.getAttribute('data-name');
				if (!$(this).hasClass('on')) {
					$(this).removeClass('hover');
					$(mapDirectionsItems).each(function () {
						var itemName = this;
						if (itemName.getAttribute('data-name') == curName) {
							$(this).removeClass('hover');
						}
					});
				}
				$(svgElement).each(function () {
					var itemName = this;
					if (itemName.getAttribute('data-name') == curName) {
						$(this).removeClass('hover');
					}
				});
			});
		}, false);
	}
});
