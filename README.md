# jsdoc-sample

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## jsdoc 吐き出し

以下のコマンドでインストール済み。

```
yarn add jsdoc -D
```

コマンドライン引数でファイル名を指定して実行する。

```
./node_modules/.bin/jsdoc src/logic/math.js
```

`/out` ディレクトリ(ignore されている)内に jsdoc が生成される。
