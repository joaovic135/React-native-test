import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const SIZE = 128;
const STROKE_WIDTH = 8;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CENTER = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface CircularProgressProps {
  progress?: number; // 0-100
  trackColor?: string;
  fillColor?: string;
  children?: React.ReactNode;
}

export function CircularProgress({
  progress = 75,
  trackColor = "#d2eed7",
  fillColor = "#4dbc71",
  children,
}: CircularProgressProps) {
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <View style={{ width: SIZE, height: SIZE, alignItems: "center", justifyContent: "center" }}>
      <Svg
        width={SIZE}
        height={SIZE}
        style={{ position: "absolute" }}
      >
        <Circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke={trackColor}
          strokeWidth={STROKE_WIDTH}
          fill="none"
        />
        <Circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke={fillColor}
          strokeWidth={STROKE_WIDTH}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
        />
      </Svg>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {children}
      </View>
    </View>
  );
}
