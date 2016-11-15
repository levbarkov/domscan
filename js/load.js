(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.components = [];

/**
 * On load init
 */
$(document).ready(function () {

    $('body').backstretch("/img/main-bg.jpg");

    $('.content').css('visibility', 'visible');

    $('.loader').css('display', 'none');

	if($('.search__btn-filter-more').length) {
	    $('.search__btn-filter-more').click(function () {
	        var next = $(this).next();
	        var nextDisplay = next.css('display');
	
	        if (nextDisplay == 'block') {
	            next.css('display', 'none');
	        } else {
	            next.css('display', 'block');
	        }
	    });
    }

    $("#accordion").accordion({
        heightStyle: "content",
        icons: false,
        collapsible: true,
        animate: 150
    });

    $("#accordion-wrapper").mCustomScrollbar({
        scrollInertia: 0
    });

    window.favorite = function favorite() {
        $('.item-favorite').click(function () {
            var $element = $(this);
            var id = $element.data('id');
            var value = !$element.data('value');
            var answer = changeFavoriteStatus(id, value);

            answer.done(function (data) {
                console.log(data);

                if (data.id === id && data.value === value) {
                    $element.data('value', data.value);
                    if ($element.hasClass('active')) {
                        $element.removeClass('active');

                    } else {
                        $element.addClass('active');
                    }
                }
            });
        });

        function changeFavoriteStatus(id, value) {
            var request = $.ajax({
                url: "http://real-estate-dev.bureauit.com/site/favorite/",
                type: "GET",
                dataType: "json",
                data: {
                    id: id,
                    value: value,
                    format: 'json'
                }
            });

            return request;
        }
    };

    window.popup = function popup() {
        var popupList = [
            {
                selector: ".popup-favorite",
                text: "В избранном можно сравнивать объявления",
                position: 'top left'
            },
            {
                selector: ".popup-mother",
                text: "Материнский капитал",
                position: 'top right'
            },
            {
                selector: ".popup-ipo",
                text: "В ипотеку",
                position: 'top right'
            },
            {
                selector: ".popup-rasr",
                text: "В рассрочку",
                position: 'top right'
            }
        ];

        $.each(popupList, function (i, popup) {
            $(popup.selector).each(function () {
                var a = new Drop({
                    target: this,
                    content: popup.text,
                    position: popup.position,
                    openOn: 'hover',
                    classes: 'drop-theme-arrows-bounce drop-hero'
                });
            });
        });

        $('.drop-target').click(function (e) {
            var href = $(this).attr('href');
            if (href) window.location.href = href;
            e.preventDefault();

            return false;
        });
    };

    window.mapItem = function() {
        $('.search__map-list-item').click(function() {
            var link = $('.search__map-list-item-address', this);
            window.location.href = link.attr('href');
        });
    };

    window.mapItem();

    (function () {
        var $citySelect = $(".chosen-select-city");
        var $distSelect = $(".chosen-select-dist");

        $distSelect.chosen({
            disable_search_threshold: 10,
            width: "100%",
            placeholder_text_single: "Выберите Район"
        });

        $citySelect.chosen({
            disable_search_threshold: 10,
            width: "100%",
            placeholder_text_single: "Выберите город"
        }).on('change', function (evt, params) {
            loadDist(params.selected);
        });

        function loadDist(cityId) {
            var result = $.ajax({
                url: "http://real-estate-dev.bureauit.com/site/districts",
                type: "GET",
                dataType: "json",
                data: {
                    city: cityId
                }
            });

            result.done(function(data) {
                applyDist(data);
            });

            return result;
        }

        function applyDist(data) {
            $distSelect.empty();
            $.each(data.districts, function (index, item) {
                $distSelect.append('<option  value="' + item.id + '">' + item.name + '</option>');
            });
            $distSelect.trigger('chosen:updated');
        }

//        loadDist($citySelect.chosen().val());
    })();


    (function () {
        $('.mymodal').each(function () {
            if ($(this).hasClass('active-load')) {
                $(this).addClass('active');

                //----
                var $modalWindow = $('.mymodal__window', $(this));
                var child = $modalWindow.children();
                var childHeight = child.outerHeight(true);
                var childWidth = child.outerWidth(true);

                $modalWindow.height(childHeight).width(childWidth);

                function close(element) {
                    $(element).closest('.mymodal').removeClass('active');
                    $('.content').removeClass('blur');
                }

                $('.mymodal').click(function (e) {
                    close(this);
                    e.stopPropagation();
                }).on({
                    'mousewheel': function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });

                $modalWindow.click(function (e) {
                    e.stopPropagation();
                });

                $('.mymodal__close').click(function (e) {
                    close(this);
                    e.preventDefault();
                    e.stopPropagation();
                });
            }
        });
    })();




    $('.show-modal').click(function (e) {
        var id = $(this).attr('href');
        if (id) $(id).addClass('active');
//        $('.content').addClass('blur');

        //----
        var $modalWindow = $('.mymodal__window', id);
        var child = $modalWindow.children();
        var childHeight = child.outerHeight(true);
        var childWidth = child.outerWidth(true);

        $modalWindow.height(childHeight).width(childWidth);

        function close(element) {
            $(element).closest('.mymodal').removeClass('active');
            $('.content').removeClass('blur');
        }

        $('.mymodal').click(function (e) {
            close(this);
            e.stopPropagation();
        }).on({
            'mousewheel': function (e) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $modalWindow.click(function (e) {
            e.stopPropagation();
        });

        $('.mymodal__close').click(function (e) {
            close(this);
            e.preventDefault();
            e.stopPropagation();
        });
        //----
        e.preventDefault();
        e.stopPropagation();
    });

    $('.form__btn').click(function (e) {
        $('.form__btn').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('href');
        if (id) {
            $('.form__block').removeClass('active');
            $(id).addClass('active');
        }


        e.preventDefault();
        e.stopPropagation();
    });

    (function () {
        var $cols = $('.search__map-catalog-row:first td', '.search__map-catalog-wrapper');
        var $headers = $('.search__map-catalog-header-field', '.search__map-catalog-wrapper');

        $.each($headers, function (index, item) {
            var width = $($cols[index]).width();

            $(item).width(width);
        });
    })();

    $('.fotorama').fotorama({
        allowfullscreen: true,
        thumbwidth: 100,
        thumbheight: 70,
        loop: true,
        thumbborderwidth: 3,
        thumbmargin: 10
    });

    $('.faq__spoiler-title').click(function () {
        if ($(this).hasClass('active')) {
            $('.faq__spoiler-title').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.faq__spoiler-title').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.faq__spoiler-item-hide').click(function () {
        $('.faq__spoiler-title').removeClass('active');
    });

    $(".mortgages__form-dropdown").chosen({
        disable_search_threshold: 10,
        width: '220px',
        height: "100%"
    });

    $(".staff__filter-competence-dropdown").chosen({
        disable_search_threshold: 10,
        width: '28%',
        height: "30px"
    });

    $(".add-page__dropdown").chosen({
        disable_search_threshold: 10,
        width: '35%',
        height: "30px"
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuY29tcG9uZW50cyA9IFtdO1xuXG4vKipcbiAqIE9uIGxvYWQgaW5pdFxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAkKCdib2R5JykuYmFja3N0cmV0Y2goXCIvaW1nL21haW4tYmcuanBnXCIpO1xuXG4gICAgJCgnLmNvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG4gICAgJCgnLmxvYWRlcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cbiAgICAkKCcuc2VhcmNoX19idG4tZmlsdGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0ID0gJCh0aGlzKS5uZXh0KCk7XG4gICAgICAgIHZhciBuZXh0RGlzcGxheSA9IG5leHQuY3NzKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYgKG5leHREaXNwbGF5ID09ICdibG9jaycpIHtcbiAgICAgICAgICAgIG5leHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjYWNjb3JkaW9uXCIpLmFjY29yZGlvbih7XG4gICAgICAgIGhlaWdodFN0eWxlOiBcImNvbnRlbnRcIixcbiAgICAgICAgaWNvbnM6IGZhbHNlLFxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgYW5pbWF0ZTogMTUwXG4gICAgfSk7XG5cbiAgICAkKFwiI2FjY29yZGlvbi13cmFwcGVyXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuICAgICAgICBzY3JvbGxJbmVydGlhOiAwXG4gICAgfSk7XG5cbiAgICB3aW5kb3cuZmF2b3JpdGUgPSBmdW5jdGlvbiBmYXZvcml0ZSgpIHtcbiAgICAgICAgJCgnLml0ZW0tZmF2b3JpdGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlkID0gJGVsZW1lbnQuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICEkZWxlbWVudC5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgdmFyIGFuc3dlciA9IGNoYW5nZUZhdm9yaXRlU3RhdHVzKGlkLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGFuc3dlci5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCA9PT0gaWQgJiYgZGF0YS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuZGF0YSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlRmF2b3JpdGVTdGF0dXMoaWQsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9yZWFsLWVzdGF0ZS1kZXYuYnVyZWF1aXQuY29tL3NpdGUvZmF2b3JpdGUvXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LnBvcHVwID0gZnVuY3Rpb24gcG9wdXAoKSB7XG4gICAgICAgIHZhciBwb3B1cExpc3QgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiLnBvcHVwLWZhdm9yaXRlXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLQkiDQuNC30LHRgNCw0L3QvdC+0Lwg0LzQvtC20L3QviDRgdGA0LDQstC90LjQstCw0YLRjCDQvtCx0YrRj9Cy0LvQtdC90LjRj1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wIGxlZnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIi5wb3B1cC1tb3RoZXJcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcItCc0LDRgtC10YDQuNC90YHQutC40Lkg0LrQsNC/0LjRgtCw0LtcIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCByaWdodCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiLnBvcHVwLWlwb1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwi0JIg0LjQv9C+0YLQtdC60YNcIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCByaWdodCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiLnBvcHVwLXJhc3JcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcItCSINGA0LDRgdGB0YDQvtGH0LrRg1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wIHJpZ2h0J1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgICQuZWFjaChwb3B1cExpc3QsIGZ1bmN0aW9uIChpLCBwb3B1cCkge1xuICAgICAgICAgICAgJChwb3B1cC5zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgRHJvcCh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogcG9wdXAudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvcHVwLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBvcGVuT246ICdob3ZlcicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdkcm9wLXRoZW1lLWFycm93cy1ib3VuY2UgZHJvcC1oZXJvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5kcm9wLXRhcmdldCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgaWYgKGhyZWYpIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93Lm1hcEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnNlYXJjaF9fbWFwLWxpc3QtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxpbmsgPSAkKCcuc2VhcmNoX19tYXAtbGlzdC1pdGVtLWFkZHJlc3MnLCB0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cubWFwSXRlbSgpO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRjaXR5U2VsZWN0ID0gJChcIi5jaG9zZW4tc2VsZWN0LWNpdHlcIik7XG4gICAgICAgIHZhciAkZGlzdFNlbGVjdCA9ICQoXCIuY2hvc2VuLXNlbGVjdC1kaXN0XCIpO1xuXG4gICAgICAgICRkaXN0U2VsZWN0LmNob3Nlbih7XG4gICAgICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6IFwi0JLRi9Cx0LXRgNC40YLQtSDQoNCw0LnQvtC9XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNpdHlTZWxlY3QuY2hvc2VuKHtcbiAgICAgICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTAsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogXCLQktGL0LHQtdGA0LjRgtC1INCz0L7RgNC+0LRcIlxuICAgICAgICB9KS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2dCwgcGFyYW1zKSB7XG4gICAgICAgICAgICBsb2FkRGlzdChwYXJhbXMuc2VsZWN0ZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkRGlzdChjaXR5SWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vcmVhbC1lc3RhdGUtZGV2LmJ1cmVhdWl0LmNvbS9zaXRlL2Rpc3RyaWN0c1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogY2l0eUlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhcHBseURpc3QoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RGlzdChkYXRhKSB7XG4gICAgICAgICAgICAkZGlzdFNlbGVjdC5lbXB0eSgpO1xuICAgICAgICAgICAgJC5lYWNoKGRhdGEuZGlzdHJpY3RzLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAkZGlzdFNlbGVjdC5hcHBlbmQoJzxvcHRpb24gIHZhbHVlPVwiJyArIGl0ZW0uaWQgKyAnXCI+JyArIGl0ZW0ubmFtZSArICc8L29wdGlvbj4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGRpc3RTZWxlY3QudHJpZ2dlcignY2hvc2VuOnVwZGF0ZWQnKTtcbiAgICAgICAgfVxuXG4vLyAgICAgICAgbG9hZERpc3QoJGNpdHlTZWxlY3QuY2hvc2VuKCkudmFsKCkpO1xuICAgIH0pKCk7XG5cblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5teW1vZGFsJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlLWxvYWQnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8tLS0tXG4gICAgICAgICAgICAgICAgdmFyICRtb2RhbFdpbmRvdyA9ICQoJy5teW1vZGFsX193aW5kb3cnLCAkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSAkbW9kYWxXaW5kb3cuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRIZWlnaHQgPSBjaGlsZC5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRXaWR0aCA9IGNoaWxkLm91dGVyV2lkdGgodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAkbW9kYWxXaW5kb3cuaGVpZ2h0KGNoaWxkSGVpZ2h0KS53aWR0aChjaGlsZFdpZHRoKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5jbG9zZXN0KCcubXltb2RhbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYmx1cicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoJy5teW1vZGFsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSkub24oe1xuICAgICAgICAgICAgICAgICAgICAnbW91c2V3aGVlbCc6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkbW9kYWxXaW5kb3cuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJy5teW1vZGFsX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cblxuXG5cbiAgICAkKCcuc2hvdy1tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICBpZiAoaWQpICQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbi8vICAgICAgICAkKCcuY29udGVudCcpLmFkZENsYXNzKCdibHVyJyk7XG5cbiAgICAgICAgLy8tLS0tXG4gICAgICAgIHZhciAkbW9kYWxXaW5kb3cgPSAkKCcubXltb2RhbF9fd2luZG93JywgaWQpO1xuICAgICAgICB2YXIgY2hpbGQgPSAkbW9kYWxXaW5kb3cuY2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGNoaWxkSGVpZ2h0ID0gY2hpbGQub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIHZhciBjaGlsZFdpZHRoID0gY2hpbGQub3V0ZXJXaWR0aCh0cnVlKTtcblxuICAgICAgICAkbW9kYWxXaW5kb3cuaGVpZ2h0KGNoaWxkSGVpZ2h0KS53aWR0aChjaGlsZFdpZHRoKTtcblxuICAgICAgICBmdW5jdGlvbiBjbG9zZShlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5teW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYmx1cicpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLm15bW9kYWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY2xvc2UodGhpcyk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KS5vbih7XG4gICAgICAgICAgICAnbW91c2V3aGVlbCc6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRtb2RhbFdpbmRvdy5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLm15bW9kYWxfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNsb3NlKHRoaXMpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vLS0tLVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZm9ybV9fYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCgnLmZvcm1fX2J0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICQoJy5mb3JtX19ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRjb2xzID0gJCgnLnNlYXJjaF9fbWFwLWNhdGFsb2ctcm93OmZpcnN0IHRkJywgJy5zZWFyY2hfX21hcC1jYXRhbG9nLXdyYXBwZXInKTtcbiAgICAgICAgdmFyICRoZWFkZXJzID0gJCgnLnNlYXJjaF9fbWFwLWNhdGFsb2ctaGVhZGVyLWZpZWxkJywgJy5zZWFyY2hfX21hcC1jYXRhbG9nLXdyYXBwZXInKTtcblxuICAgICAgICAkLmVhY2goJGhlYWRlcnMsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gJCgkY29sc1tpbmRleF0pLndpZHRoKCk7XG5cbiAgICAgICAgICAgICQoaXRlbSkud2lkdGgod2lkdGgpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgJCgnLmZvdG9yYW1hJykuZm90b3JhbWEoe1xuICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IHRydWUsXG4gICAgICAgIHRodW1id2lkdGg6IDEwMCxcbiAgICAgICAgdGh1bWJoZWlnaHQ6IDcwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICB0aHVtYmJvcmRlcndpZHRoOiAzLFxuICAgICAgICB0aHVtYm1hcmdpbjogMTBcbiAgICB9KTtcblxuICAgICQoJy5mYXFfX3Nwb2lsZXItdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgJCgnLmZhcV9fc3BvaWxlci10aXRsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmZhcV9fc3BvaWxlci10aXRsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZmFxX19zcG9pbGVyLWl0ZW0taGlkZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmZhcV9fc3BvaWxlci10aXRsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoXCIubW9ydGdhZ2VzX19mb3JtLWRyb3Bkb3duXCIpLmNob3Nlbih7XG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTAsXG4gICAgICAgIHdpZHRoOiAnMjIwcHgnLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfSk7XG5cbiAgICAkKFwiLnN0YWZmX19maWx0ZXItY29tcGV0ZW5jZS1kcm9wZG93blwiKS5jaG9zZW4oe1xuICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDEwLFxuICAgICAgICB3aWR0aDogJzI4JScsXG4gICAgICAgIGhlaWdodDogXCIzMHB4XCJcbiAgICB9KTtcblxuICAgICQoXCIuYWRkLXBhZ2VfX2Ryb3Bkb3duXCIpLmNob3Nlbih7XG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTAsXG4gICAgICAgIHdpZHRoOiAnMzUlJyxcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIlxuICAgIH0pO1xufSk7XG4iXX0=
