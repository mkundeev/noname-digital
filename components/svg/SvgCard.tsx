import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../theme";

const SvgCard = () => (
  <Svg width={18} height={14} fill="none">
    <Path
      fill={COLORS.accent}
      d="M16.2 14H1.8c-.477 0-.935-.184-1.273-.513A1.726 1.726 0 0 1 0 12.25V1.75C0 1.286.19.84.527.513A1.826 1.826 0 0 1 1.8 0h14.4c.477 0 .935.184 1.273.513.337.328.527.773.527 1.237v10.5c0 .464-.19.91-.527 1.237A1.826 1.826 0 0 1 16.2 14ZM2.7 7.875v1.75h9.9v-1.75H2.7Zm0-3.5v1.75h12.6v-1.75H2.7Z"
    />
  </Svg>
);
export default SvgCard;
