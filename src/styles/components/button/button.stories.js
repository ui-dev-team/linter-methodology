import { text, boolean, radios } from '@storybook/addon-knobs'
import classNames from 'classnames'

import docs from './button.docs.mdx'

export default {
  title: 'Components|Button',
  parameters: { docs: { page: docs } },
}

export const button = () => {
  const innerText = text('Inner text', 'Button')
  const modifiers = radios('Modifiers', {
    Default: '',
    Primary: 'button--primary',
    Secondary: 'button--secondary',
    Icon: 'button--icon',
  })
  const darkTheme = boolean('Dark theme', false)
  const disabled = boolean('Disabled', false)
  let withIcon = boolean('With icon', false)
  const isIconOnly = modifiers === 'button--icon'

  if (isIconOnly) {
    withIcon = true
  }

  const classes = classNames('button', modifiers, {
    'button--dark': darkTheme,
  })

  return `
      <button type="button" class="${classes}" ${disabled ? 'disabled' : ''}>
        ${
          withIcon
            ? '<svg-icon icon="trashcan" class="button__icon"></svg-icon>'
            : ''
        }
        ${isIconOnly ? `<span class="sr-only">${innerText}</span>` : innerText}
      </button>
    `
}
button.story = {
  name: 'Button - 🎛',
}

export const buttonWithAnIcon = () => {
  const innerText = text('Inner text', 'Button')
  const modifiers = radios(
    'Modifiers',
    {
      Default: '',
      Primary: 'button--primary',
      Secondary: 'button--secondary',
    },
    '',
  )
  const darkTheme = boolean('Dark theme', false)
  const disabled = boolean('Disabled', false)

  const classes = classNames('button', modifiers, {
    'button--dark': darkTheme,
  })

  return `
      <button type="button" class="${classes}" ${disabled ? 'disabled' : ''}>
        <svg-icon icon="trashcan" class="button__icon"></svg-icon>
        ${innerText}
      </button>
    `
}

buttonWithAnIcon.story = {
  name: 'button with an icon',
}

export const buttonIcon = () => {
  const innerText = text('Inner text', 'Button')
  const modifiers = radios(
    'Modifiers',
    {
      Default: '',
      Primary: 'button--primary',
      Secondary: 'button--secondary',
    },
    '',
  )
  const darkTheme = boolean('Dark theme', false)
  const disabled = boolean('Disabled', false)

  const classes = classNames('button button--icon', modifiers, {
    'button--dark': darkTheme,
  })

  return `
      <button type="button" class="${classes}" ${disabled ? 'disabled' : ''}>
        <svg-icon icon="trashcan" class="button__icon"></svg-icon>
        <span class="sr-only">${innerText}</span>
      </button>
    `
}

buttonIcon.story = {
  name: 'button - icon',
}
