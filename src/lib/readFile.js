import fs from 'fs';

export default (pathname, ...args) => new Promise(
	(resolve, reject) => fs.readFile(pathname, ...args,
		(err, ...res) => {
			if (err) {
				reject(err);
			} else {
				resolve(...res);
			}
		}
	)
)
