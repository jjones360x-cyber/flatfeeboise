// JavaScript Document
$(document).ready(function() {
	  
		var salesPrice_number = 600000;
		var agentCommissionAmount_number = salesPrice_number * 0.06;
		var flatFee_number = 3477;
		var savings_number = agentCommissionAmount_number - flatFee_number;

		$( "#salesPriceSlider" ).slider({
			animate: "slow",
			min: 400000,
			max: 1500000,
			value:600000,
			step: 10000,
			   
			slide: function( event, ui ) {
				salesPrice_number = ui.value;
				agentCommissionAmount_number = salesPrice_number * 0.06;
				savings_number = agentCommissionAmount_number - flatFee_number;

				$( "#salesPrice" ).text( formatCurrency(salesPrice_number) );
				$( "#commission" ).text( formatCurrency(agentCommissionAmount_number) );
				$( "#savings" ).text ( formatCurrency(savings_number) );
				
				
				var delay = function() {
					var handleIndex = $(ui.handle).data('index.uiSliderHandle');
					var label = handleIndex == 0 ? '#pip' : '#pip';
					$(label).html('$' + ui.value).position({
						my: 'left top',
						at: 'right bottom',
						of: ui.handle,
						offset: "0, 0"
					});
				};
				
				// wait for the ui.handle to set its position
				setTimeout(delay, 5);					
			}			
		})
		
		$( "#salesPriceSlider" ).css('background', '#0C0');

				
		function formatCurrency(x) {
			return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}		
	});
