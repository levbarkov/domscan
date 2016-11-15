$(document).ready(function(){

	$('#show_phone').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.property__contacts-list-phone-item-link').show();
	});
	
	$("body").on("contextmenu", "img", function(e) {
	  return false;
	});

	var parseInput = function(val) {
	  var floatValue = parseFloat(val);
	  return isNaN(floatValue) ? '' : floatValue;
	}
	
	$('#Estate_square, #Estate_square_living, #Estate_square_kitchen').keyup(function(){
	  var value = $(this).val()+'';
	  if (value[value.length-1] !== '.' || value[value.length-1] !== ',') {
	    $(this).val(parseInput(value));
	  }
	}).focusout(function(){
	  $(this).val(parseInput($(this).val()+''));
	})

	var FF = !(window.mozInnerScreenX == null);
	if(FF) {
	    // is firefox 
	    $('html').addClass('is_firefox');
	} else { 
	    // not firefox 
	}


	var count = 0;

	$('object[type="application/pdf"]').each(function(){
		
		count++;
		
		var urlPDF = $(this).find('embed').attr('src');
		
		$(this).wrap("<div class='embeddedpdf' id='pdf-"+count+"'></div>");
		
		var myPDF = new PDFObject({ 
	
	      url: urlPDF,
          pdfOpenParams: { scrollbars: '1', toolbar: '1', statusbar: '1', navpanes: '1' }
	
	    }).embed('pdf-'+count); 
	})



	$('.staff-show').click(function(e){
		e.preventDefault();
		$(this).removeClass('active');
		$(this).parent().find('.staff-hide').addClass('active');
		var id = $(this).data('id');
		$('.staff__review__'+id).addClass('active');
	});
	$('.staff-hide').click(function(e){
		e.preventDefault();
		$(this).removeClass('active');
		$(this).parent().find('.staff-show').addClass('active');
		var id = $(this).data('id');
		$('.staff__review__'+id).removeClass('active');

	});
	
	$('#show_phone').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.property__contacts-list-phone-item-link').show();

	});
	
	if(!$('#phototab').length)
		$('#maptab').click();
		
		
	$('form input').on('keyup keypress', function(e) {
		return e.which !== 13;
	});
});


$(function () {

	var cityParam = 'Красноярский край, ' + $( "#city option:selected" ).text();
	var streetParam = $( "#address_street" ).val();
	
	$('#address_street, #district').on('keyup keypress blur change',function(){
		streetParam = $('#address_street').val();
		
		if(!streetParam)
			streetParam = $( "#district option:selected" ).text();
			
		console.log(streetParam);
	});

   
	$('#address_street').autocomplete({
        serviceUrl: '/dgis/geoSearchJSON',
       // lookup: countriesArray,
	    minLength: 2,
	    minChars: 2,
		paramName: 'q',
		deferRequestBy: 100,
		params: { searchType: 'byName', searchByType: 'street', city: cityParam}, // Дополнительные параметры
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function(suggestion) {
            streetParam = suggestion.value;
			
			cityParam = $( "#city option:selected" ).text();
			$('#address_street').autocomplete().setOptions({params: { searchType: 'byName', searchByType: 'street', city: cityParam}});
			$('#address_house').autocomplete().setOptions({params: { searchType: 'byName', searchByType: 'house', city: cityParam, street: streetParam}});
        }
    });
	
	$('#address_house').autocomplete({
        serviceUrl: '/dgis/geoSearchJSON',
       // lookup: countriesArray,
	    minLength: 1,
	    minChars: 1,
		paramName: 'q',
		deferRequestBy: 100,
		params: { searchType: 'byName', searchByType: 'house', city: cityParam, street: streetParam}, // Дополнительные параметры
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        }
    });
	
	$('#city, #address_street').on('keyup keypress blur change', function() {
		cityParam = 'Красноярский край, ' + $( "#city option:selected" ).text();
		streetParam = $( "#address_street" ).val();
		$('#address_street').autocomplete().setOptions({
		
        serviceUrl: '/dgis/geoSearchJSON', paramName: 'q', deferRequestBy: 200, minLength: 2, params: {  searchType: 'byName', searchByType: 'street', city: cityParam}}); 
		$('#address_house').autocomplete().setOptions({        serviceUrl: '/dgis/geoSearchJSON',
       // lookup: countriesArray,
		paramName: 'q',
		deferRequestBy: 200, minChars: 1, params: { searchType: 'byName', searchByType: 'house', city: cityParam, street: streetParam}});
	});
});


$(document).ready(function () {
    var map;
    var marker;

    $(".chosen-city").chosen({
        disable_search_threshold: 10,
        width: '200px'
    }).on('change', function () {
        $('.btn-search').click();
    });


    $('.btn-search-disable').click(function () {
        var city = $("#city").children("option").filter(":selected").text();
        var address = $('.input-address_street').val() + ' ' + $('.input-address_house').val();
        var query = city + ', ' + address;
        $('.input-query').val(query);
        SearchByAddress(query);
    });

	if($('#map').hasClass('map-search')) {
        if(DG != null) {
            DG.then(function () {
                var latLong = [$('.input-lat').val(), $('.input-long').val()];
                map = DG.map('map', {
                    center: latLong,
                    zoom: 14
                });

                if (marker) {
                    marker.remove();
                }

                marker = DG.marker(latLong, {
                    draggable: true
                }).addTo(map);

                marker.on('dragend', function (e) {
                    $('.input-lat').val(e.target._latlng.lat.toFixed(5));
                    $('.input-long').val(e.target._latlng.lng.toFixed(5));
                });
            });
        }
    }
    
	
	function setCoorts(latLong) {
		
		
		DG.then(function () {
          //  var latLong = res.geoObjects.get(0).geometry.getCoordinates();
            
            console.log(latLong);

            if (!map) {
                map = DG.map('map', {
                    center: latLong,
                    zoom: 16
                });
            } else {
                map.panTo(latLong);
            }

            if (marker) {
                marker.remove();
            }

            marker = DG.marker(latLong, {
                draggable: true
            }).addTo(map);

            $('.input-lat').val(latLong[0].toFixed(5));
            $('.input-long').val(latLong[1].toFixed(5));

            marker.on('dragend', function (e) {
                $('.input-lat').val(e.target._latlng.lat.toFixed(5));
                $('.input-long').val(e.target._latlng.lng.toFixed(5));
            });
        });
	}

	$('#get-coords').on('click',function(){
		cityParam = 'Красноярский край, ' + $( "#city option:selected" ).text();
		streetParam = $( "#address_street" ).val();
		
		buildingParam = $( "#address_building" ).val();
		
		if(streetParam == '')
			streetParam = $( "#district option:selected" ).text();
		houseParam = $( "#address_house" ).val();
		
		if(buildingParam != '')
			buildingParam = ', строение ' + buildingParam;
			
		string = cityParam+', '+streetParam+', '+houseParam;
		string3 = cityParam+', '+streetParam+', '+houseParam + buildingParam;
		string2 = cityParam+', '+streetParam;
		
		console.log(string);
		
		
		$.getJSON( "/dgis/geoSearchCoordinates", {
		   q: string3
		}).done(function(result) {
		
			$('#dgisfound').html('В дубльгис найдено по адресу: '+string3);
			if(result.error == true) {
				console.log(result.text);
				$.getJSON( "/dgis/geoSearchCoordinates", {
				   q: string
				}).done(function(result) {			  
					$('#dgisfound').html('В дубльгис найдено по адресу: '+string);
				  	if(result.error == true) {
					  	console.log(result.text);
						$.getJSON( "/dgis/geoSearchCoordinates", {
						   q: string2
						}).done(function(result) {
					  		$('#dgisfound').html('В дубльгис найдено по адресу: '+string2);
										
							if(result.error != true) {
								latLong = [parseFloat(result.long), parseFloat(result.lat)];
								setCoorts(latLong);
							} else {								
								console.log(result.text);
								$.getJSON( "/dgis/geoSearchCoordinates", {
								   q: cityParam
								}).done(function(result) {
									$('#dgisfound').html('В дубльгис найдено по адресу: '+cityParam);
									if(result.error != true) {
										latLong = [parseFloat(result.long), parseFloat(result.lat)];
										setCoorts(latLong);
									} else {
										console.log(result.text);
										$('#dgisfound').html('Ничего не найдено по указанному адресу');
									}
								});
							}
						 
					  
						  
						});
					} else {
						latLong = [parseFloat(result.long), parseFloat(result.lat)];
						setCoorts(latLong);
					}
				  
				});
			} else {
				latLong = [parseFloat(result.long), parseFloat(result.lat)];
				setCoorts(latLong);
			}
		});
	});


    function SearchByAddress(address) {
        if(ymaps != null) {
            ymaps.ready(function () {
                var Geocoder = ymaps.geocode(address, {
                    results: 1
                });

                Geocoder.then(
                    function (res) {
                        console.log(res.geoObjects.get(0).geometry);
                        DG.then(function () {
                            var latLong = res.geoObjects.get(0).geometry.getCoordinates();
                            
                            console.log(latLong);

                            if (!map) {
                                map = DG.map('map', {
                                    center: latLong,
                                    zoom: 16
                                });
                            } else {
                                map.panTo(latLong);
                            }

                            if (marker) {
                                marker.remove();
                            }

                            marker = DG.marker(latLong, {
                                draggable: true
                            }).addTo(map);

                            $('.input-lat').val(latLong[0].toFixed(5));
                            $('.input-long').val(latLong[1].toFixed(5));

                            marker.on('dragend', function (e) {
                                $('.input-lat').val(e.target._latlng.lat.toFixed(5));
                                $('.input-long').val(e.target._latlng.lng.toFixed(5));
                            });
                        });
                    },
                    function () {
                        console.log('Error in GetCoordinates');
                    }
                );
            });
        }
    }
});
