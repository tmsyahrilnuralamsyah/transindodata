let tglHariIni = document.querySelector('#tglHariIni').value;
let tglMingguLalu = document.querySelector('#tglMingguLalu').value;
let tglMingguLalu2 = document.querySelector('#tglMingguLalu2').value;
let tglMingguLalu3 = document.querySelector('#tglMingguLalu3').value;

let totalCapexMingguIni = document.querySelector('#totalCapexMingguIni').value;
let totalCapexMingguLalu = document.querySelector('#totalCapexMingguLalu').value;
let totalCapexMingguLalu2 = document.querySelector('#totalCapexMingguLalu2').value;
let totalCapexMingguLalu3 = document.querySelector('#totalCapexMingguLalu3').value;

var barchart = {
	chart: {
		type: 'bar',
		height: 300
	},
	series: [{
		name: 'Nilai:',
		data: [totalCapexMingguLalu3, totalCapexMingguLalu2, totalCapexMingguLalu, totalCapexMingguIni]
	}],
	colors: '#435ebe',
	xaxis: {
		categories: [tglMingguLalu3, tglMingguLalu2, tglMingguLalu, tglHariIni],
		labels: {
			formatter: function (value) {
				const date = new Date(value);
				const options = { year: 'numeric', month: 'long', day: 'numeric' };
				const formattedDate = date.toLocaleString('id-ID', options);

				if (formattedDate.length > 15) {
					var words = value.split(' ');
					var lines = [];
					var line = '';
					for (var i = 0; i < words.length; i++) {
						if (line.length + words[i].length <= 15) {
							line += words[i] + ' ';
						} else {
							lines.push(line.trim());
							line = words[i] + ' ';
						}
					}
					lines.push(line.trim());
					return lines;
				}
				return [value];
			}
		}
	},
	yaxis: {
		show: false,
	},
	dataLabels: {
		enabled: true,
		formatter: function (value) {
			return value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
		}
	},
	plotOptions: {
		bar: {
			dataLabels: {
				position: 'top',
			}
		}
	},
	tooltip: {
		y: {
			formatter: function (value) {
				return value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
			}
		}
	}
}

var barchart = new ApexCharts(document.querySelector("#barchart"), barchart);

barchart.render();