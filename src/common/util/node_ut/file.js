import path from 'path';
// const fileReader = new FileReader();
// const file = new File();
// const lessFileUrl = '@common/style/variables.less';

// let result = fileReader.readAsText(lessFileUrl, 'utf8');

// fs 是 nodejs 服务端的模块，用来开发 web api 时使用的，
// vue 属于前端框架运行在浏览器环境中，在浏览器环境中时没有 fs 模块的，所以会输出空对象；

function resolvePath (dir) {
    return path.resolve(__dirname, dir)
};

export {
    resolvePath,
};
