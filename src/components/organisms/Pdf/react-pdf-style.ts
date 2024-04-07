import { Font, StyleSheet } from "@react-pdf/renderer";

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

export const baseStyle = StyleSheet.create({
  // font-family
  fontFamily: {
    fontFamily: "NotoSansJP",
  },

  // layout
  container: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "NotoSansJP",
    fontSize: 11,
  },
  body: {
    flex: 1,
  },
  footer: {
    // NOTE 現時点では指定が必要ないが、実装上可読性が高まるので定義だけしておく
  },

  // font-size
  textSmall: {
    fontSize: 11,
  },
  textMedium: {
    fontSize: 15,
  },
  textLarge: {
    fontSize: 20,
  },

  // font-weight
  fontBold: {
    fontWeight: "bold",
  },

  // padding
  pdMedium: {
    padding: 30,
  },

  // margin-bottom
  mbSmall: {
    marginBottom: 10,
  },
  mbMedium: {
    marginBottom: 30,
  },
  mbLarge: {
    marginBottom: 50,
  },

  // flex-Direction
  flexRow: {
    flexDirection: "row",
  },

  // justify-content
  justifyBetween: {
    justifyContent: "space-between",
  },

  // align-items
  itemCenter: {
    alignItems: "center",
  },

  // table
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
  // 固定幅カラム(20)
  tableColWidth20: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
  // 固定幅カラム(80)
  tableColWidth80: {
    width: "80%",
    borderWidth: 1,
    borderStyle: "solid",
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
