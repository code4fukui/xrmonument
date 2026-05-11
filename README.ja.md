# xrmonument

福井県を中心に収集された、3Dスキャンされたモニュメントやパブリックアートのコレクションです。拡張現実（AR）および仮想現実（VR）向けに最適化されています。各モニュメントは、iOSデバイスのAR表示用の`.usdz`ファイルと、Webやその他の3Dアプリケーション用の`.glb`ファイルとして利用可能です。

[https://code4fukui.github.io/xrmonument/](https://code4fukui.github.io/xrmonument/)

## コレクションの閲覧

デモページでモニュメントのギャラリー全体をご覧いただけます。ギャラリーからは以下の操作が可能です：
- 任意のモデルのWebベースVRビューアーを起動（`APP`リンク）。
- `.usdz`リンクを使用して、iOSデバイスのARでモデルを表示。
- `.glb`または`.usdz`ファイルを直接ダウンロード。

## モニュメントの追加方法

以下の手順で、新しいモニュメントをコレクションに追加できます：

1.  **3Dモデルの追加**: `.usdz`および`.glb`のモデルファイルをリポジトリのルートに配置します。ファイルは同じベース名を共有している必要があります（例: `mymonument.usdz`と`mymonument.glb`）。

2.  **インデックスの更新**: `index.csv`に新しい行を追加し、モニュメントの詳細を記述します。このファイルには以下の列が必要です：
    - `file`: モデルファイルのベース名（拡張子なし）。
    - `name`: モニュメントの表示名。
    - `date`: モデルが追加された日付（YYYY-MM-DD）。
    - `url`: 現実世界のモニュメントに関する詳細情報が掲載されたWebページへのリンク。
    - `site`: 上記リンクのWebサイト名。
    - `category_ja`, `category`: コレクションのタイトル（日本語および英語）。
    - `x`, `y`, `z`, `scale`: （オプション）Webビューアーでの初期位置とスケール。

3.  **Webサイトのビルド**: ビルドスクリプトを実行して、`index.html`のギャラリーと個別のモデルページを再生成します。[Deno](https://deno.land/)がインストールされている必要があります。
    ```sh
    deno run -A make.js
    ```

## ライセンスと帰属

-   **データ**: CC BY [Code for FUKUI](https://github.com/code4fukui/xrmonument)
-   **アイコン**: [articon.webp](articon.webp) は [GPT-4](https://openai.com/gpt-4) によって作成されました。

## 関連リンク

-   [xrgourmet](https://github.com/code4fukui/xrgroumet)
