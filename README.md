# Year In Percent

![NPM Version](https://img.shields.io/npm/v/year-in-percent)
![License](https://img.shields.io/npm/l/year-in-percent)


Year In Percent is a lightweight, easy-to-use library that provides the current year's completion percentage. It calculates the percentage of the year that has passed based on the current date and time. Perfect for adding a touch of progress tracking to your apps, websites, or projects!

## Features

- Calculate the percentage of the current year that has been completed.
- Lightweight and easy to integrate.
- Returns a JSON object with the percentage, current date, start of the year, end of the year, total milliseconds in the year, and milliseconds elapsed in the year.

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

Returns a JSON object with the following properties:
  - `percentageCompleted`: A `string` representing the percentage (e.g., `"75.08"`).
  - `now`: A `date` object representing the current date and time.
  - `startOfYear`: A `date` object representing the start of the current year.
  - `endOfYear`: A `date` object representing the end of the current year.
  - `totalMillisecondsInYear`: A `number` representing the total milliseconds in the current year.
  - `millisecondsElapsedInYear`: A `number` representing the milliseconds elapsed since the start of the year.

**Example Response:**

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

## Setup on Your Local Machine

To set up the project on your local machine, follow these steps:

Clone the repository:

```bash
git clone git@github.com:evrentan/year-in-percent.git
```

Navigate to the project directory:

```bash
cd year-in-percent
```

Install the dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Test the project:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/yourFeature`).
3. Commit your changes (`git commit -m 'feat(Feature): Add some Feature'`).
4. Push to the branch (`git push origin feature/yourFeature`).
5. Open a pull request.

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
