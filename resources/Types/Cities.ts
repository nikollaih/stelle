// Define the interface for City
export type TCity = {
    id: number;
    name: string;
    state_id: number;
}

// Define the interface for Cities as an array of ICity objects
export type TCities = TCity[];
