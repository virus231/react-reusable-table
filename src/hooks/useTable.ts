import React from 'react';

type Props = {
    columns: any,
    data: any,
    pagination?: any
}

const useTable = ({columns,data, pagination}: Props) => {
    const [pageIndex, setPageIndex] = React.useState(0)

    const headers = columns.map(({label}: any) => label)

    const allRows = data.map((dataRow: any) => {
        return columns.map(({accessor}: any) => {
            const renderedValue = typeof accessor === 'function' ? accessor(dataRow) : dataRow[accessor]
            return {renderedValue}
        })
    })

    const rows = pagination
        ? allRows.slice(pageIndex * pagination.pageSize, (pageIndex + 1) * pagination.pageSize)
        : allRows

    console.log(rows)

    const nextPage = () => setPageIndex(pageIndex + 1)
    const previousPage = () => setPageIndex(pageIndex - 1)

    return {
        headers,
        rows,
        pagination : {
            nextPage,
            pageNumber: pageIndex + 1,
            previousPage,
            totalPages: pagination ? Math.ceil(allRows.length / pagination.pageSize) : 1}
        }

}

export default  useTable