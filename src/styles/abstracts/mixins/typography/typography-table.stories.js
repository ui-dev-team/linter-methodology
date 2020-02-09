import DarkBackgroundDecorator from '../../../../.storybook/decorators/DarkBackgroundDecorator'

import docs from './typography.docs.mdx'

export default {
  title: 'Foundations|Typography/Table',
  parameters: { docs: { page: docs } },
}

export const table = () => {
  return `
    <table class="table">
      <thead class="table__head">
        <tr class="table__row">
          <th scope="col" class="table__cell table__cell--head">Name</th>
          <th scope="col" class="table__cell table__cell--head">Number example</th>
          <th scope="col" class="table__cell table__cell--head">Usage</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__row">
          <th class="table__cell table__cell--head t-table-header">
            Table header
          </th>
          <td class="table__cell t-table-header">
            <p>012345789</p>
            <p>12,345,678.90</p>
            <p>55,555,555.55</p>
          </td>
          <td class="table__cell">
            <pre>.t-table-header</pre>
            <pre>@include typography(table, header);</pre>
          </td>
        </tr>
          <tr class="table__row">
          <th class="table__cell t-table-cell">
            Table cell
          </th>
          <td class="table__cell t-table-cell">
            <p>012345789</p>
            <p>12,345,678.90</p>
            <p>55,555,555.55</p>
          </td>
          <td class="table__cell">
            <pre>.t-table-cell</pre>
            <pre>@include typography(table, cell);</pre>
          </td>
        </tr>
      </tbody>
    </table>
  `
}
table.story = {
  name: 'Table',
}

export const tableDark = () => {
  return `
    <table class="table table--dark">
      <thead class="table__head">
        <tr class="table__row">
          <th scope="col" class="table__cell table__cell--head">Name</th>
          <th scope="col" class="table__cell table__cell--head">Number example</th>
          <th scope="col" class="table__cell table__cell--head">Usage</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__row">
          <th class="table__cell table__cell--head t-table-header-dark">
            Table header
          </th>
          <td class="table__cell t-table-header-dark">
            <p>012345789</p>
            <p>12,345,678.90</p>
            <p>55,555,555.55</p>
          </td>
          <td class="table__cell">
            <pre>.t-table-header-dark</pre>
            <pre>@include typography(table, header, $theme: dark);</pre>
          </td>
        </tr>
          <tr class="table__row">
          <th class="table__cell t-table-cell-dark">
            Table cell
          </th>
          <td class="table__cell t-table-cell-dark">
            <p>012345789</p>
            <p>12,345,678.90</p>
            <p>55,555,555.55</p>
          </td>
          <td class="table__cell">
            <pre>.t-table-cell-dark</pre>
            <pre>@include typography(table, cell, $theme: dark);</pre>
          </td>
        </tr>
      </tbody>
    </table>
  `
}

tableDark.story = {
  name: 'Table - Dark',
  decorators: [DarkBackgroundDecorator],
}
