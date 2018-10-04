import path from 'path';
import exec from './lib/exec';
import readJson from './lib/readJson';
import writeFile from './lib/writeFile';
import writeJson from './lib/writeJson';

// get the target directory
const dir = process.argv[2];

// format all of the arguments for create-react-app
const args = process.argv.slice(2).map(
	arg => `"${arg.replace(/"/g, "\\\"")}"`
).join('');

const main = async () => {
	try {
		// execute create-react-app
		const response = await exec(`npx create-react-app ${args}`);

		// install react-app-rewired
		await exec(`npm install --save react-app-rewired`, { cwd: dir });

		// update package.json to replace react-scripts with react-app-rewired
		const pkg = await readJson(path.join(dir, 'package.json'));

		Object.keys(pkg.scripts).forEach(key => {
			pkg.scripts[key] = pkg.scripts[key].replace('react-scripts', 'react-app-rewired');
		});

		await writeJson(path.join(dir, 'package.json'), pkg);

		// add a config-overrides.js file
		await writeFile(path.join(dir, 'config-overrides.js'), 'module.exports = (config, env) => {};');

		// log the response from create-react-app
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

main();
