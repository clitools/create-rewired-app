import readFile from './readFile';

export default (pathname, ...args) => readFile(pathname, ...args).then(
	content => JSON.parse(content)
);
