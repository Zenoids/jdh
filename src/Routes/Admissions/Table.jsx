import React from 'react'

function Table(props) {
  return (
   <>
  
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-3/5 border-b border-r border-l border-2 border-black  mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Year Group
                </th>
                <th scope="col" class="px-6 py-3">
                    Monthly
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Termly
                </th>
                <th scope="col" class="px-6 py-3">
                    Anually
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {props.found1}
                </th>
                <td class="px-6 py-4">
                    {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.termfee}
                </td>
                <td class="px-6 py-4">
                {props.yearfee}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                   {props.found2}
                </th>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.monfee}
                </td>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {props.first}
                </th>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.monfee}
                </td>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                   {props.second}
                </th>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.monfee}
                </td>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {props.third}
                </th>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.monfee}
                </td>
                <td class="px-6 py-4">
                {props.monfee}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {props.fourth}
                </th>
                <td class="px-6 py-4">
                    {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.termfee}
                </td>
                <td class="px-6 py-4">
                {props.yearfee}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {props.fifth}
                </th>
                <td class="px-6 py-4">
                    {props.monfee}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {props.termfee}
                </td>
                <td class="px-6 py-4">
                {props.yearfee}
                </td>
            </tr>
           
        </tbody>
    </table>
</div>

   </>
  )
}

export default Table