/*
 * Eric Sullivan
 * 04/20/2020
 * Function for graphing sensor data.
 * Based on Sheaffs framework code.
 */

// Colors for graphs
var white = "rgba(255, 255, 255, 255)";
var hp = "rgba(255, 0, 128, 255)";

// Function that plots sensor data 
function plot(results, canvas, data, title, ylabel, color) {
	var ctx = document.getElementById(canvas).getContext('2d');
	var chart = new Chart(ctx, {
		type: 'line',

		data: {
			datasets: [{
				label: ylabel,
				borderColor: color,
				borderwidth: 1, 
				data: results[data]
			}],
		},
	
		options: {
			responsive: false,
			responsiveAnimationDuration:0,
			animation: {
				duration: 0,
			},
			hover: {
				animationDuration: 400,
			},
			scales: {
				xAxes: [{
					type: "time",
					display: true,
					scaleLabel: {
                        fontColor: hp,
                        fontSize: 14,
						display: true,
						labelString: "Date & Time",
					},
					gridLines: {
						tickMarkLength: 2,
						color: white,
						borderDash: [4, 8],
					},
				}],
				yAxes: [{
					type: 'linear',
					display: true,
					scaleLabel: {
                        fontColor: hp,
                        fontSize: 14,
						display: true,
						labelString: ylabel,
					},
					gridLines: {
						tickMarkLength: 2,
						zeroLineColor: white,
						zeroLineBorderDash: [4, 8],
						color: white,
						borderDash: [4, 8],
					},
				}]
			},
            legend: {
                display: false,
                position: "top",
                labels: {
                    boxwidth: 1,
                },
            },
			tooltips: {
				enabled: true,
			},
			title: {
                fontColor: hp,
                fontSize: 18,
				display: true,
			    text: title,
			}
		}	
	});
}
				
