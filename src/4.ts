import { StateRevenue } from './types';
import { readFileSync } from 'fs';

// Load the JSON data from a file
const data: StateRevenue[] = JSON.parse(readFileSync('./data/state_revenue.json', 'utf8'));

/**
 * Calculate the percentage representation of each state's revenue.
 * @param {StateRevenue[]} data - Array of objects containing state revenue data.
 * @returns {Array} - Array of objects containing state and its percentage representation.
 */
function calculatePercentage(data: StateRevenue[]) {
    // Calculate the total revenue
    const totalRevenue = data.reduce((sum, state) => sum += state.revenue, 0);

    // Calculate the percentage representation for each state
    return data.map(state => ({
        state: state.state,
        percentage: ((state.revenue / totalRevenue) * 100).toFixed(2) + '%'
    }));
}

// Calculate and display the percentage representation for each state
const percentages = calculatePercentage(data);
percentages.forEach(state => {
    console.log(`${state.state}: ${state.percentage}`);
});
