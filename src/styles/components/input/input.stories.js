import classNames from 'classnames'
import { boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Input',
}

export const textInput = () => {
  const isDarkTheme = boolean('Dark theme', false)
  const isErrorState = boolean('Error state', false)
  const isDisabled = boolean('Disabled', false)
  const isReadOnly = boolean('Read only', false)
  const isRequired = boolean('Required', false)
  const isOptional = boolean('Optional', true)

  const labelText = text('Label text', 'Example label')
  const inputText = text('Input value', 'Example input text')
  const placeholderText = text('Placeholder text', 'Example placeholder')
  const supportingText = text('Supporting text', 'Example supporting message')

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
                    <label class="${labelClasses}" for="input-empty">
                        ${
                          isRequired
                            ? '<abbr aria-hidden="true" class="required-indicator" title="Required">*</abbr>'
                            : ''
                        }
                        ${labelText}
                        ${isOptional & !isDisabled ? ' (optional)' : ''}
                        ${isDisabled ? ' (disabled)' : ''}
                    </label>
                    <input 
                        class="${inputClasses}" 
                        id="input-empty" 
                        name="input-empty" 
                        type="text"
                        ${isRequired ? 'required' : ''}
                        ${isDisabled ? 'disabled' : ''} 
                        ${isReadOnly ? 'readonly' : ''} 
                        placeholder="${placeholderText}"
                        value="${inputText}"
                        />
                    <strong class="${supportingTextClasses}">${supportingText}</strong>
                </div>
        </fieldset>
    </form>
    `
}

textInput.story = {
  name: 'text input',
}

export const textInputRequired = () => {
  const isDarkTheme = boolean('Dark theme', false)
  const isErrorState = boolean('Error state', false)
  const isDisabled = boolean('Disabled', false)
  const isReadOnly = boolean('Read only', false)
  const isRequired = boolean('Required', false)
  const isOptional = boolean('Optional', true)

  const labelText = text('Label text', 'Example label')
  const inputText = text('Input value', 'Example input text')
  const placeholderText = text('Placeholder text', 'Example placeholder')
  const supportingText = text('Supporting text', 'Example supporting message')

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
                      <label class="${labelClasses}" for="input-empty">
                          ${
                            isRequired
                              ? '<abbr aria-hidden="true" class="required-indicator" title="Required">*</abbr>'
                              : ''
                          }
                          ${labelText}
                          ${isOptional & !isDisabled ? ' (optional)' : ''}
                          ${isDisabled ? ' (disabled)' : ''}
                      </label>
                      <input 
                          class="${inputClasses}" 
                          id="input-empty" 
                          name="input-empty" 
                          type="text"
                          ${isRequired ? 'required' : ''}
                          ${isDisabled ? 'disabled' : ''} 
                          ${isReadOnly ? 'readonly' : ''} 
                          placeholder="${placeholderText}"
                          value="${inputText}"
                          />
                      <strong class="${supportingTextClasses}">${supportingText}</strong>
                  </div>
          </fieldset>
      </form>
      `
}

textInputRequired.story = {
  name: 'text input required',
}

export const textInputError = () => {
  const isDarkTheme = boolean('Dark theme', false)
  const isErrorState = boolean('Error state', false)
  const isDisabled = boolean('Disabled', false)
  const isReadOnly = boolean('Read only', false)
  const isRequired = boolean('Required', false)
  const isOptional = boolean('Optional', true)

  const labelText = text('Label text', 'Example label')
  const inputText = text('Input value', 'Example input text')
  const placeholderText = text('Placeholder text', 'Example placeholder')
  const supportingText = text('Supporting text', 'Example supporting message')

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
                      <label class="${labelClasses}" for="input-empty">
                          ${
                            isRequired
                              ? '<abbr aria-hidden="true" class="required-indicator" title="Required">*</abbr>'
                              : ''
                          }
                          ${labelText}
                          ${isOptional & !isDisabled ? ' (optional)' : ''}
                          ${isDisabled ? ' (disabled)' : ''}
                      </label>
                      <input 
                          class="${inputClasses}" 
                          id="input-empty" 
                          name="input-empty" 
                          type="text"
                          ${isRequired ? 'required' : ''}
                          ${isDisabled ? 'disabled' : ''} 
                          ${isReadOnly ? 'readonly' : ''} 
                          placeholder="${placeholderText}"
                          value="${inputText}"
                          />
                      <strong class="${supportingTextClasses}">${supportingText}</strong>
                  </div>
          </fieldset>
      </form>
      `
}

textInputError.story = {
  name: 'text input error',
}

export const textInputErrorAndRequired = () => {
  const isDarkTheme = boolean('Dark theme', false)
  const isErrorState = boolean('Error state', false)
  const isDisabled = boolean('Disabled', false)
  const isReadOnly = boolean('Read only', false)
  const isRequired = boolean('Required', false)
  const isOptional = boolean('Optional', true)

  const labelText = text('Label text', 'Example label')
  const inputText = text('Input value', 'Example input text')
  const placeholderText = text('Placeholder text', 'Example placeholder')
  const supportingText = text('Supporting text', 'Example supporting message')

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
                      <label class="${labelClasses}" for="input-empty">
                          ${
                            isRequired
                              ? '<abbr aria-hidden="true" class="required-indicator" title="Required">*</abbr>'
                              : ''
                          }
                          ${labelText}
                          ${isOptional & !isDisabled ? ' (optional)' : ''}
                          ${isDisabled ? ' (disabled)' : ''}
                      </label>
                      <input 
                          class="${inputClasses}" 
                          id="input-empty" 
                          name="input-empty" 
                          type="text"
                          ${isRequired ? 'required' : ''}
                          ${isDisabled ? 'disabled' : ''} 
                          ${isReadOnly ? 'readonly' : ''} 
                          placeholder="${placeholderText}"
                          value="${inputText}"
                          />
                      <strong class="${supportingTextClasses}">${supportingText}</strong>
                  </div>
          </fieldset>
      </form>
      `
}

textInputErrorAndRequired.story = {
  name: 'text input error and required',
}

export const textInputDisabled = () => {
  const isDarkTheme = boolean('Dark theme', false)
  const isErrorState = boolean('Error state', false)
  const isDisabled = boolean('Disabled', false)
  const isReadOnly = boolean('Read only', false)
  const isRequired = boolean('Required', false)
  const isOptional = boolean('Optional', true)

  const labelText = text('Label text', 'Example label')
  const inputText = text('Input value', 'Example input text')
  const placeholderText = text('Placeholder text', 'Example placeholder')
  const supportingText = text('Supporting text', 'Example supporting message')

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
                      <label class="${labelClasses}" for="input-empty">
                          ${
                            isRequired
                              ? '<abbr aria-hidden="true" class="required-indicator" title="Required">*</abbr>'
                              : ''
                          }
                          ${labelText}
                          ${isOptional & !isDisabled ? ' (optional)' : ''}
                          ${isDisabled ? ' (disabled)' : ''}
                      </label>
                      <input 
                          class="${inputClasses}" 
                          id="input-empty" 
                          name="input-empty" 
                          type="text"
                          ${isRequired ? 'required' : ''}
                          ${isDisabled ? 'disabled' : ''} 
                          ${isReadOnly ? 'readonly' : ''} 
                          placeholder="${placeholderText}"
                          value="${inputText}"
                          />
                      <strong class="${supportingTextClasses}">${supportingText}</strong>
                  </div>
          </fieldset>
      </form>
      `
}

textInputDisabled.story = {
  name: 'text input disabled',
}
