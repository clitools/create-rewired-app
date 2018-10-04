import writeFile from './writeFile';

export default (pathname, content, ...args) => writeFile(pathname, JSON.stringify(content, null, '  '), ...args);
