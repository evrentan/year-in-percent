# Year In Percent

![NPM Version](https://img.shields.io/npm/v/quote-guru)
![License](https://img.shields.io/npm/l/quote-guru)


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
const completionPercentage = yearCompletion.getYearCompletionPercentage();

console.log(`Year Completion: ${completionPercentage}%`);
```

### Example

To get the year completion percentage at a specific date:

```javascript
import timekeeper from 'timekeeper';
import CalculateYearCompletionProgress from 'year-completion-progress';

timekeeper.freeze(new Date('2024-06-30T12:00:00Z'));
const yearCompletion = new CalculateYearCompletionProgress();
const completionPercentage = yearCompletion.getYearPercentage();

console.log(`Year Completion on June 30, 2024: ${completionPercentage}%`);

timekeeper.reset();
```

## API

### `CalculateYearCompletionPercentage`

#### `getYearCompletionPercentage()`

Returns the percentage of the current year that has been completed as a string formatted to two decimal places.

**Returns:**

- A string representing the percentage (e.g., `"50.00"`).

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
