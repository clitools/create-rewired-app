import child_process from 'child_process';

export default (command, options) => new Promise(
	(resolve, reject) => {
		try {
			const result = child_process.execSync(
				command,
				Object.assign({ stdio: ['pipe', 'pipe', process.stderr] }, options)
			);

			resolve(result.toString());
		} catch (error) {
			reject(error);
		}
	}
);
