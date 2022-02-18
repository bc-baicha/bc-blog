<template>
  <Pagetitle text="npm,yarn,cnpm基本学习" />
  <Pagecontent>
    <h4>首先简单的了解下：</h4>
    <ul>
      <li>
        <p>
          npm是nodejs官方提供的包管理工具，它已经成为了nodejs包的标准发布平台，用于nodejs包的发布、传播、依赖控制，使你可以方便的下载、安装、升级、删除包，也可以让你作为开发者发布并维护包。
        </p>
      </li>
      <li>
        <p>
          cnpm就是淘宝的前端开发者开源的nodejs的包管理工具，因为谷歌安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果谷歌的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事来自官网：“这是一个完整http://npmjs.org镜像，你可以用此代替官方版本（只读），同步频率目前为10分钟一次以保证尽量与官方服务同步“。
        </p>
      </li>
      <li>
        <p>
          Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS
          包管理工具 ，正如官方文档中写的，Yarn 是为了弥补 npm
          的一些缺陷而出现的，所以在node_modules目录结构跟npm一致，而且安装速度很快，yarn在Windows下会有一点点的兼容性问题，好处是yarn开发节奏很快，问题可以得到很快的解决。
        </p>
      </li>
    </ul>
    <h3>下面是上述三个简单的使用命令：</h3>
    <h4>cnpm基本命令:</h4>
    <ul>
      <li>
        npm install cnpm -g --registry=https://registry.npm.taobao.org
        ---安装cnpm
      </li>
      <li>npm config get registry ---查看正在使用的镜像地址</li>
      <li>
        npm config set registry https://registry.npm.taobao.org
        ---设置新镜像地址
      </li>
      <li>cnpm其它的命令跟npm一样</li>
    </ul>
    <h4>npm常使用的命令：</h4>
    <p>1、安装包（如果没有指定版本号，那么安装最新版本）</p>
    <Tagtext>
      npm install -g 包名称（全局安装）<br />
      npm install 包名称（本地安装）
    </Tagtext>
    <p>2、安装包的时候可以指定版本</p>
    <Tagtext> npm install -g 包名称@版本号 </Tagtext>
    <p>3、卸载包</p>
    <Tagtext>npm uninstall -g 包名称 </Tagtext>
    <p>4、更新包（更新到最新版本）</p>
    <Tagtext>npm update -g 包名称 </Tagtext>
    <h4>环境配置简述：</h4>
    <p>
      开发环境（平时开发使用的环境）<br />
      生产环境（项目部署上线之后的服务器环境）<br />
      --save 向生产环境添加依赖 dependencies<br />
      --save-dev 向开发环境添加依赖 devDependencies
    </p>
    <Tablevue>
      <tr>
        <th>npm init</th>
        <td>
          初始化一个简单的package.json文件，执行该命令后终端会依次询问 name,
          version, description 等字段
        </td>
      </tr>
      <tr>
        <th>npm init --yes|-y</th>
        <td>作用同上，偷懒不用一直按enter</td>
      </tr>
      <tr>
        <th>npm inistall packageName</th>
        <td>
          1、安装模块到项目node_modules目录下<br />
          2、不会讲模块依赖写入DevDependencies或者dependencies节点。<br />
          3、运行npm install 初始化项目时不会下载模块。
        </td>
      </tr>
      <tr>
        <th>npm inistall packageName -g</th>
        <td>
          1、安装模块到目录node_modules目录下<br />
          2、并在package.json文件的dependencies中写入依赖，简写为-S（从开发到上线都需要用到的包）。<br />
          3、运行npm install 初始化项目时，会将模块下载到项目目录下<br />
          4、运行npm install
          --production或者注明NODE_ENV变量值为production时，会自动下载模块大node_modules目录中(生产环境)。
        </td>
      </tr>
      <tr>
        <th>npm inistall packageName --save-dev</th>
        <td>
          1、安装模块到目录node_modules目录下<br />
          2、并在package.json文件的devDependencies中写入依赖，简写为-D（工具包，上线时不需要使用）<br />
          3、运行npm install 初始化项目时，会将模块下载到项目目录下<br />
          4、运行npm install
          --production或者注明NODE_ENV变量值为production时，不会自动下载模块大node_modules目录中(开发环境)
        </td>
      </tr>
    </Tablevue>
    <h4>yarn基本使用（类比npm的基本使用，在性能上比npm更好）</h4>
    <p>安装yarn工具：npm install -g yarn</p>
    <Tablevue>
      <tr>
        <th>操作</th>
        <th>npm命令</th>
        <th>yarn命令</th>
      </tr>
      <tr>
        <td>初始化包</td>
        <td>npm init</td>
        <td>yarn init</td>
      </tr>
      <tr>
        <td>安装包</td>
        <td>npm install 包名 --save</td>
        <td>
          yarn add
          包名（yarn没有install这个命令，add命令不需要加--save，它自动会加）
        </td>
      </tr>
      <tr>
        <td>卸载包</td>
        <td>npm uninstall 包名</td>
        <td>yarn remove 包名</td>
      </tr>
      <tr>
        <td>更新包</td>
        <td>npm update 包名</td>
        <td>yarn upgrade 包名</td>
      </tr>
      <tr>
        <td>安装开发依赖的包</td>
        <td>npm install 包名 --save-dev</td>
        <td>yarn add 包名 -dev</td>
      </tr>
      <tr>
        <td>全局安装包</td>
        <td>npm install 包名 -g</td>
        <td>yarn global add 包名</td>
      </tr>
      <tr>
        <td>设置下载镜像的地址</td>
        <td>npm config set registry url</td>
        <td>yarn config set registry url</td>
      </tr>
      <tr>
        <td>安装所有依赖</td>
        <td>npm install</td>
        <td>yarn install or yarn</td>
      </tr>
      <tr>
        <td>执行包</td>
        <td>npm run 命令</td>
        <td>yarn run or yarn 命令</td>
      </tr>
    </Tablevue>
    <h4>npm的缺点：</h4>
    <ul>
      <li>
        1、npm install
        的时候太太太慢了，特别是新的项目拉下来要等半天，删除node_modules，重新install的时候依旧如此。
      </li>
      <li>
        2、同一个项目，安装的时候无法保持一致性。由于package.json文件中版本号的特点，下面三个版本号在安装的时候代表不同的含义。<br />
        -"5.0.3" ： 表示安装指定的5.0.3版本；<br />
        -"~5.0.3" ：表示安装5.0.x中最新的版本；<br />
        -"^5.0.3" ：表示安装5.X.X中最新的版本，<br />
      </li>
      <li>
        3、安装的时候，包会在同一时间下载和安装，中途某个时候，一个包抛出错误，但是npm会继续下载和安装包。因为npm会把所有日志输出到终端，有关错误包的信息就会在一大堆npm打印的警告中丢失掉，并且你不会注意到实际发生的错误。
      </li>
    </ul>
    <h4>yarn的优点：</h4>
    <p>
      1、并行安装：无论 npm 还是 Yarn 在执行包的安装时，都会执行一系列任务。npm
      是按照队列执行每个 package，也就是说必须要等到当前 package
      安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。
    </p>
    <p>
      2、离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。
    </p>
    <p>
      3、安装版本统一：为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file)
      记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn
      就会创建（或更新）yarn.lock
      这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。npm
      其实也有办法实现处处使用相同版本的 packages，但需要开发者执行 npm
      shrinkwrap 命令。这个命令将会生成一个锁定文件，在执行 npm install
      的时候，该锁定文件会先被读取，和 Yarn 读取 yarn.lock 文件一个道理。npm 和
      Yarn 两者的不同之处在于，Yarn 默认会生成这样的锁定文件，而 npm 要通过
      shrinkwrap 命令生成 npm-shrinkwrap.json
      文件，只有当这个文件存在的时候，packages 版本信息才会被记录和更新。
    </p>
    <p>
      4、更简洁的输出：npm 的输出信息比较冗长。在执行 npm install 包名
      的时候，命令行里会不断地打印出所有被安装上的依赖。相比之下，Yarn
      简洁太多：默认情况下，结合了
      emoji直观且直接地打印出必要的信息，也提供了一些命令供开发者查询额外的安装信息。
    </p>
    <p>
      5、更好的语义化： yarn改变了一些npm命令的名称，比如 yarn
      add/remove，感觉上比 npm 原本的 install/uninstall 要更清晰。
    </p>
  </Pagecontent>
</template>
