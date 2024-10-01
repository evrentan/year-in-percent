import timekeeper from 'timekeeper';
import CalculateYearCompletionPercentage from '../src/services/CalculateYearCompletionPercentage.js';

describe('CalculateYearCompletionPercentage', () => {
    let yearCompletion;

    beforeEach(() => {
        yearCompletion = new CalculateYearCompletionPercentage();
    });

    afterEach(() => {
        timekeeper.reset();
    });

    it('should calculate the percentage of the year completed correctly', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 5, 30, 12, 0, 0))); // June 30, 2024
        const now = new Date(Date.UTC(2024, 5, 30, 12, 0, 0)); // Use frozen date
        const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1)); // January 1, 2024
        const endOfYear = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1)); // January 1, 2025

        const totalMillisecondsInYear = endOfYear - startOfYear;
        const elapsedMilliseconds = now - startOfYear;

        const expectedPercentage = ((elapsedMilliseconds / totalMillisecondsInYear) * 100).toFixed(2);

        expect(yearCompletion.getYearCompletionPercentage()).toBe(expectedPercentage);
    });

    it('should return a string', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 5, 30, 12, 0, 0))); // June 30, 2024
        const result = yearCompletion.getYearCompletionPercentage();
        expect(typeof result).toBe('string');
    });

    it('should return a percentage between 0 and 100', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 5, 30, 12, 0, 0))); // June 30, 2024
        const result = parseFloat(yearCompletion.getYearCompletionPercentage());
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(100);
    });

    it('should return 0% at the start of the year', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 0, 1, 0, 0, 0))); // January 1, 2024
        expect(yearCompletion.getYearCompletionPercentage()).toBe('0.00');
    });

    it('should return 100% at the end of the year', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 11, 31, 23, 59, 59, 999))); // December 31, 2024
        expect(yearCompletion.getYearCompletionPercentage()).toBe('100.00');
    });

    it('should handle leap years correctly', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 1, 29, 12, 0, 0))); // February 29, 2024
        const now = new Date(Date.UTC(2024, 1, 29, 12, 0, 0)); // Use frozen date
        const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1)); // January 1, 2024
        const endOfYear = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1)); // January 1, 2025

        const totalMillisecondsInYear = endOfYear - startOfYear;
        const elapsedMilliseconds = now - startOfYear;

        const expectedPercentage = ((elapsedMilliseconds / totalMillisecondsInYear) * 100).toFixed(2);

        expect(yearCompletion.getYearCompletionPercentage()).toBe(expectedPercentage);
    });

    it('should return 50% on July 2', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 6, 2, 0, 0, 0))); // June 30, 2024
        expect(yearCompletion.getYearCompletionPercentage()).toBe('50.00');
    });

    it('should return a valid percentage for random dates', () => {
        timekeeper.freeze(new Date(Date.UTC(2024, 2, 15, 12, 0, 0))); // March 15, 2024
        const now = new Date(Date.UTC(2024, 2, 15, 12, 0, 0)); // Use frozen date
        const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1)); // January 1, 2024
        const endOfYear = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1)); // January 1, 2025

        const totalMillisecondsInYear = endOfYear - startOfYear;
        const elapsedMilliseconds = now - startOfYear;

        const expectedPercentage = ((elapsedMilliseconds / totalMillisecondsInYear) * 100).toFixed(2);

        expect(yearCompletion.getYearCompletionPercentage()).toBe(expectedPercentage);
    });
});
