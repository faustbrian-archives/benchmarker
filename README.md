# Benchmarker

[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/kodekeep/benchmarker/run-tests?label=tests)](https://github.com/kodekeep/benchmarker/actions?query=workflow%3Arun-tests+branch%3Amaster)
[![Code Coverage](https://badgen.net/codecov/c/github/kodekeep/benchmarker)](https://codecov.io/gh/kodekeep/benchmarker)
[![Minimum Node.js Version](https://badgen.net/npm/node/@kodekeep/benchmarker)](https://www.npmjs.com/package/@kodekeep/benchmarker)
[![Latest Version](https://badgen.net/npm/v/@kodekeep/benchmarker)](https://www.npmjs.com/package/@kodekeep/benchmarker)
[![Total Downloads](https://badgen.net/npm/dt/kodekeep/benchmarker)](https://npmjs.org/package/@kodekeep/benchmarker)
[![License](https://badgen.net/npm/license/kodekeep/benchmarker)](https://npmjs.org/package/@kodekeep/benchmarker)

> A wrapper around Benchmark.js that provides sane defaults and formatting

## Installation

```bash
$ yarn add @kodekeep/benchmarker --dev
```

## Usage

```ts
import { benchmarker } from "@kodekeep/benchmarker";

benchmarker("utils", [
	{
		name: "map",
		scenarios: require("./map"),
	},
	{
		name: "filter",
		scenarios: require("./filter"),
	},
	{
		name: "reduce",
		scenarios: require("./reduce"),
	},
]);
```

## Testing

```bash
$ yarn test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover a security vulnerability within this package, please send an e-mail to hello@kodekeep.com. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

Mozilla Public License Version 2.0 (MPL-2.0). Please see [License File](LICENSE.md) for more information.
