import React from "react";
import { BuyRating } from "@tstypes/index";
import { BUY_RATING } from "@constants/app/constants";

const AtomAiBuyRating: React.FC<{ buyRating: BuyRating}> = ({ buyRating }) => {

    let textColor = '';   
    
    switch (buyRating) {
        case BUY_RATING.STRONG_BUY:
            textColor = 'text-green-500';
            break;
        case BUY_RATING.BUY:
            textColor = 'text-green-500';
            break;
        case BUY_RATING.HOLD:
            textColor = 'text-blue-500';
            break;
        case BUY_RATING.SELL:
            textColor = 'text-red-500';
            break;
        case BUY_RATING.STRONG_SELL:
            textColor = 'text-red-500';
            break;
      default:
        textColor = 'text-gray-500';
    }

    return (
        <>
            <div className={`text-center m-3 text-xl font-semibold ${textColor}`}>
                <p>Buy Rating: <span className="font-bold">{buyRating}</span></p>
            </div>
        </>
    )
}

export default AtomAiBuyRating
