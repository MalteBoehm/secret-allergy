import React from "react";

import GreenBarRating from "./RatingComponents/GreenBarRating";
import LightGreenBarRating from "./RatingComponents/LightGreenBarRating";
import YellowBarRating from "./RatingComponents/YellowBarRating";
import OrangeBarRating from "./RatingComponents/OrangeBarRating";
import RedBarRating from "./RatingComponents/RedBarRating";

export default function DashboardBarSideEffectsRating({ rating }) {
    function CurrentRating(rating) {
        if (rating <= 3) {
            return <GreenBarRating />;
        }
        if (rating > 3 && rating <= 4) {
            return <LightGreenBarRating />;
        }
        if (rating > 4 && rating <= 6) {
            return <YellowBarRating />;
        }
        if (rating > 6 && rating <= 8) {
            return <OrangeBarRating />;
        }
        if (rating > 8) {
            return <RedBarRating />;
        }
    }

    return CurrentRating(rating);
}

