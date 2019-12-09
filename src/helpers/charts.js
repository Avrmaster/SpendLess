import Color from 'color'

export function getChartConfig(primaryColor) {
  const colorBg = Color(primaryColor).darken(0.5).string()
  return {
    backgroundColor: colorBg,
    backgroundGradientFrom: colorBg,
    backgroundGradientTo: colorBg,
    decimalPlaces: 0,
    color: (opacity = 1) => Color(primaryColor).lighten(opacity * 1.5).string(),
  }
}

export function mapPieData(data, subcategories) {
  if (data == null) {
    return null
  }
  return data.map((item, i) => {
    return {
      name: item[1],
      pieChartData: item[0],
      // color: subcategories
      //   .map(({category}) => category)
      //   .find(({name}) => item[1] === name).color,
    }
  })
}
