import React from "react";
import { MessageProps } from "@tstypes/index";

const AtomTableData: React.FC<MessageProps> = ({ message }) => {
      
    return (
        <>
            <td className="px-6 py-4 text-sm">{message}</td>
        </>
    )
}

export default AtomTableData
