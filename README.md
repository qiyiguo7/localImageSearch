### 项目文件结构 其中 image 文件夹的结构和命名按照下面规则来

```
├── .gitignore
├── .npmrc
├── .umirc.ts
├── config
  ├── routes.ts
├── generateFileStructure.js
├── package.json
├── public
  ├── favicon.ico
  ├── image
    ├── character
      ├── adult
        ├── halfbody
        ├── pose
      ├── teenager
        ├── halfbody
        ├── pose
    ├── objects
    ├── scene
      ├── indoor
        ├── bar
        ├── cafe
        ├── family
        ├── gym
        ├── office
      ├── outdoor
        ├── amusementPark
        ├── beach
        ├── forest
        ├── lawn
        ├── park
        ├── playground
        ├── snowfield
        ├── street
    ├── style
├── README.md
├── src
  ├── .umi
    ├── core
      ├── defineApp.ts
      ├── EmptyRoute.tsx
      ├── helmet.ts
      ├── helmetContext.ts
      ├── history.ts
      ├── historyIntelli.ts
      ├── plugin.ts
      ├── pluginConfig.ts
      ├── pluginConfigJoi.d.ts
      ├── polyfill.ts
      ├── route.tsx
      ├── terminal.ts
    ├── exports.ts
    ├── testBrowser.tsx
    ├── tsconfig.json
    ├── typings.d.ts
    ├── umi.ts
  ├── assets
    ├── logo.png
    ├── logoFinal.png
  ├── components
    ├── Header
      ├── index.less
      ├── index.tsx
  ├── global.less
  ├── layouts
    ├── index.less
    ├── layouts.tsx
  ├── pages
    ├── searchCenter
      ├── hooks.ts
      ├── index.less
      ├── index.tsx
  ├── searchJson.tsx
├── tsconfig.json
├── typings.d.ts
├── yarn.lock

```

### 本地环境启动

```bash
$ yarn
$ yarn dev
```

### 注意事项

```bash
1.image文件夹一定要按照规则放置（放在public文件夹下面）
2.添加图片之后需要按照对应的位置更新 searchJson.tsx 文件
3.json文件中图片的src为image/一级目录/二级目录/名字，图片命名规范在xmind里面 eg：image/character/adult/halfbody/1-2-1-1.webp
```
