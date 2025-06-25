# FitLib App

React Native + Expo + NativeWind CSS で構築されたモバイルアプリケーション

## 🚀 技術スタック

- **React Native** - モバイルアプリ開発フレームワーク
- **Expo** - React Native開発プラットフォーム
- **NativeWind CSS v2.0.11** - React Native用のTailwind CSS実装

## 📦 セットアップ

### 前提条件

- Node.js (v16以上)
- npm または yarn
- Expo CLI (`npm install -g @expo/cli`)

### インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm start
```

## 🎯 利用可能なスクリプト

- `npm start` - Expo開発サーバーを起動
- `npm run android` - Androidエミュレータでアプリを起動
- `npm run ios` - iOSシミュレータでアプリを起動
- `npm run web` - Webブラウザでアプリを起動

## 📱 アプリの特徴

- モダンなUIデザイン
- NativeWind CSS v2.0.11によるスタイリング
- レスポンシブデザイン
- グラデーション背景
- ガラスモーフィズム効果

## 🛠️ 開発

このプロジェクトは以下の設定で構成されています：

- **Tailwind CSS v3.3.2** - ユーティリティファーストのCSSフレームワーク
- **NativeWind v2.0.11** - React Native用のTailwind CSS実装
- **Babel** - JavaScriptトランスパイラー（NativeWindプラグイン付き）

## 📁 プロジェクト構造

```
fitlib-app/
├── App.js              # メインアプリケーションコンポーネント
├── babel.config.js     # Babel設定（NativeWindプラグイン含む）
├── tailwind.config.js  # Tailwind CSS設定
├── nativewind-env.d.ts # TypeScript型定義
├── package.json        # 依存関係とスクリプト
└── README.md          # プロジェクトドキュメント
```

## 🎨 スタイリング

このプロジェクトでは、NativeWind CSS v2.0.11を使用してTailwind CSSのクラスをReact Nativeコンポーネントに適用できます：

```jsx
<View className="flex-1 bg-blue-500 items-center justify-center">
  <Text className="text-white text-2xl font-bold">
    Hello NativeWind!
  </Text>
</View>
```

## �� ライセンス

MIT License 