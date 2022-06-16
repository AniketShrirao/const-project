import Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import theme from '../../themes';
import { RANK, SCORE_OUT_OF } from '../../utils/Constants';

highchartsMap(Highcharts);

// map colors into an array
const getColors = () => {
  return Object.values(theme.colors.MAP_COLORS);
};

const mapOptions = {
  chart: {
    map: 'custom/world-eckert3-highres',
    height: 554,
    resetZoomButton: {
      theme: {
        fill: theme.colors.WHITE,
        stroke: 'silver',
        states: {
          hover: {
            fill: theme.colors.PRIMARY_COLOR,
            style: {
              color: theme.colors.WHITE,
            },
          },
        },
      },
      position: {
        align: 'right',
        verticalAlign: 'top',
        x: -30,
        y: 10,
      },
    },
    events: {
      load() {
        if (!this.showResetZoom()) {
          this.showResetZoom();
        }
      },
    },
  },
  title: {
    text: null,
  },
  colors: getColors(),
  tooltip: {
    borderColor: theme.colors.PRIMARY_OPAQUE,
    borderWidth: 2,
    padding: 18,
    style: {
      fontSize: '20px',
    },
    pointFormat: `{point.name}: <b>{point.value} / ${SCORE_OUT_OF}</b><br/>`,
  },
  credits: {
    enabled: false,
  },
  mapNavigation: {
    enabled: true,
    enableDoubleClickZoom: true,
    enableMouseWheelZoom: false,
    enableButtons: true,
    buttonOptions: {
      theme: {
        fill: theme.colors.WHITE,
        stroke: 'rgba(0, 0, 0, .25)',
        'stroke-width': 2,
        r: 2,
        states: {
          hover: {
            fill: theme.colors.PRIMARY_COLOR,
            'stroke-width': 2,
            stroke: theme.colors.PRIMARY_COLOR,
          },
          select: {
            stroke: '#039',
            fill: '#a4edba',
          },
        },
      },
      verticalAlign: 'top',
      align: 'right',
      width: 30,
      height: 30,
      x: -28,
    },
    buttons: {
      zoomIn: {
        y: 58,
        style: {
          fontSize: '22px',
        },
      },
      zoomOut: {
        y: 102,
        style: {
          fontSize: '22px',
        },
      },
    },
  },
  legend: {
    title: {
      text: `Index ${RANK}`,
      style: {
        color:
          Highcharts?.defaultOptions?.legend?.title?.style?.color ||
          theme.colors.BLACK,
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 600,
        textTransform: 'uppercase',
        fontFamily: `${theme.fonts.BEBASNEUE_REGULAR}, sans-serif`,
      },
    },
    labelFormatter() {
      if (this.from === 0) {
        return `${this.from || '0'} - ${'20'}`;
      }

      return `${this.from || '0'} - ${this.to || '100 (BEST)'}`;
    },
    align: 'left',
    verticalAlign: 'bottom',
    floating: true,
    layout: 'vertical',
    valueDecimals: 0,
    symbolRadius: 1,
    itemMarginTop: 5,
    itemMarginBottom: 5,
    itemStyle: {
      fontSize: 14,
      fontFamily: `${theme.fonts.ROBOTO_BOLD}, sans-serif`,
      letterSpacing: 1,
    },
    symbolPadding: 10,
    symbolHeight: 20,
    navigation: {
      activeColor: '#ff5000',
      style: {
        fontSize: 0,
      },
    },
    x: 25,
    y: -25,
  },
  colorAxis: {
    min: 1,
    max: 100,
    type: 'linear',
    custom: {
      allowNegativeLog: true,
    },
    dataClassColor: 'category',
    dataClasses: [
      {
        from: 90,
      },
      {
        from: 80,
        to: 90,
      },
      {
        from: 70,
        to: 80,
      },
      {
        from: 60,
        to: 70,
      },
      {
        from: 50,
        to: 60,
      },
      {
        from: 40,
        to: 50,
      },
      {
        from: 30,
        to: 40,
      },
      {
        from: 20,
        to: 30,
      },
      {
        from: 10,
        to: 20,
      },
      {
        from: 0,
        to: 10,
      },
    ],
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 1024,
        },
        chartOptions: {
          chart: {
            zoomType: 'xy',
          },
          legend: {
            x: 10,
            y: -20,
            itemStyle: {
              fontSize: 12,
            },
            symbolHeight: 12,
            symbolWidth: 7,
          },
        },
      },
      {
        condition: {
          maxWidth: 768,
        },
        chartOptions: {
          chart: {
            zoomType: 'xy',
            events: {
              click(event) {
                if (event.target.closest('.highcharts-reset-zoom')) {
                  this.mapView.setView([4800, 8200], -2);
                }
              },
            },
          },
          legend: {
            itemStyle: {
              fontSize: 10,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 540,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                align: 'right',
                verticalAlign: 'bottom',
                x: -10,
                y: -150,
              },
            },
          },
          legend: {
            title: {
              style: {
                fontSize: 18,
              },
            },
            backgroundColor:
              Highcharts?.defaultOptions?.legend?.backgroundColor ||
              'rgba(255, 255, 255, 0.65)',
            y: 14,
            x: 0,
            padding: 10,
            margin: 10,
            itemMarginTop: 3,
            itemMarginBottom: 3,
            symbolRadius: 0,
            itemDistance: 10,
            layout: 'horizontal',
            width: '100%',
            symbolHeight: 13,
            symbolWidth: 8,
          },
          mapNavigation: {
            buttonOptions: {
              alignTo: 'spacingBox',
              style: {
                transform: 'translateX(50px, 400px)',
              },
              verticalAlign: 'bottom',
              align: 'left',
              margin: 30,
              width: 24,
              height: 24,
            },
            buttons: {
              zoomIn: {
                y: -80,
                x: 5,
                style: {
                  fontSize: 22,
                },
              },
              zoomOut: {
                y: -80,
                x: 45,
                style: {
                  fontSize: 22,
                },
              },
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 415,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -145,
              },
            },
          },
          legend: {
            itemDistance: 8,
            symbolHeight: 10,
            symbolWidth: 10,
            itemStyle: {
              fontSize: 10,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 395,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -145,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -80,
                x: 5,
                style: {
                  fontSize: 22,
                },
              },
              zoomOut: {
                y: -80,
                x: 45,
                style: {
                  fontSize: 22,
                },
              },
            },
          },
          legend: {
            padding: 8,
            margin: 8,
            itemMarginTop: 2,
            itemMarginBottom: 2,
            itemDistance: 4,
            symbolHeight: 10,
            symbolWidth: 10,
            itemStyle: {
              fontSize: 10,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 375,
        },
        chartOptions: {
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -75,
                x: 5,
              },
              zoomOut: {
                y: -75,
                x: 45,
              },
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 360,
        },
        chartOptions: {
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -65,
                x: 5,
              },
              zoomOut: {
                y: -65,
                x: 45,
              },
            },
          },
          legend: {
            padding: 6,
            margin: 2,
            itemDistance: 2,
            symbolHeight: 10,
            symbolWidth: 10,
            itemStyle: {
              fontSize: 10,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 355,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -140,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -65,
                x: 5,
              },
              zoomOut: {
                y: -65,
                x: 45,
              },
            },
          },
          legend: {
            padding: 6,
            margin: 0,
            itemDistance: 2,
            symbolHeight: 8,
            symbolWidth: 8,
            itemStyle: {
              fontSize: 10,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 320,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -140,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -65,
                x: 5,
              },
              zoomOut: {
                y: -65,
                x: 45,
              },
            },
          },
          legend: {
            padding: 4,
            margin: 2,
            symbolHeight: 6,
            symbolWidth: 6,
            itemStyle: {
              fontSize: 9,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 315,
          minWidth: 280,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -130,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -55,
                x: 5,
              },
              zoomOut: {
                y: -55,
                x: 45,
              },
            },
          },
          legend: {
            padding: 2,
            symbolHeight: 6,
            symbolWidth: 6,
            itemStyle: {
              fontSize: 7,
            },
          },
        },
      },
    ],
  },
  plotOptions: {
    map: {
      nullColor: '#ffffec',
    },
  },
};

export default mapOptions;
