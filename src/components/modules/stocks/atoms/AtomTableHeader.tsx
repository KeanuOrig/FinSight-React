import React from "react";
import { MessageProps } from "@tstypes/index";

const AtomTableHeader: React.FC<MessageProps> = ({ message }) => {
      
    return (
        <>
            <th scope="col" className="px-6 py-4 text-left">{message}</th>
        </>
    )
}

export default AtomTableHeader
