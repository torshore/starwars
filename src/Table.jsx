import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
    const characters = useSelector(state => state.characters);
    const ships = useSelector(state => state.ships);
    const copyRowData = characters && characters.concat();
    ships && ships.map((ship, shipIndex) => {
        return copyRowData.splice((shipIndex + 1) * 3 - 1, 0, ship);
    });

    return <div className="table">
        <table>
            <thead>
                <tr>
                    <th className="-tiny"></th>
                    <th>Name</th>
                    <th>BirthYear</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th className="-tiny"></th>
                </tr>
            </thead>
            <tbody>
                {copyRowData && copyRowData.map((row, rowIndex) =>
                    <tr key={rowIndex}>
                        <td>{row.name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>;
}

export default Table;
