# Year In Percent

![NPM Version](https://img.shields.io/npm/v/year-in-percent)
![License](https://img.shields.io/npm/l/year-in-percent)


Year In Percent is a lightweight, easy-to-use library that provides the current year's completion percentage. It calculates the percentage of the year that has passed based on the current date and time. Perfect for adding a touch of progress tracking to your apps, websites, or projects!

## Features

- Calculate the percentage of the current year that has been completed.
- Lightweight and easy to integrate.

## Installation

You can install the package via npm:

```bash
npm install year-in-percent
```

## Usage

Here's how to use the Year In Percent in your project:

```javascript
import { CalculateYearCompletionPercentage } from 'year-in-percent';

// Create an instance of the calculator
const yearCompletion = new CalculateYearCompletionPercentage();

// Get the current year completion percentage
const result = yearCompletion.getYearCompletionPercentage();

console.log(result);
console.log(`Year completion: ${result.percentageCompleted}%`);
```

### Methods

#### `getYearCompletionPercentage()`

Returns the percentage of the current year that has been completed as a string formatted to two decimal places.

**Returns:**

- A JSON object with the following properties:
  - `percentageCompleted`: A string representing the percentage (e.g., `"50.00"`).
  - `now`: A `Date` object representing the current date and time.
  - `startOfYear`: A `Date` object representing the start of the current year.
  - `endOfYear`: A `Date` object representing the end of the current year.
  - `totalMillisecondsInYear`: A number representing the total milliseconds in the current year.
  - `millisecondsElapsedInYear`: A number representing the milliseconds elapsed since the start of the year.

**Example:**

```json
{
    "percentageCompleted": "75.08",
    "now": "2024-10-01T18:35:52.654Z",
    "startOfYear": "2024-01-01T00:00:00.000",
    "endOfYear": "2024-12-31T23:59:59.000Z",
    "totalMillisecondsInYear": 31622399000,
    "millisecondsElapsedInYear": 23740552654
}
```

## Tests

This package includes unit tests using Jest. To run the tests, make sure you have Jest installed and run:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a suggestion for improvement.

## License

This project is licensed under the [ISC License](LICENSE).

## About

This library was created to help developers easily calculate the progress of the current year. If you have any questions or suggestions, feel free to reach out!

## Sponsoring

If you enjoy this project and would like to support its development, please consider sponsoring. Your support helps me continue improving and maintaining the project.

You can sponsor me via:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-blue?style=for-the-badge&logo=github)][github-sponsors-url]

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee)][buy-me-a-coffee-url]

Thank you for your support!


[github-sponsors-url]: https://github.com/sponsors/evrentan
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/evrentan
