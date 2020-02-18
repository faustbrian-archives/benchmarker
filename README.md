# Benchmarker

[![Latest Version](https://badgen.net/npm/v/@kodekeep/benchmarker)](https://npmjs.com/package/@kodekeep/benchmarker)
[![Software License](https://badgen.net/npm/license/@kodekeep/benchmarker)](https://npmjs.com/package/@kodekeep/benchmarker)
[![Build Status](https://img.shields.io/github/workflow/status/kodekeep/benchmarker/run-tests?label=tests)](https://github.com/kodekeep/benchmarker/actions?query=workflow%3Arun-tests+branch%3Amaster)
[![Coverage Status](https://badgen.net/codeclimate/coverage/kodekeep/benchmarker)](https://codeclimate.com/github/kodekeep/benchmarker)
[![Quality Score](https://badgen.net/codeclimate/maintainability/kodekeep/benchmarker)](https://codeclimate.com/github/kodekeep/benchmarker)
[![Total Downloads](https://badgen.net/npm/dt/kodekeep/benchmarker)](https://npmjs.com/package/@kodekeep/benchmarker)

This package was created by, and is maintained by [Brian Faust](https://github.com/faustbrian), and provides a wrapper around Benchmark.js with sane defaults and formatting.

## Installation

```bash
yarn add @kodekeep/benchmarker --dev
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
yarn test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover a security vulnerability within this package, please send an e-mail to hello@kodekeep.com. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## Support Us

We invest a lot of resources into creating and maintaining our packages. You can support us and the development through [GitHub Sponsors](https://github.com/sponsors/faustbrian).

## License

Benchmarker is an open-sourced software licensed under the [MPL-2.0](LICENSE.md).
