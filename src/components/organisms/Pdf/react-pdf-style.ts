import { Font, StyleSheet } from "@react-pdf/renderer";

// フォント登録
Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "../fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "../fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

// ベーススタイルの定義
export const baseStyle = StyleSheet.create({
  // フォント
  fontFamily: {
    fontFamily: "NotoSansJP",
  },

  // 基本レイアウト
  container: {
    padding: 30,
    fontSize: 10,
  },
  body: {
    flex: 1, // フッター部(押印部)との間に空白がある場合は余白を伸ばすための設定
  },
  footer: {}, // 現時点では指定が必要ないが、実装上可読性が高まるので定義だけしておく

  // タイポグラフィ
  textSmall: {
    fontSize: 10,
  },
  textMedium: {
    fontSize: 12,
  },
  textLarge: {
    fontSize: 20,
  },
  fontBold: {
    fontWeight: "bold",
  },

  // margin & padding
  pSmall: {
    padding: 10,
  },
  pMedium: {
    padding: 30,
  },
  pLarge: {
    padding: 50,
  },
  mSmall: {
    margin: 10,
  },
  mMedium: {
    margin: 30,
  },
  mLarge: {
    margin: 50,
  },
  mbSmall: {
    marginBottom: 10,
  },
  mbMedium: {
    marginBottom: 30,
  },
  mbLarge: {
    marginBottom: 50,
  },

  // Flex
  flexRow: {
    flexDirection: "row",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  itemCenter: {
    alignItems: "center",
  },

  // Table
  table: {
    display: "flex",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  // 親の幅に合わせて自動で広がるカラム
  tableColGrow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
  // 子要素の幅分だけ広がるカラム
  tableColNonGrow: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
  // 固定幅カラム(20%)
  tableColWidth20: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
  // 押印テーブル用ヘッダーカラム
  tableColStampHeader: {
    width: 50,
    borderStyle: "solid",
    textAlign: "center",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
  // 押印テーブル用カラム
  tableColStamp: {
    width: 50,
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
});
