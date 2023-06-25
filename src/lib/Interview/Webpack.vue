<template>
  <PageTitle text="Webpack-问题" />
  <PageContent>
    <h3>概念：</h3>
    <p>
      webpack本质上就是一个现代js静态模块打包器，在webpack处理项目代码时，它会递归的构建一个依赖关系图，这个依赖关系图对应映射到项目需要的每个模块，生成一个或者多个包。
    </p>
    <h3>实现目标：</h3>
    <p>
      webpack最初的目标是实现前端项目模块化，更加高效的管理和维护项目中的每一个资源。
    </p>
    <h3>模块化</h3>
    <p>
      最早的时候，通过文件划分的方式将每个功能及相关状态数据各自单独放到不同的js文件中，约定好每个文件是一个独立的模块，然后使用script标签引入，达到模块化调用。<br /><br />
      缺陷：<br />
      弊端很明显，所有的模块都在全局中工作，大量模块成员污染了环境，模块与模块之间没有依赖关系、维护困难、没有私有空间等。<br />
      后面出现的两种解决方案是：<br />
      命名空间式：规定每个模块都只暴露一个全局对象，模块所有的内容都挂载到这个对象上。<br />
      立即执行函数：利用立即执行函数创建私有空间 但都没有很好的解决上述问题。
    </p>
    <h3>loader的作用：</h3>
    <p>
      在webpack内部任何文件都是模块，在默认情况下加载模块的时候webpack只支持对js和json文件进行打包，但是如果遇到了css，sass，less，png等类型文件的时候，webpack则无能为力了，这时候就需要配置对应的loader进行文件内容的解析。
    </p>
    <h3>常用的loader：</h3>
    <p>
      1、style-loader: 将css添加到DOM的内联样式标签style里<br />
      2、css-loader :允许将css文件通过require的方式引入，并返回css代码<br />
      3、less-loader: 处理less <br />
      4、sass-loader: 处理sass <br />
      5、postcss-loader: css样式后处理工具，css压缩、合并、自动兼容浏览器<br />
      6、file-loader: 分发文件到output目录并返回相对路径<br />
      7、url-loader:
      和file-loader类似，但是当文件小于设定的limit时会转化为base64的数据，替换URL引入<br />
      8、html-minify-loader: 压缩HTML <br />
      9、babel-loader :用babel来转换ES6文件到ES
    </p>
    <p>
      file-loader：<br />
      把识别的资源文件，移动到指定的输出目录，并且返回、修改这个资源在输出目录的地址。
    </p>
    <p>
      <strong>plugin：</strong><br />
      目的是为了解决loader无法实现的事，比如打包优化，资源管理，环境变量注入等<br />
      常用的是：<br />
      ◦
      html-webpack-plugin：主要的功能是生成html文件，并插入我们构建出来的JS与css资源。<br />
      ◦
      mini-css-extract-plugin：抽离css文件，需要注意的是要在loader使用MiniCssExtractPlugin.loader替换style-loader。
    </p>
  </PageContent>
</template>
