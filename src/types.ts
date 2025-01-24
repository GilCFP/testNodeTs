// Type for individual daily revenue data
export interface Revenue {
    day: number;
    revenue: number;
    storeHasOpen: boolean;
}

// Type for state revenue data
export interface StateRevenue {
    state: string;
    revenue: number;
}
