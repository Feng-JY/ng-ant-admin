const Critical_Color = '#c156ce';
const High_Color = '#fc5659';
const Medium_Color = '#f8ba4a';
const Low_Color = '#bee87b';
const Info_Color = '#40b5ec';
export class Chart {

  static setPieChart(critical: any, high: any, medium: any, low: any, info: any) {
    var option = {
      tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {c} ({d}%)" },
      legend: { show: true, y: 'bottom', data: ['严重', '高危', '中危', '低危', '信息'] },
      toolbox: {
        show: true,
        feature: {
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      //calculable : false,
      series: [
        {
          name: '漏洞数量', type: 'pie', radius: [70, 110],
          data: [
            { value: critical, name: '严重', itemStyle: { normal: { color: Critical_Color } } },
            { value: high, name: '高危', itemStyle: { normal: { color: High_Color } } },
            { value: medium, name: '中危', itemStyle: { normal: { color: Medium_Color } } },
            { value: low, name: '低危', itemStyle: { normal: { color: Low_Color } } },
            { value: info, name: '信息', itemStyle: { normal: { color: Info_Color } } }
          ]
        }
      ]
    };
    return option;
  }

  static setRectMap() {
    return {
      allowDecimals: true,
      tooltip: {
        trigger: 'item',
        formatter: "{b}"
      },
      visualMap: {
        min: 0,
        max: 5,
        orient: 'horizontal',
        left: 'right',
        itemHeight: 100,
        itemWidth: 10,
        top: '0',
        realtime: false,
        text: ['5 风险值程度', '0'],
        range: [0, 5],
        color: ['rgba(56,180,238,1)', 'rgba(56,180,238,.5)'],
        dimension: 0
      },
      series: [{
        type: 'treemap',
        top: '30px',
        width: '100%',
        height: '100%',
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false,//点击节点后的行为,false无反应
        breadcrumb: {
          show: false
        },
        label: { //描述了每个矩形中，文本标签的样式。
          normal: {
            show: true,
            position: ['40%', '40%']
          }
        },
        itemStyle: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: [
          {
            value: 1,
            name: '代码泄露',
          },
          {
            value: 2,
            name: '弱密码'
          },
          {
            value: 3,
            children: [{
              name: '端口开放',
              value: 3,
            }]
          },
          {
            value: 4,
            name: '配置泄露',
          },
          {
            value: 1,
            name: '配置泄露'
          },
          {
            value: 2.50,
            name: '配置泄露2.5',
          },
          {
            value: 3,
            name: '配置泄露',
          }
        ]
      }]
    };
  }

  static setBarOption() {
    return {
      // backgroundColor: '#394056',
      backgroundColor: '#fff',
      title: {
        text: '请求数',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: '#333'
        },
        left: '6%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
          fontSize: 12,
          color: '#333'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
      }],
      yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(137, 189, 27, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(137, 189, 27, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(137,189,27)',
            borderColor: 'rgba(137,189,2,0.27)',
            borderWidth: 12

          }
        },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
      }, {
        name: '电信',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 136, 212, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(0, 136, 212, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12

          }
        },
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
      }, {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(219, 50, 51, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(219, 50, 51, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: { 
          normal: {

            color: 'rgb(219,50,51)',
            borderColor: 'rgba(219,50,51,0.2)',
            borderWidth: 12
          }
        },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
      },]
    };
  }

}