import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { css } from 'emotion';

const headerCellCSS = css`
    width: 25%;
    border: none;
    padding: 20px 10px;
    text-align: left;
    line-height: 16px;
    font-size: 14px;
    vertical-align: middle;
`;

const bodyCellCSS = css`
    width: 25%;
    padding: 15px 10px;
    overflow: hidden;
    line-height: 16px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

function Table() {
    const [ currentPage, setCurrentPage ] = useState(0);
    const characters = useSelector(state => state.characters);
    const ships = useSelector(state => state.ships);
    const rowData = characters && characters.concat();
    ships && ships.map((ship, shipIndex) => {
        return rowData.splice((shipIndex + 1) * 8 - 1, 0, ship);
    });

    const handleDirectionClicked = (direction) => {
        return setCurrentPage(prevState =>
            prevState + direction
        );
    };

    const renderCurrentPage = (rows) => {
        const pageSize = 8;
        const currentPageData = rows.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

        return currentPageData.map((row, rowIndex) =>
            <tr
                key={rowIndex}
                className={css`
                    &[data-is-light=true] {
                        background: #163c8e;
                    }
                `}
                data-is-light={rowIndex % 2 === 0}
            >
                <td className={bodyCellCSS}>{row.name}</td>
                <td className={bodyCellCSS}>{row.birth_year || ''}</td>
                <td className={bodyCellCSS}>{row.height || ''}</td>
                <td className={bodyCellCSS}>{row.mass || ''}</td>
            </tr>
        );
    };

    const renderPageNavigation = () => {
        return <div className={css`
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            background: white;
            color: black;
        `}>
            <button
                disabled= {currentPage === 0}
                onClick={() => handleDirectionClicked(-1)}
            >
                Prev
            </button>
            <button
                disabled={(currentPage + 1) === Math.ceil((rowData.length + 1) / 8)}
                onClick={() => handleDirectionClicked(1)}
            >
                Next
            </button>
        </div>;
    };

    return <div className={css`
        width: 100%;
        height: 100%;
    `}>
        <table className={css`
            flex: 1;
            table-layout: fixed;
            width: 100%;
            height: 80%;
            border-spacing: 0;
            border-collapse: collapse;
        `}>
            <thead className={css`
                border: 1px solid #656565;
                border-radius: 10px;
                background-color: #741018;
            `}>
                <tr>
                    <th className={headerCellCSS}>Name</th>
                    <th className={headerCellCSS}>Birth Year</th>
                    <th className={headerCellCSS}>Height</th>
                    <th className={headerCellCSS}>Mass</th>
                </tr>
            </thead>

            <tbody className={css`
                border: 1px solid #656565;
                width: 100%;
                height: 100%;
            `}>
                {renderCurrentPage(rowData)}
            </tbody>
        </table>

        {renderPageNavigation()}
    </div>;
}

export default Table;
