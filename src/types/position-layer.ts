export const PositionLayer = {
  GENERAL: 1,
  LEADER: 2,
  SUB_CHIEF: 3,
  CHIEF: 4,
} as const;

export type PositionLayer = (typeof PositionLayer)[keyof typeof PositionLayer];

export const PositionLayerNameMap: Record<PositionLayer, string> = {
  [PositionLayer.GENERAL]: "一般",
  [PositionLayer.LEADER]: "リーダー",
  [PositionLayer.SUB_CHIEF]: "サブチーフ",
  [PositionLayer.CHIEF]: "チーフ",
};
