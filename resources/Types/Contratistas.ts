import {TProfile} from "./Profile";
import React from "react";

export type EditContratistaType = { data: TProfile, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {}, setInitialData: (profile: TProfile) => {} }
