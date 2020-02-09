import DarkBackgroundDecorator from '../../../../.storybook/decorators/DarkBackgroundDecorator'

import docs from './typography.docs.mdx'

export default {
  title: 'Foundations|Typography/Scale',
  parameters: { docs: { page: docs } },
}

export const scale = () => {
  return `
    <table class="table">
      <thead class="table__head">
        <tr class="table__row">
          <th scope="col" class="table__cell table__cell--head">Name</th>
          <th scope="col" class="table__cell table__cell--head">Usage</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-watermelon" scope="row">
            Watermelon
          </th>
          <td class="table__cell">
            <pre>.t-scale-watermelon</pre>
            <pre>@include typography(scale, watermelon);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-pineapple" scope="row">
            Pineapple
          </th>
          <td class="table__cell">
            <pre>.t-scale-pineapple</pre>
            <pre>@include typography(scale, pineapple);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-grapefruit" scope="row">
            Grapefruit
          </th>
          <td class="table__cell">
            <pre>.t-scale-grapefruit</pre>
            <pre>@include typography(scale, grapefruit);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-mango" scope="row">
            Mango
          </th>
          <td class="table__cell">
            <pre>.t-scale-mango</pre>
            <pre>@include typography(scale, mango);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-banana" scope="row">
            Banana
          </th>
          <td class="table__cell">
            <pre>.t-scale-banana</pre>
            <pre>@include typography(scale, banana);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-orange" scope="row">
            Orange
          </th>
          <td class="table__cell">
            <pre>.t-scale-orange</pre>
            <pre>@include typography(scale, orange);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-apple" scope="row">
            Apple
          </th>
          <td class="table__cell">
            <pre>.t-scale-apple</pre>
            <pre>@include typography(scale, apple);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-peach" scope="row">
            Peach
          </th>
          <td class="table__cell">
            <pre>.t-scale-peach</pre>
            <pre>@include typography(scale, peach);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-pear" scope="row">
            Pear
          </th>
          <td class="table__cell">
            <pre>.t-scale-pear</pre>
            <pre>@include typography(scale, pear);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-kiwi" scope="row">
            Kiwi
          </th>
          <td class="table__cell">
            <pre>.t-scale-kiwi</pre>
            <pre>@include typography(scale, kiwi);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-strawberry" scope="row">
            Strawberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-strawberry</pre>
            <pre>@include typography(scale, strawberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-blackberry" scope="row">
            Blackberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-blackberry</pre>
            <pre>@include typography(scale, blackberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-raspberry" scope="row">
            Raspberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-raspberry</pre>
            <pre>@include typography(scale, raspberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-cranberry" scope="row">
            Cranberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-cranberry</pre>
            <pre>@include typography(scale, cranberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-blueberry" scope="row">
            Blueberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-blueberry</pre>
            <pre>@include typography(scale, blueberry);</pre>
          </td>
        </tr>
      </tbody>
    </table>
  `
}
scale.story = {
  name: 'Scale - default',
}

export const scaleDark = () => {
  return `
    <table class="table table--dark">
      <thead class="table__head">
        <tr class="table__row">
          <th scope="col" class="table__cell table__cell--head">Name</th>
          <th scope="col" class="table__cell table__cell--head">Usage</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-watermelon-dark" scope="row">
            Watermelon
          </th>
          <td class="table__cell">
            <pre>.t-scale-watermelon</pre>
            <pre>@include typography(scale, watermelon);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-pineapple-dark" scope="row">
            Pineapple
          </th>
          <td class="table__cell">
            <pre>.t-scale-pineapple</pre>
            <pre>@include typography(scale, pineapple);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-grapefruit-dark" scope="row">
            Grapefruit
          </th>
          <td class="table__cell">
            <pre>.t-scale-grapefruit</pre>
            <pre>@include typography(scale, grapefruit);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-mango-dark" scope="row">
            Mango
          </th>
          <td class="table__cell">
            <pre>.t-scale-mango</pre>
            <pre>@include typography(scale, mango);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-banana-dark" scope="row">
            Banana
          </th>
          <td class="table__cell">
            <pre>.t-scale-banana</pre>
            <pre>@include typography(scale, banana);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-orange-dark" scope="row">
            Orange
          </th>
          <td class="table__cell">
            <pre>.t-scale-orange</pre>
            <pre>@include typography(scale, orange);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-apple-dark" scope="row">
            Apple
          </th>
          <td class="table__cell">
            <pre>.t-scale-apple</pre>
            <pre>@include typography(scale, apple);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-peach-dark" scope="row">
            Peach
          </th>
          <td class="table__cell">
            <pre>.t-scale-peach</pre>
            <pre>@include typography(scale, peach);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-pear-dark" scope="row">
            Pear
          </th>
          <td class="table__cell">
            <pre>.t-scale-pear</pre>
            <pre>@include typography(scale, pear);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-kiwi-dark" scope="row">
            Kiwi
          </th>
          <td class="table__cell">
            <pre>.t-scale-kiwi</pre>
            <pre>@include typography(scale, kiwi);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-strawberry-dark" scope="row">
            Strawberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-strawberry</pre>
            <pre>@include typography(scale, strawberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-blackberry-dark" scope="row">
            Blackberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-blackberry</pre>
            <pre>@include typography(scale, blackberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-raspberry-dark" scope="row">
            Raspberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-raspberry</pre>
            <pre>@include typography(scale, raspberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-cranberry-dark" scope="row">
            Cranberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-cranberry</pre>
            <pre>@include typography(scale, cranberry);</pre>
          </td>
        </tr>
        <tr class="table__row">
          <th class="table__cell table__cell--head t-scale-blueberry-dark" scope="row">
            Blueberry
          </th>
          <td class="table__cell">
            <pre>.t-scale-blueberry</pre>
            <pre>@include typography(scale, blueberry);</pre>
          </td>
        </tr>
      </tbody>
    </table>
  `
}

scaleDark.story = {
  name: 'Scale - Dark',
  decorators: [DarkBackgroundDecorator],
}
