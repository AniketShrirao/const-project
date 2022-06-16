import theme from '../../themes';

const spiderOptions = {
  chart: {
    polar: true,
    type: 'line',
  },
  credits: {
    enabled: false,
  },
  pane: {
    size: '80%',
  },
  xAxis: {
    labels: {
      style: {
        fontFamily: `${theme.fonts.ROBOTO_REGULAR}, sans-serif`,
        fontSize: '17px',
        whiteSpace: 'nowrap',
        textOverflow: 'none',
        textTransform: 'capitalize',
        lineHeight: '1.2',
        width: '165px',
        textAlign: 'center',
      },
    },
    tickmarkPlacement: 'on',
    lineWidth: 0,
    minorGridLineWidth: 2,
    minorGridLineDashStyle: 'solid',
    minorGridLineColor: '#7C8186',
    lineColor: theme.colors.PRIMARY_COLOR,
  },
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    minorGridLineWidth: 2,
    minorGridLineDashStyle: 'solid',
    minorGridLineColor: '#7C8186',
    minorTickInterval: 25,
    lineColor: theme.colors.PRIMARY_COLOR,
    min: 0,
    tickPositions: [0, 25, 50, 75, 100],
  },
  tooltip: {
    enabled: false,
  },
  legend: false,
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 550,
        },
        chartOptions: {
          pane: {
            size: '65%',
          },
          xAxis: {
            labels: {
              style: {
                textAlign: 'center',
                textOverflow: 'none',
                fontSize: '13px',
                fontFamily: `${theme.fonts.ROBOTO_REGULAR}, sans-serif`,
              },
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 450,
        },
        chartOptions: {
          pane: {
            size: '50%',
          },
          xAxis: {
            labels: {
              style: {
                textAlign: 'center',
                textOverflow: 'none',
                fontSize: '11px',
                fontFamily: `${theme.fonts.ROBOTO_REGULAR}, sans-serif`,
              },
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 350,
        },
        chartOptions: {
          pane: {
            size: '40%',
          },
          xAxis: {
            labels: {
              style: {
                textAlign: 'center',
                textOverflow: 'none',
                fontSize: '8.5px',
                width: '96px',
                fontFamily: `${theme.fonts.ROBOTO_REGULAR}, sans-serif`,
              },
            },
          },
        },
      },
    ],
  },
};

export default spiderOptions;
