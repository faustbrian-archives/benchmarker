import * as Benchmark from "benchmark";

interface IOptions extends Benchmark.Options {
	hideSummary: boolean;
}

function createBenchmark(title: string, scenarios: any[], options?: IOptions) {
	return function (name, next) {
		const suite = new Benchmark.Suite();
		const keys = Object.keys(scenarios);
		const total = keys.length;

		for (let i = 0; i < total; i++) {
			const key = keys[i];
			suite.add(key, scenarios[key], options);
		}

		suite.on("start", function () {
			console.log("  " + title);
		});

		suite.on("cycle", function (event) {
			console.log("    \033[0;32m✓\033[0m \033[0;37m " + event.target + "\033[0m");
		});

		suite.on("complete", function () {
			if (options && !options.hideSummary) {
				// @ts-ignore
				const slowest = this.filter("slowest")[0];
				// @ts-ignore
				let baselineSuite = this.shift();
				// @ts-ignore
				let MainSuite = this.shift();

				// In most benchmarks, the first entry is the native implementation and
				// the second entry is the main one. However, not all benchmarks have
				// a native baseline implementation (e.g. there is none for "clone").
				// In such a case, use the slowest benchmark result as a baseline.
				if (MainSuite.name.indexOf(name) !== 0) {
					if (total === 2 && slowest.name.indexOf(name) !== -1) {
						baselineSuite = MainSuite;
						MainSuite = slowest;
					} else {
						MainSuite = baselineSuite;
						baselineSuite = slowest;
					}
				}

				const diff = MainSuite.hz - baselineSuite.hz;
				let percentage: any = ((diff / baselineSuite.hz) * 100).toFixed(2);
				let relation = "faster";

				if (percentage < 0) {
					relation = "slower";
					percentage *= -1;
				}

				console.log(
					"\n    \033[0;37mResult:\033[0m utils \033[0;37mis\033[0m " +
						percentage +
						"% " +
						relation +
						" \033[0;37mthan\033[0m " +
						baselineSuite.name +
						".\n",
				);
			}

			next();
		});

		suite.run({
			async: true,
		});
	};
}

export function benchmarker(name, benchmarks, options) {
	for (let i = 0; i < benchmarks.length; i++) {
		benchmarks[i] = createBenchmark(benchmarks[i].name, benchmarks[i].scenarios, {
			...benchmarks[i].options,
			...options,
		});
	}

	let index = -1;

	const length = Object.keys(benchmarks).length;
	const startTime = Date.now();

	console.log("  \033[0;37mRunning " + length + " benchmarks, please wait...\033[0m\n");

	function continuation() {
		index++;

		if (index < length) {
			benchmarks[index](name, continuation);
		} else {
			const endTime = Date.now();
			const total = Math.ceil((endTime - startTime) / 1000);

			console.log("  \n\033[0;37mFinished in " + total + " seconds\033[0m\n");
		}
	}

	continuation();
}
