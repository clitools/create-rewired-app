import fs from 'fs';

export default (pathname, ...args) => new Promise(
	(resolve, reject) => fs.writeFile(pathname, ...args,
		(err, ...res) => {
			if (err) {
				reject(err);
			} else {
				resolve(...res);
			}
		}
	)
);
