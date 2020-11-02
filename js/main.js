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

 //Builds Data Arrays for Bar Chart

 $.each(lightpol, function(index){

    popChange[index] = [lightpol[index].POPChange];
    liChange[index] = [lightpol[index].LIChange];
    
 });

 console.log(popChange[0]); 


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
            categories: ['The Villages, FL',
                         'Myrtle Beach, NC-SC', 
                         'Greeley, CO', 
                         'Bend, OR', 
                         'Jefferson, GA', 
                         'Prineville, OR', 
                         'Heber City, UT', 
                         'Cape Coral/Fort Myers, FL', 
                         'Granbury, TX', 
                         'Lakeland/Winter Haven, Fl', 
                         'Milwaukee-Waukesha, WI', 
                         'Elizabeth City, NC', 
                         'Charleston, WV', 
                         'Portales, NM', 
                         'Morgan City, LA', 
                         'Pine Bluff, AR', 
                         'Forrest City, AR', 
                         'Cleveland, MS', 
                         'Indianola, MS', 
                         'Fort Polk South, LA', 
                         'Mount Gay/Shamrock, WV', 
                         'Selma, AL',]
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

        console.log(lightpol[index].NAME);
        
        html += '<tr>';
        html += '<td>' + cityName + '</td>';
        html += '<td>' + areaType + '</td>';
        html += '<td>' + popChange + '%</td>';
        html += '<td>' + liChange + '%</td>';
        html += '<tr>';

    });

    $('#table_id').append(html);

    $('#table_id').DataTable({
        responsive: true,
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