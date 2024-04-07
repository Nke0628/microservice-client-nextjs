"use client";

import { Page, Text, View, Document, Font } from "@react-pdf/renderer";
import { baseStyle } from "./react-pdf-style";

export interface pdfProps {
  id: number;
}

export default function PDF({ id }: pdfProps) {
  return (
    <Document title="出生児育児休業申請">
      {/* ページ設定 */}
      <Page style={[baseStyle.container]} size="A4">
        {/* ボディ */}
        <View style={baseStyle.body}>
          {/* タイトルエリア */}
          <View
            style={[
              baseStyle.flexRow,
              baseStyle.justifyBetween,
              baseStyle.itemCenter,
              baseStyle.mbMedium,
            ]}
          >
            <View>
              <Text style={[baseStyle.fontBold, baseStyle.textLarge]}>
                出生児育児休業申請
              </Text>
            </View>
            <View>
              <Text>申請日 2024年1月4日</Text>
            </View>
          </View>

          {/* 社員情報 */}
          <View style={[baseStyle.mbMedium, baseStyle.table]}>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColGrow, baseStyle.fontBold]}>
                氏名
              </Text>
              <Text style={baseStyle.tableColGrow}>青空太郎</Text>
              <Text style={[baseStyle.tableColGrow, baseStyle.fontBold]}>
                社員ID
              </Text>
              <Text style={baseStyle.tableColGrow}>S0000</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColGrow, baseStyle.fontBold]}>
                事業部
              </Text>
              <Text style={baseStyle.tableColGrow}>サンプル事業部</Text>
              <Text style={[baseStyle.tableColGrow, baseStyle.fontBold]}>
                部署
              </Text>
              <Text style={baseStyle.tableColGrow}>サンプル部サンプル部</Text>
              <Text style={[baseStyle.tableColGrow, baseStyle.fontBold]}>
                チーム
              </Text>
              <Text style={baseStyle.tableColGrow}>サンプルチーム</Text>
            </View>
          </View>

          {/* 申請内容 */}
          <View>
            <Text style={[baseStyle.fontBold, baseStyle.mbSmall]}>
              申請内容
            </Text>
          </View>

          {/* 連絡先 */}
          <View style={[baseStyle.mbSmall, baseStyle.table]}>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                名前(正式名)
              </Text>
              <Text style={baseStyle.tableColWidth80}>青空太郎</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                メールアドレス
              </Text>
              <Text style={baseStyle.tableColWidth80}>青空太郎</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                電話番号
              </Text>
              <Text style={baseStyle.tableColWidth80}>青空太郎</Text>
            </View>
          </View>

          {/* その他連絡先 */}
          <View style={[baseStyle.mbSmall, baseStyle.table]}>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                滞在期間
              </Text>
              <Text style={baseStyle.tableColWidth80}>青空太郎</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                都道府県
              </Text>
              <Text style={baseStyle.tableColWidth80}>青空太郎</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                住所
              </Text>
              <Text style={baseStyle.tableColWidth80}>青空太郎</Text>
            </View>
          </View>

          {/* 休業日程 */}
          <View style={[baseStyle.mbSmall, baseStyle.table]}>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                分割か
              </Text>
              <Text style={baseStyle.tableColWidth80}>はい</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                休業日程１
              </Text>
              <Text style={baseStyle.tableColWidth80}>
                2024年1月1日~2024年1月10日
              </Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                休業日程2
              </Text>
              <Text style={baseStyle.tableColWidth80}>
                2024年1月1日~2024年1月10日
              </Text>
            </View>
          </View>

          {/* 最終出勤日 */}
          <View style={[baseStyle.mbSmall, baseStyle.table]}>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                最終出勤日1
              </Text>
              <Text style={baseStyle.tableColWidth80}>2024年1月1日</Text>
            </View>
            <View style={baseStyle.tableRow}>
              <Text style={[baseStyle.tableColWidth20, baseStyle.fontBold]}>
                最終出勤日2
              </Text>
              <Text style={baseStyle.tableColWidth80}>2024年1月1日</Text>
            </View>
          </View>
        </View>

        {/* フッター */}
        <View style={baseStyle.footer}>
          {/* 押印 */}
          <View
            style={[
              baseStyle.flexRow,
              baseStyle.justifyBetween,
              baseStyle.itemCenter,
            ]}
          >
            <View style={[baseStyle.mbSmall, baseStyle.table]}>
              <View style={baseStyle.tableRow}>
                <Text
                  style={[baseStyle.tableColStampHeader, baseStyle.fontBold]}
                >
                  上長
                </Text>
                <Text style={baseStyle.tableColStampHeader}>総務</Text>
              </View>
              <View style={baseStyle.tableRow}>
                <Text
                  style={[baseStyle.tableColStamp, baseStyle.fontBold]}
                ></Text>
                <Text style={baseStyle.tableColStamp}></Text>
              </View>
            </View>
            <View style={[baseStyle.mbSmall, baseStyle.table]}>
              <View style={baseStyle.tableRow}>
                <Text
                  style={[baseStyle.tableColStampHeader, baseStyle.fontBold]}
                >
                  上長
                </Text>
                <Text style={baseStyle.tableColStampHeader}>総務</Text>
              </View>
              <View style={baseStyle.tableRow}>
                <Text
                  style={[baseStyle.tableColStamp, baseStyle.fontBold]}
                ></Text>
                <Text style={baseStyle.tableColStamp}></Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
