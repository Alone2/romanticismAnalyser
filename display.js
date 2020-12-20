
document.querySelector("#read-button").addEventListener('click', function() {
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
        let text = e.target.result;
        doChart(JSON.parse(text));
    });
    reader.readAsText(file);
})

function doChart(datasets) {
    console.log(datasets)
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['Volume I Letter 1; St. Petersburg',
                'Volume I Letter 2; Archangel', 
                'Volume I Letter 3; Barents Sea', 
                'Volume I Letter 4; Arctic Ocean',
                'Volume I Chapter 1;  Lucerne, Venice, Geneva',
                'Volume I Chapter 2; Ingolstadt',
                'Volume I Chapter 3; Ingolstadt',
                'Volume I Chapter 4; Ingolstadt',
                'Volume I Chapter 5; Ingolstadt',
                'Volume I Chapter 6; Ingolstadt, Geneva',
                'Volume I Chapter 7; Geneva',
                'Volume II Chapter 1; Geneva, Belrive, Chamounix',
                'Volume II Chapter 2; Chamounix, Montanvert',
                'Volume II Chapter 3; Ingolstadt',
                'Volume II Chapter 4; Ingolstadt',
                'Volume II Chapter 5; Ingolstadt',
                'Volume II Chapter 6; Ingolstadt',
                'Volume II Chapter 7; Ingolstadt',
                'Volume II Chapter 8; Ingolstadt, Geneva',
                'Volume II Chapter 9; Montanvert',
                'Volume III Chapter 1; Chamounix',
                'Volume III Chapter 2; England, Scotland, Orkeyisland',
                'Volume III Chapter 3; Ireland',
                'Volume III Chapter 4; Ireland',
                'Volume III Chapter 5; Paris, Geneva',
                'Volume III Chapter 6; Geneva',
                'Volume III Chapter 7; Russia',
                'Walton, in continuation; Arctic Ocean',
            ],
        datasets: datasets
        },
        // Configuration options go here
        options: {
            legend: {
                labels: {
                    fontColor: "rgba(255, 255, 255, 1)"
                }
            },
            responsive: true,
            title: {
                display: true,
                text: "Romanticism in frankenstein",
                fontColor: "rgba(255, 255, 255, 1)"
            },
            scales: {
                xAxes: [{
                    id:'xAxis1',
                    scaleLabel : {
                        fontColor: "rgba(255, 255, 255, 1)"
                    },
                    gridLines: {
                        color: "rgba(255, 255, 255, 0.5)"
                    },
                    ticks: {
                        fontColor: "rgba(255, 255, 255, 1)",
                        callback:function(label){
                            var chapter = label.split(";")[0];
                            var place = label.split(";")[1];
                            return chapter;
                        }
                    }

                },
                {
                    id:'xAxis2',
                    type:"category",
                    scaleLabel : {
                        fontColor: "rgba(255, 255, 255, 1)"
                    },
                    gridLines: {
                        color: "rgba(255, 255, 255, 0.5)",
                        drawOnChartArea: false
                    },
                    ticks: {
                        fontColor: "rgba(255, 255, 255, 1)",
                        callback:function(label){
                            var chapter = label.split(";")[0];
                            var place = label.split(";")[1];
                            return place;
                        }
                    }

                }],
                yAxes: [{
                    scaleLabel : {
                        fontColor: "rgba(255, 255, 255, 1)"
                    },
                    gridLines: {
                        color: "rgba(255, 255, 255, 0.5)"
                    },
                    ticks: {
                        fontColor: "rgba(255, 255, 255, 1)"
                    }
                }]
            }
        }
    });
}
