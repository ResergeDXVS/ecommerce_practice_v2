import React from "react";
interface HistoricalProps {
    new_status: string,
    datetime: string,
};

const Historical = ({new_status, datetime}:HistoricalProps) =>{
    return (
        <tr>
            <td>{new_status}</td>
            <td>{datetime}</td>
        </tr>
    );
}

export default Historical;