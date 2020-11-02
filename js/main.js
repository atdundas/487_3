$(document).ready( function () {
    loadData();
    //console.log('Data Loaded')

    $.getJSON("data/lightpol.json", function(lightpol) {
        //console.log(lightpol);
        buildCharts(lightpol);
    });

    $(".nav-tabs a").click(function(){
        $(this).tab('show');
      });

});


function buildCharts(lightpol){
    console.log('Build Chart') 

 //Var for bar chart
    var popChange = [];
    var liChange = [];
    var areaName = [];

 //Builds Data Arrays for Bar Chart

 $.each(lightpol, function(index){

    popChange[index] = [lightpol[index].POPChange];
    liChange[index] = [lightpol[index].LIChange];
    areaName[index] = [lightpol[index].NAME];
    
 });


 var chart = c3.generate({
    bindto: '#change-chart',
    data: {
        columns: [
                 ['Population', popChange[0], 
                                popChange[1],
                                popChange[2],
                                popChange[3],
                                popChange[4],
                                popChange[5],
                                popChange[6],
                                popChange[7],
                                popChange[8],
                                popChange[9],
                                popChange[10],
                                popChange[11],
                                popChange[12],
                                popChange[13],
                                popChange[14],
                                popChange[15],
                                popChange[16],
                                popChange[17],
                                popChange[18],
                                popChange[19],
                                popChange[20],
                                popChange[21],],

            ['Light Pollution', liChange[0], 
                                liChange[1],
                                liChange[2],
                                liChange[3],
                                liChange[4],
                                liChange[5],
                                liChange[6],
                                liChange[7],
                                liChange[8],
                                liChange[9],
                                liChange[10],
                                liChange[11],
                                liChange[12],
                                liChange[13],
                                liChange[14],
                                liChange[15],
                                liChange[16],
                                liChange[17],
                                liChange[18],
                                liChange[19],
                                liChange[20],
                                liChange[21],],
        ],
        type: 'bar',
        colors: {
            "Population": '#000CFF',
            "Light Pollution": '#ffcc00',
        },
    },
    legend: {
        position: 'right'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'category',
            categories: [areaName[0], 
                         areaName[1],
                         areaName[2],
                         areaName[3],
                         areaName[4],
                         areaName[5],
                         areaName[6],
                         areaName[7],
                         areaName[8],
                         areaName[9],
                         areaName[10],
                         areaName[11],
                         areaName[12],
                         areaName[13],
                         areaName[14],
                         areaName[15],
                         areaName[16],
                         areaName[17],
                         areaName[18],
                         areaName[19],
                         areaName[20],
                         areaName[21],],
            tick: {
                rotate: 50,
                multiline: false
            },
            height: 185,
        }
    }
 });

    //Var 1 for line charts
    var popYear = [];
    var liYear = [];

    //Var 2 for line charts
    var popData = [];
    var liData = [];

 //Builds Data Arrays for Line Charts 
    $.each(lightpol, function(index){

        popYear = [ lightpol[index].POP2013, 
                    lightpol[index].POP2014, 
                    lightpol[index].POP2015, 
                    lightpol[index].POP2016, 
                    lightpol[index].POP2017, 
                    lightpol[index].POP2018, 
                    lightpol[index].POP2019,];

        liYear = [  lightpol[index].LI2013, 
                    lightpol[index].LI2014, 
                    lightpol[index].LI2015, 
                    lightpol[index].LI2016, 
                    lightpol[index].LI2017, 
                    lightpol[index].LI2018, 
                    lightpol[index].LI2019,];

        popData[index] = popYear;
        liData[index] = liYear;

    });
    
    
//0 Villages
   var chart = c3.generate({
        bindto: '#Villages',
        data: {
            json: {
                Population: popData[0],
                Light_Pollution: liData[0],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center',
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//1 Myrtle
    var chart = c3.generate({
        bindto: '#Myrtle',
        data: {
            json: {
                Population: popData[1],
                Light_Pollution: liData[1],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//2 Greeley
    var chart = c3.generate({
        bindto: '#Greeley',
        data: {
            json: {
                Population: popData[2],
                Light_Pollution: liData[2],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//3 Bend
    var chart = c3.generate({
        bindto: '#Bend',
        data: {
            json: {
                Population: popData[3],
                Light_Pollution: liData[3],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//4 Jefferson
    var chart = c3.generate({
        bindto: '#Jefferson',
        data: {
            json: {
                Population: popData[4],
                Light_Pollution: liData[4],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//5 Prineville
    var chart = c3.generate({
        bindto: '#Prineville',
        data: {
            json: {
                Population: popData[5],
                Light_Pollution: liData[5],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//6 Heber
    var chart = c3.generate({
        bindto: '#Heber',
        data: {
            json: {
                Population: popData[6],
                Light_Pollution: liData[6],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//7 Cape
    var chart = c3.generate({
        bindto: '#Cape',
        data: {
            json: {
                Population: popData[7],
                Light_Pollution: liData[7],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//8 Granbury
    var chart = c3.generate({
        bindto: '#Granbury',
        data: {
            json: {
                Population: popData[8],
                Light_Pollution: liData[8],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//9 Lakeland
    var chart = c3.generate({
        bindto: '#Lakeland',
        data: {
            json: {
                Population: popData[9],
                Light_Pollution: liData[9],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//10 Milwaukee
    var chart = c3.generate({
        bindto: '#Milwaukee',
        data: {
            json: {
                Population: popData[10],
                Light_Pollution: liData[10],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//11 Elizabeth
    var chart = c3.generate({
        bindto: '#Elizabeth',
        data: {
            json: {
                Population: popData[11],
                Light_Pollution: liData[11],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//12 Charleston
    var chart = c3.generate({
        bindto: '#Charleston',
        data: {
            json: {
                Population: popData[12],
                Light_Pollution: liData[12],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//13 Portales
    var chart = c3.generate({
        bindto: '#Portales',
        data: {
            json: {
                Population: popData[13],
                Light_Pollution: liData[13],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//14 Morgan
    var chart = c3.generate({
        bindto: '#Morgan',
        data: {
            json: {
                Population: popData[14],
                Light_Pollution: liData[14],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//15 PineBluff
    var chart = c3.generate({
        bindto: '#PineBluff',
        data: {
            json: {
                Population: popData[15],
                Light_Pollution: liData[15],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//16 Forrest
    var chart = c3.generate({
        bindto: '#Forrest',
        data: {
            json: {
                Population: popData[16],
                Light_Pollution: liData[16],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//17 Cleveland
    var chart = c3.generate({
        bindto: '#Cleveland',
        data: {
            json: {
                Population: popData[17],
                Light_Pollution: liData[17],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//18 Indianola
    var chart = c3.generate({
        bindto: '#Indianola',
        data: {
            json: {
                Population: popData[18],
                Light_Pollution: liData[18],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//19 Fort
    var chart = c3.generate({
        bindto: '#Fort',
        data: {
            json: {
                Population: popData[19],
                Light_Pollution: liData[19],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//20 Mount
    var chart = c3.generate({
        bindto: '#Mount',
        data: {
            json: {
                Population: popData[20],
                Light_Pollution: liData[20],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
//21 Selma
    var chart = c3.generate({
        bindto: '#Selma',
        data: {
            json: {
                Population: popData[21],
                Light_Pollution: liData[21],
            },
            axes: {
                Population: 'y',
                Light_Pollution: 'y2'
            },
            colors: {
                Population: '#000CFF',
                Light_Pollution: '#ffcc00',
            },
        },
        axis: {
            x: {
                label: 'Year',
            },
            y: {
                label: {
                    text: 'Population',
                    position: 'outer-center'
                },
            },
            y2: {
                show: true,
                label: {
                    text: 'Light Radiance',
                    position: 'outer-center'
                }
            }
        }
    });
};

function loadData(){
    //console.log('Load Data')
    $.getJSON("data/lightpol.json", function(lightpol) {
        //console.log(lightpol);
        parseData(lightpol);
        parseData2(lightpol);
    });
};

function parseData(lightpol){
    //console.log('Parse Data')

    var html = '';

    html += '<thead><tr>';
    html += '<th>Name</th>';
    html += '<th>Area Type</th>';
    html += '<th>Population Change</th>';
    html += '<th>Radiance Change</th>';
    html += '</tr></thead>';

    $.each(lightpol, function(index){
        var cityName = lightpol[index].NAME;
        var areaType = lightpol[index].LSAD;
        var popChange = lightpol[index].POPChange;
        var liChange = lightpol[index].LIChange;

        //console.log(lightpol[index].NAME);
        
        html += '<tr>';
        html += '<td>' + cityName + '</td>';
        html += '<td>' + areaType + '</td>';
        html += '<td>' + popChange + '%</td>';
        html += '<td>' + liChange + '%</td>';
        html += '</tr>';
    });

    $('#table_id').append(html);

    $('#table_id').DataTable({
        responsive: true,
    });
};

function parseData2(lightpol){
    var html = '';

    html += '<thead><tr>';
    html += '<th>Name</th>';
    html += '<th>Area Type</th>';
    html += '<th>Pop 2013</th>';
    html += '<th>Pop 2014</th>';
    html += '<th>Pop 2015</th>';
    html += '<th>Pop 2016</th>';
    html += '<th>Pop 2017</th>';
    html += '<th>Pop 2018</th>';
    html += '<th>Pop 2019</th>';
    html += '<th>Population Change</th>';
    html += '<th>Radiance 2013</th>';
    html += '<th>Radiance 2014</th>';
    html += '<th>Radiance 2015</th>';
    html += '<th>Radiance 2016</th>';
    html += '<th>Radiance 2017</th>';
    html += '<th>Radiance 2018</th>';
    html += '<th>Radiance 2019</th>';
    html += '<th>Radiance Change</th>';
    html += '</tr></thead>';



    $.each(lightpol, function(index){
        var cityName = lightpol[index].NAME;
        var areaType = lightpol[index].LSAD;
        var pop2013L = Number(lightpol[index].POP2013);
        var pop2014L = Number(lightpol[index].POP2014);
        var pop2015L = Number(lightpol[index].POP2015);
        var pop2016L = Number(lightpol[index].POP2016);
        var pop2017L = Number(lightpol[index].POP2017);
        var pop2018L = Number(lightpol[index].POP2018);
        var pop2019L = Number(lightpol[index].POP2019);
        var pop2013 = pop2013L.toFixed();
        var pop2014 = pop2014L.toFixed();
        var pop2015 = pop2015L.toFixed();
        var pop2016 = pop2016L.toFixed();
        var pop2017 = pop2017L.toFixed();
        var pop2018 = pop2018L.toFixed();
        var pop2019 = pop2019L.toFixed();
        var popChange = lightpol[index].POPChange;
        var li2013L = Number(lightpol[index].LI2013);
        var li2014L = Number(lightpol[index].LI2014);
        var li2015L = Number(lightpol[index].LI2015);
        var li2016L = Number(lightpol[index].LI2016);
        var li2017L = Number(lightpol[index].LI2017);
        var li2018L = Number(lightpol[index].LI2018);
        var li2019L = Number(lightpol[index].LI2019);
        var li2013 = li2013L.toFixed();
        var li2014 = li2014L.toFixed();
        var li2015 = li2015L.toFixed();
        var li2016 = li2016L.toFixed();
        var li2017 = li2017L.toFixed();
        var li2018 = li2018L.toFixed();
        var li2019 = li2019L.toFixed();
        var liChange = lightpol[index].LIChange;

        console.log(lightpol[index].NAME);
        
        html += '<tr>';
        html += '<td>' + cityName + '</td>';
        html += '<td>' + areaType + '</td>';
        html += '<td>' + pop2013 + '</td>';
        html += '<td>' + pop2014 + '</td>';
        html += '<td>' + pop2015 + '</td>';
        html += '<td>' + pop2016 + '</td>';
        html += '<td>' + pop2017 + '</td>';
        html += '<td>' + pop2018 + '</td>';
        html += '<td>' + pop2019 + '</td>';
        html += '<td>' + popChange + '%</td>';
        html += '<td>' + li2013 + '</td>';
        html += '<td>' + li2014 + '</td>';
        html += '<td>' + li2015 + '</td>';
        html += '<td>' + li2016 + '</td>';
        html += '<td>' + li2017 + '</td>';
        html += '<td>' + li2018 + '</td>';
        html += '<td>' + li2019 + '</td>';
        html += '<td>' + liChange + '%</td>';
        html += '</tr>';

    });

    $('#table_id_full').append(html);

    $('#table_id_full').DataTable({
        responsive: true,
        "scrollX": true,
    });

};

//Smart Scroll Navbar
//Hides the Navbar on scroll down shows on up
//From https://bootstrap-menu.com/detail-smart-hide.html

$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

//End Smart Scroll Navbar


// Tabs

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  //End Tabs