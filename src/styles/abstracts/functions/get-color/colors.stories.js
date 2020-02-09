import palette from '../../variables/palette.json'
import colorApi from '../../variables/color-api.json'
import deprecatedColorApi from '../../variables/color-api-deprecated'
import deprecatedPalette from '../../variables/palette-deprecated'
import docs from './colors.docs.mdx'

import OrderedPaletteBase from '../../variables/OrderedPaletteBase'
import OrderedPaletteDark from '../../variables/OrderedPaletteDark'
import DarkBackgroundDecorator from '../../../../.storybook/decorators/DarkBackgroundDecorator.js'

export default {
  title: 'Foundations/Colors',
  parameters: { docs: { page: docs } },
}

const ColorPalette = ({ orderedPalette, dark = false }) => {
  let colorpalette = orderedPalette.map(list => {
    const listClasses = list.listClass ? list.listClass : ''
    const titleClass = dark ? 't-scale-banana-dark' : 't-scale-banana'

    return `
        <h4 class="${titleClass}">${list.title}</h4>
        <ol class="${`color-palette margin-bottom-2 ${listClasses}`}">
          ${list.items
            .map((item, index) => {
              const name = item.name
              const value = palette[name]
              const { row, column } = item
              let styles

              if (row && column) {
                styles = `background-color: ${value}; grid-row: ${row}; grid-column: ${column};`
              } else {
                styles = `background-color: ${value};`
              }

              return `
                <li class="color-palette__item color-block" style="${styles}">
                  <dl class="color-block__info">
                    <dt class="sr-only">Color name</dt>
                    <dd class="color-block__value">${name}</dd>
                    <dt class="sr-only">Color value</dt>
                    <dd class="color-block__value">${value}</dd>
                  </dl>
                </li>
              `
            })
            .join('')}
        </ol>
      `
  })

  return `${colorpalette.join('')}`
}

export const paletteBase = () => {
  return ColorPalette({ orderedPalette: OrderedPaletteBase })
}

paletteBase.story = {
  name: 'Palette - Base',
}

export const paletteDark = () => {
  return ColorPalette({ orderedPalette: OrderedPaletteDark, dark: true })
}

paletteDark.story = {
  name: 'Palette - Dark',
  decorators: [DarkBackgroundDecorator],
}

// TODO: this is copy-pasted, should be shared from central tokens repo
const orderedChartPalette = [
  'green-tiffany',
  'purple-gigas',
  'pink-frenchrose',
  'orange-carrot',
  'blue-cerulean',
  'yellow-energy',
  'green-carribean',
  'gray-shuttle',
  'red-thunderbird',
]

export const chartPalette = () => {
  const chartPaletteBlocks = orderedChartPalette.map(name => {
    const value = palette[name]
    const styles = `background-color: ${value}`

    return `
      <li class="color-palette__item color-block" style="${styles}">
        <dl class="color-block__info">
          <dt class="sr-only">Color name</dt>
          <dd class="color-block__value">${name}</dd>
          <dt class="sr-only">Color value</dt>
          <dd class="color-block__value">${value}</dd>
        </dl>
      </li>
    `
  })

  return `
      <ol class="color-palette color-palette--chart">
        ${chartPaletteBlocks.join('')}
      </ol>
    `
}
chartPalette.story = {
  name: 'Palette - Chart',
}

const pureNames = new Set([
  'blue',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'gray',
  'white',
])

export const pureColors = () => {
  const baseColorApi = colorApi.base
  // filter out the semantic colors
  const pureKeys = Object.keys(baseColorApi).filter(name => {
    const namePrefix = name.split('-')[0] // purple-comet -> purple
    return pureNames.has(namePrefix)
  })

  return `
      <ol class="color-palette">
        ${pureKeys
          .map(name => {
            const value = palette[name]
            return `
              <li class="color-palette__item color-block" style="background-color: ${value};">
                <dl class="color-block__info">
                  <dt class="sr-only">Color name</dt>
                  <dd class="color-block__value">${name}</dd>
                  <dt class="sr-only">Color value</dt>
                  <dd class="color-block__value">${value}</dd>
                </dl>
              </li>
            `
          })
          .join('')}
      </ol>
    `
}

export const semanticColors = () => {
  const baseColorApi = colorApi.base
  // filter out the "pure colors"
  const semanticKeys = Object.keys(baseColorApi).filter(name => {
    const namePrefix = name.split('-')[0] // purple-comet -> purple
    return !pureNames.has(namePrefix)
  })

  return `
      <ol class="color-palette">
        ${semanticKeys
          .map(name => {
            const value = palette[baseColorApi[name]]

            return `
              <li class="color-palette__item color-block" style="background-color: ${value};">
                <dl class="color-block__info">
                  <dt class="sr-only">Color name</dt>
                  <dd class="color-block__value">${name}</dd>
                  <dt class="sr-only">Color value</dt>
                  <dd class="color-block__value">${value}</dd>
                </dl>
              </li>
            `
          })
          .join('')}
      </ol>
    `
}

export const semanticColorsDark = () => {
  const darkColorApi = colorApi.dark
  // filter out the "pure colors"
  const semanticKeys = Object.keys(darkColorApi).filter(name => {
    const namePrefix = name.split('-')[0] // purple-comet -> purple
    return !pureNames.has(namePrefix)
  })

  return `
      <ol class="color-palette">
        ${semanticKeys
          .map(name => {
            const value = palette[darkColorApi[name]]

            return `
              <li class="color-palette__item color-block" style="background-color: ${value};">
                <dl class="color-block__info">
                  <dt class="sr-only">Color name</dt>
                  <dd class="color-block__value">${name}</dd>
                  <dt class="sr-only">Color value</dt>
                  <dd class="color-block__value">${value}</dd>
                </dl>
              </li>
            `
          })
          .join('')}
      </ol>
    `
}
semanticColorsDark.story = {
  decorators: [DarkBackgroundDecorator],
}

export const baseApi = () => {
  const baseColorApi = colorApi.base
  // filter out the "pure colors"
  const keys = Object.keys(baseColorApi)

  return `
      <ol class="color-palette">
        ${keys
          .map(name => {
            const value = palette[baseColorApi[name]]

            return `
              <li class="color-palette__item color-block" style="background-color: ${value};">
                <dl class="color-block__info">
                  <dt class="sr-only">Color name</dt>
                  <dd class="color-block__value">${name}</dd>
                  <dt class="sr-only">Color value</dt>
                  <dd class="color-block__value">${value}</dd>
                </dl>
              </li>
            `
          })
          .join('')}
      </ol>
    `
}

export const darkApi = () => {
  const darkColorApi = colorApi.dark
  // filter out the "pure colors"
  const keys = Object.keys(darkColorApi)

  return `
      <ol class="color-palette">
        ${keys
          .map(name => {
            const value = palette[darkColorApi[name]]

            return `
              <li class="color-palette__item color-block" style="background-color: ${value};">
                <dl class="color-block__info">
                  <dt class="sr-only">Color name</dt>
                  <dd class="color-block__value">${name}</dd>
                  <dt class="sr-only">Color value</dt>
                  <dd class="color-block__value">${value}</dd>
                </dl>
              </li>
            `
          })
          .join('')}
      </ol>
    `
}
darkApi.story = {
  decorators: [DarkBackgroundDecorator],
}

export const deprecatedAPI = () => {
  // filter out the "pure colors"
  const keys = Object.keys(deprecatedColorApi)

  return `
      <ol class="color-palette">
        ${keys
          .map(name => {
            const value =
              deprecatedPalette[deprecatedColorApi[name]] ||
              palette[deprecatedColorApi[name]]

            return `
              <li class="color-palette__item color-block" style="background-color: ${value};">
                <dl class="color-block__info">
                  <dt class="sr-only">Color name</dt>
                  <dd class="color-block__value">${name}</dd>
                  <dt class="sr-only">Color value</dt>
                  <dd class="color-block__value">${value}</dd>
                </dl>
              </li>
            `
          })
          .join('')}
      </ol>
    `
}
