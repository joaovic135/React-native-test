import { View } from "react-native";
import Svg, { Defs, Path, Text as SvgText, TextPath, TSpan } from "react-native-svg";

import { styles } from "./styles";

const ARC_WIDTH = 140;
const ARC_HEIGHT = 55;

export function CurvedGoalText({ text = "75% of daily goal" }: { text?: string }) {
  const s = styles();
  const pathD = `M 20 50 A 60 60 0 0 1 120 50`;

  return (
    <View className={s.root()}>
      <Svg width={ARC_WIDTH} height={ARC_HEIGHT} viewBox="0 0 140 55">
        <Defs>
          <Path id="goalArc" d={pathD} fill="none" />
        </Defs>
        <SvgText
          fill="#2D5A50"
          fontSize={10}
          fontWeight="500"
          textAnchor="middle"
        >
          <TextPath href="#goalArc" startOffset="50%">
            <TSpan>{text}</TSpan>
          </TextPath>
        </SvgText>
      </Svg>
    </View>
  );
}
