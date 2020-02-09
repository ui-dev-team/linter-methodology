import classNames from 'classnames'
import { boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Textarea',
}

export const textArea = () => {
  const isDarkTheme = boolean('Dark theme', false)
  const isErrorState = boolean('Error state', false)
  const isDisabled = boolean('Disabled', false)
  const isReadOnly = boolean('Read only', false)
  const isRequired = boolean('Required', false)
  const isOptional = boolean('Optional', true)

  const labelText = text('Label text', 'Example label')
  const inputText = text('Input value', 'Example input text')
  const placeholderText = text('Placeholder text', 'Example placeholder')
  const supportingText = text('Supporting text', '0 / 300 characters')

  const labelClasses = classNames('label', {
    'label--dark': isDarkTheme,
    'label--error': isErrorState,
  })

  const inputClasses = classNames('input', {
    'input--dark': isDarkTheme,
    'input--error': isErrorState,
  })

  const supportingTextClasses = classNames('input__message', {
    'input__message--dark': isDarkTheme,
    'input__message--error': isErrorState,
  })

  return `
    <form action="action" class="form" method="post">
        <fieldset>
            <div class="form__row">
                <label class="${labelClasses}" 
                    for="text-area">
                    ${
                      isRequired
                        ? '<abbr aria-hidden="true" class="required-indicator" title="Required">*</abbr>'
                        : ''
                    }
                    ${labelText}
                    ${isOptional & !isDisabled ? ' (optional)' : ''}
                    ${isDisabled ? ' (disabled)' : ''}
                </label>
                <textarea 
                    class="${inputClasses}" 
                    id="textarea" 
                    name="textarea" 
                    type="text"
                    ${isRequired ? 'required' : ''}
                    ${isDisabled ? 'disabled' : ''} 
                    ${isReadOnly ? 'readonly' : ''} 
                    placeholder="${placeholderText}""
                    rows="4">${inputText}</textarea>
                <strong class="${supportingTextClasses}">${supportingText}</strong>
            </div>
        </fieldset>
    </form>
    `
}

textArea.story = {
  name: 'text area',
}
