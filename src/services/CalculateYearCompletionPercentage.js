class CalculateYearCompletionPercentage {
    /**
     * Calculate the percentage of the year that has been completed.
     * @returns {{percentageCompleted: string, now: Date, startOfYear: Date, endOfYear: Date, totalMillisecondsInYear: number, elapsedMillisecondsInYear: number}}
     */
    getYearCompletionPercentage() {
        const now = new Date();
        const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1, 0, 0, 0));
        const endOfYear = new Date(Date.UTC(now.getUTCFullYear(), 11, 31, 23, 59, 59));

        const totalMillisecondsInYear = endOfYear - startOfYear;
        const elapsedMilliseconds = now - startOfYear;

        const percentage = ((elapsedMilliseconds / totalMillisecondsInYear) * 100).toFixed(2);

        return {
            percentageCompleted: percentage,
            now: now,
            startOfYear: startOfYear,
            endOfYear: endOfYear,
            totalMillisecondsInYear: totalMillisecondsInYear,
            elapsedMillisecondsInYear: elapsedMilliseconds
        }
    }
}

export default CalculateYearCompletionPercentage;
