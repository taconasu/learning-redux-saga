## DOCS

```
src/
├── actions
│   ├── xxxAction.ts
│   └── ...
├── adapters
│   ├── [コンポーネント名]Adapters.ts
│   └── ...
├── core
│   ├── reducers.ts
│   └── store.ts
├── entities
│   ├── XxxEntity.ts
│   └── ...
├── reducers
│   ├── xxxReducer.ts
│   └── ...
├── repositories
│   ├── xxxRepository.ts
│   └── ...
└── sagas
    ├── [Entity名]
    │   ├── xxx.ts
    │   ├── ...
    │   └── index.ts
    ...
```

### actions

actionを生成するactionCreatorを定義する場所
actionの関数・actionの型・action名を管理する定数

### adapters

react-reduxのconnect関数を利用してコンポーネントにpropsとしていろんなものを渡す

- `mapStateToProps`: StoreからStateを取り出してpropsとして渡す
- `mapDispatchToProps`: actionCreatorを呼び出す関数(dispatcher)を渡す

JSXでは実際のコンポーネントではなくアダブターをimportしてマークアップする

### core

reduxをアプリケーションに導入するための設定群

#### reducers.ts

定義したreducer達をcombineしてexport奴

#### store.ts

reducers.tsでcombineした奴とsaga群を設定してexport奴
これを`index.tsx`などのreduxを活用したいスコープで`<Provider store={store}>`のように参照して使う

### entities

データの実体とかその初期値とか型とか

### reducers

reduxのreducer
actionで受け取ったpayloadをもとにstateを更新するあれこれ

### repositories

sagaで利用するAPIなどの非同期処理を実際に定義している関数

### sagas

reduxにまつわる非同期的な処理を実行する場所
実際の非同期処理を行う関数はrepositoriesに定義しており、ここではジェネレータ関数を用いてredux-sagaの手続きを定義する

## redux-saga

### タスク

バックグラウンドで実行される処理
`fork`で非同期的にタスクを実行できるし
`call`で同期的にタスクを実行できる
`takeEvery`を使えば特定のactionがdispatchされた時に実行することもできる

タスクはジェネレータ関数(`function*`)で定義する

### エフェクト

何をどのように実行するかが記述されたjavascriptオブジェクト
タスクの種類やペイロードの状態、タスクが完了しているかどうかなどの情報を持つ

エフェクトを作成するためのエフェクトクリエイターが色々ある

### エフェクトクリエイター

[Effect creators - redux-saga](https://redux-saga.js.org/docs/api/#effect-creators)
以下はよく使うエフェクトクリエイター

#### fork

別のタスクを非同期実行する
takeEveryでactionのdispatchを待つタスクをforkで実行してwatcherみたいに使ったりもできる

#### call

別のタスクを同期実行する
APIコールなどの完了を待つ必要のあるタスクを実行するときに使う

#### put

指定したactionをdispatchする
callで実行したAPIの結果をstateに保存するためのdipatcherを呼ぶ使い方とかが多そう

#### takeEvery

指定したactionがdispatchされたら実行される
