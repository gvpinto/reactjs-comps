import { Fragment } from "react";

function Table({ data, config, keyFn }) {

    // Render Headers
    const renderedHeaders = config.map((column) => {

        // Fragment is a placeholder component provided by react when there is need 
        // where a real component or html tag cannot be used
        if (column.header) {
            return (<Fragment key={column.label}>{column.header()}</Fragment>);
        } else {
            return (<th key={column.label}>{column.label}</th>);
        }

    });

    // Render Rows
    const renderedRows = data.map(rowData => {

        // Render Cells
        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    // Render Table
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;