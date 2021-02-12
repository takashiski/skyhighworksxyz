# JP60SS

* [遊舎工房通販ページはこちら](https://yushakobo.jp/shop/consign_jp60ss/)
* [JP60(IC版)](https://skyhigh-works.hatenablog.com/entry/2020/08/22/234858)が同等の内容なのでそちらをご覧ください
  * [https://skyhigh-works.hatenablog.com/entry/2020/08/22/234858](https://skyhigh-works.hatenablog.com/entry/2020/08/22/234858)
  * ファームウェアは[こちらのリポジトリ](https://github.com/takashiski/qmk_firmware/tree/jp60)の`jp60/v1p1`をお使いください
    * [https://github.com/takashiski/qmk_firmware/tree/jp60](https://github.com/takashiski/qmk_firmware/tree/jp60)
    * [テスト用のビルド済みファームウェアはこちら](./jp60_v1p1_default.hex)

![](/jp60ss/qr.png)

## JP60SSの概要

* 日本語普及配列準拠
* 分割スペースキー
* 親指周りにキーが増えることで、ホームポジションからあまり移動しない入力がやりやすくなります。
* 親指周りにキーが増えることで、左手での作業が便利になります
* 信教上の理由によりこのキーボードの配列をJISと呼称することはありません


## JP60SSの設計思想

* Poker/GH60ケースに対応していること
  * Tofu向けに作りたかったのです
* 普及日本語配列の相対位置を崩さないこと
  * タイピングは相対位置がすべてだと思っています
* 分割スペース/可能な限り親指キーが多いこと
  * 分割スペースになれたらもう戻れません

## 競合キーボード

### 普及日本語配列のキーボード

* [ducky miniの日本語配列](https://archisite.co.jp/products/duckychannel/ducky-mini-jp/)(ディスコン)
* [Razer Huntsman mini](https://www2.razer.com/jp-jp/gaming-keyboards-keypads/razer-huntsman-mini)
  * [Huntsman mini紹介記事](https://www.itmedia.co.jp/pcuser/articles/2101/22/news078.html)
* [Majestouch MINIRA-R convertible](https://www.diatec.co.jp/shop/MINILA-R/)
  * [MINIRA-R紹介記事](https://pc.watch.impress.co.jp/docs/column/hothot/1269405.html)

### 競合キーボードに対する欠点

* 価格
* おおよそ倍

### 競合キーボードに対する利点

* Majestouch, Archissのキーボードと親指周り以外変わらない配置
* キーのフルリマップが可能
  * 一番手前に数字キー置いて一番奥にZXCV置くこともできる
  * 英数キー(CapsLock)の位置にEnterを置くこともできる
  * スペースキーにPrintScreenを置くこともできる
* プログラマブルである
  * 簡単なC言語のコードが書ければ、かなり自由になる
  * Ctrl+Sに`Ctrl+a` `BackSpace` `Ctrl+S` `Alt+F4` を順に実行するような邪悪な挙動を割り当てることもできる
  * QWERを同時押しすると`いつもお世話になっております。`を打ち込むことができる(厳密にはローマ字入力の場合はitsumoosewaninatteorimasu.+スペース+エンター。)
* レイヤー切り替えキー(Fnキー)が扱いやすい位置に配置できる
* スイッチの交換が用意

## JP60SSのうれしさ

1.物理配列による恩恵と2.QMKファームウェアによる論理配列の恩恵の2種類があります。

### 物理配列の恩恵

分割スペースにより、打鍵頻度が多いけど遠いキーを親指位置に集めることができます。
製作者の場合は、Spaceに加えてDelete, Enter, Backspaceを入れています。

60%キーボードなのでBackspace, Enterに関しては恩恵がやや薄いですがDeleteが移動せずに、しかも左手で打鍵出来る位置にあるのは非常に大きいです。ショートカットでオブジェクトの削除に割り当てられることが多いわりに、Deleteは右側の端にあるので、右手マウスの場合は選択から削除というながれがいまいちだったと思います。

Backspace,Enterに関しても右手マウス左手キーボードの時に強力な効果が出てきます。
相対位置を覚えてしまえば、親指をちょっと伸ばすだけで確定動作ができてしまいます。

### QMKファームウェアによる恩恵

様々な便利機能があるのですが、代表的なものを紹介します。

#### Tap and hold

キーの入力を、短く押した場合と長押しした場合で別個のものとする機能です。

長押しでしか使わないキーと短押しでしか使わないキーを一つのキーで実現することができます。

HHKBやMINILA, ノートPCなどのキーボードは独立した固定位置のFnキーでないと実現できませんでしたが、QMKではそうではありません。
定番だと、親指で一番押しやすいスペースキーの長押しを捨てて、長押しをレイヤー切り替えにするというものがあります。

JP60では、親指のスペースキー以外全てにレイヤー切り替え機能を割り当てています。

#### レイヤリング

すごく雑な説明をすると、いわゆる[Fnキー](https://ja.wikipedia.org/wiki/Fn%E3%82%AD%E3%83%BC)と呼ばれるキーと同等の機能を任意に追加し任意の位置のキーの動作を変更できる機能です。

JP60SSではF1～F12と矢印キーとそれ以外のカーソル操作キーを2番目レイヤーに入れて2レイヤー運用をしています。
あるキーを押しながら押さなければならないということに対して難色を示す人がいますが、前提条件が揃っていないことによる誤解が含まれています。

1. レイヤー切り替えキーはなるべく押しやすい位置、特に親指で押せる位置に配置される。左下や右下などの押しにくい位置ではない。
2. 基準位置から大きく手を動かさないと届かないような、相対位置による判別が困難な「遠いキー」を使わない




