google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var val1 = parseFloat(document.getElementById("DSF_changetalk").innerText)*100;
var val2 = parseFloat(document.getElementById("DSF_sustain").innerText)*100;
var val3 = parseFloat(document.getElementById("DSF_neutral").innerText)*100;
var val4 = parseFloat(document.getElementById("RNN_changetalk").innerText)*100;
var val5 = parseFloat(document.getElementById("RNN_sustain").innerText)*100;
var val6 = parseFloat(document.getElementById("RNN_neutral").innerText)*100;   
    
var data = google.visualization.arrayToDataTable([
  ['MISC Codes', 'DSF', 'RNN'],
  ['Change Talk', val1, val4],
  ['Sustain Talk', val2, val5],
  ['Follow/Neutral', val3, val6]
]);

var options = {
  chart: {
    title: 'Client Talk Turn',
  },
    vAxis: {
        viewWindowMode: 'explicit', 
        viewWindow: {
            max: 100, 
            min: 0}
    },
    width: 600,
    height: 500,
    //chartArea: {
    //              width: '60%',
    //              height: '60%'
    //          }
};

var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
var val7 = parseFloat(document.getElementById("DSF_question_open").innerText)*100;
var val8 = parseFloat(document.getElementById("DSF_question_closed").innerText)*100;
var val9 = parseFloat(document.getElementById("DSF_reflection_complex").innerText)*100;
var val10 = parseFloat(document.getElementById("DSF_reflection_simple").innerText)*100;
var val11 = parseFloat(document.getElementById("DSF_affirm").innerText)*100;
var val12 = parseFloat(document.getElementById("DSF_advise_wp").innerText)*100;
var val13 = parseFloat(document.getElementById("DSF_Advise_wop").innerText)*100;
var val14 = parseFloat(document.getElementById("DSF_confront").innerText)*100;
var val15 = parseFloat(document.getElementById("DSF_givinginfo").innerText)*100;
var val16 = parseFloat(document.getElementById("DSF_facilitate").innerText)*100;
var val17 = parseFloat(document.getElementById("DSF_structure").innerText)*100;
var val18 = parseFloat(document.getElementById("DSF_na_other").innerText)*100;
    
var val19 = parseFloat(document.getElementById("RNN_question_open").innerText)*100;
var val20 = parseFloat(document.getElementById("RNN_question_closed").innerText)*100;
var val21 = parseFloat(document.getElementById("RNN_reflection_complex").innerText)*100;
var val22 = parseFloat(document.getElementById("RNN_reflection_simple").innerText)*100;
var val23 = parseFloat(document.getElementById("RNN_affirm").innerText)*100;
var val24 = parseFloat(document.getElementById("RNN_advise_wp").innerText)*100;
var val25 = parseFloat(document.getElementById("RNN_Advise_wop").innerText)*100;
var val26 = parseFloat(document.getElementById("RNN_confront").innerText)*100;
var val27 = parseFloat(document.getElementById("RNN_givinginfo").innerText)*100;
var val28 = parseFloat(document.getElementById("RNN_facilitate").innerText)*100;
var val29 = parseFloat(document.getElementById("RNN_structure").innerText)*100;
var val30 = parseFloat(document.getElementById("RNN_na_other").innerText)*100;
    
var data2 = google.visualization.arrayToDataTable([
  ['MISC Codes', 'DSF', 'RNN'],
  ['Open Question', val7, val19],
  ['Closed Question', val8, val20],
  ['Complex Reflection', val9, val21],
  ['Simple Reflection', val10, val22],
  ['Affirm', val11, val23],
  ['Advise With Per', val12, val24],
  ['Advise Without Per', val13, val25],
  ['Confront', val14, val26],
  ['Giving Information', val15, val27],
  ['Facilitate', val16, val28],
  ['Structure', val17, val29],
  ['N/A Other', val18, val30]
]);

var options2 = {
  chart: {
    title: 'Therapist Talk Turn',
  },
    vAxis: {
        viewWindowMode: 'explicit', 
        viewWindow: {
            max: 100, 
            min: 0}
    },
    width: 1400,
    height: 500
};

var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

chart.draw(data2, google.charts.Bar.convertOptions(options2));
}