# 我的应用

该项目适用于区块链应用程序 My Dapp。它包含智能合约、基于 Web 的 dapp 和 NodeJS 服务器的代码。

# 先决条件

为了开发和构建“我的 Dapp”，必须安装以下先决条件：

* [Visual Studio Code](https://code.visualstudio.com/download)（或任何用于编辑 Javascript 的 IDE）
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (DappStarter 使用 [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces))

### Windows 用户

在继续安装之前，请务必注意，许多区块链库在 Windows 上要么不工作，要么生成错误。如果您尝试安装但无法完成启动脚本，这可能是问题所在。在这种情况下，最好使用 Windows Subsystem for Linux (WSL) 安装和运行 DappStarter。这是 [帮助您安装 WSL 的指南](https://docs.decentology.com/guides/windows-subsystem-for-linux-wsl)。

已知需要 WSL 的区块链：Solana
＃ 安装

使用终端（或命令提示符），切换到包含项目文件的文件夹并键入：`yarn` 这将获取所有必需的依赖项。该过程将需要 1-3 分钟，在此过程中您可以继续进行下一步。

# 纱线错误

当 Yarn 安装依赖项时，您可能会看到与 `node-gyp` 包相关的失败。
出现这些故障是因为 node-gyp 包需要某些额外的构建工具
安装在您的计算机上。按照 [instructions](https://www.npmjs.com/package/node-gyp) 添加构建工具，然后再次尝试运行 `yarn`。

# 构建、部署和测试
使用终端（或命令提示符），切换到包含项目文件的文件夹并输入：`yarn start` 这将运行每个项目 package.json 中的所有开发脚本。


## 文件位置
以下是一些重要文件的位置：
* 合约代码：[packages/dapplib/contracts](packages/dapplib/contracts)
* Dapp库：[packages/dapplib/src/dapp-lib.js](packages/dapplib/src/dapp-lib.js)
* 区块链交互：[packages/dapplib/src/blockchain.js](packages/dapplib/src/blockchain.js)
* 单元测试：[packages/dapplib/tests](packages/dapplib/tests)
* UI 测试工具：[packages/client/src/dapp/harness](packages/client/src/dapp/harness)


要查看您的 dapp，请打开浏览器访问 DappStarter 工作区的 http://localhost:5000。

我们 ♥️ 开发人员并希望您拥有很棒的体验。此时您应该正在体验 Dappiness。如果没有，请告诉我们，我们会提供帮助。加入我们的 [Discord](https://discord.gg/XdtJfu8W) 或在 Twitter [@Decentology](https://twitter.com/decentology) 上联系我们。

## 智能合约

`yarn migrate` 编译合约/*.sol 文件，将它们部署到区块链。

## 应用

在单独的终端中运行 dapp。您*必须*已为 dapp 运行了 `npm run deploy` 以查看最近的智能合约更改。

`yarn dapp` 使用 webpack 开发服务器在 http://localhost:5001 上运行 dapp

＃＃ 服务器

在单独的终端中运行服务器。您*必须*已为 dapp 运行了 `npm run deploy` 以查看最近的智能合约更改。

`yarn server` 使用 NestJS 在端口 5002 上运行 NodeJS 服务器应用程序

## 测试

`test-config.js` 包含测试脚本使用的设置

使用 `yarn test --script=[test file]` 运行测试

## 生产构建

DappStarter 目前不提供用于生产的区块链迁移脚本。但是，以下是用于生成生产版本的脚本：

`yarn build:prod` 为生产生成 dapp 包。