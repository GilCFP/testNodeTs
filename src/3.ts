import { Revenue } from './types';
import { readFileSync } from 'fs';

// Load the JSON data from a file
const data: Revenue[] = JSON.parse(readFileSync('./data/revenue.json', 'utf8'));

/**
 * Calculate metrics from the revenue data.
 * @param {Revenue[]} data - Array of objects containing daily revenue and store status.
 * @returns {Object} - Object containing minRevenue, maxRevenue, and daysAboveAverage.
 */
function calculateMetrics(data: Revenue[]) {
    // Filter out days when the store was closed or had no revenue
    const filteredData = data.filter(day => day.storeHasOpen && day.revenue > 0);

    // Calculate total revenue and number of revenue days
    const totalRevenue = filteredData.reduce((sum, day) => sum += day.revenue, 0);
    const revenueDays = filteredData.length;

    // Find the minimum and maximum revenue
    const minRevenue = Math.min(...filteredData.map(day => day.revenue));
    const maxRevenue = Math.max(...filteredData.map(day => day.revenue));

    // Calculate the average revenue
    const averageRevenue = totalRevenue / revenueDays;

    // Count the number of days with revenue above the average
    const daysAboveAverage = filteredData.filter(day => day.revenue > averageRevenue).length;

    return {
        minRevenue,
        maxRevenue,
        daysAboveAverage
    };
}

// Calculate and display the metrics
const metrics = calculateMetrics(data);
console.log(`Menor valor de faturamento: ${metrics.minRevenue}`);
console.log(`Maior valor de faturamento: ${metrics.maxRevenue}`);
console.log(`Número de dias com faturamento acima da média: ${metrics.daysAboveAverage}`);
