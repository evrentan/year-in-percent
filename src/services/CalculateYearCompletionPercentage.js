class CalculateYearCompletionPercentage {
    /**
     * Calculate the percentage of the year that has been completed.
     * @returns {string} - The percentage of the year completed (0-100).
     */
    getYearCompletionPercentage() {
        const now = new Date();
        const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1, 0, 0, 0));
        const endOfYear = new Date(Date.UTC(now.getUTCFullYear(), 11, 31, 23, 59, 59));

        const totalMillisecondsInYear = endOfYear - startOfYear;
        const elapsedMilliseconds = now - startOfYear;

        const percentage = (elapsedMilliseconds / totalMillisecondsInYear) * 100;

        return percentage.toFixed(2);
    }
}

export default CalculateYearCompletionPercentage;
