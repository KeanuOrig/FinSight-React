import React from "react";
import { LinkProps } from "@tstypes/index";
import { Link } from "react-router-dom";
import AtomButton from "@components/global/atoms/AtomButton";

const AtomButtonLink: React.FC<LinkProps> = ({ to, label }) => {
      
    return (
        <>
            <td className="text-left text-xs">
                <Link to={to} className="hover:text-gray-300">
                    <AtomButton text={label} color="blue"/>
                </Link>
            </td>
        </>
    )
}

export default AtomButtonLink
