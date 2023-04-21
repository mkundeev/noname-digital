import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../theme";
const SvgMap = () => (
  <Svg width={17} height={19} fill="none">
    <Path
      fill={COLORS.accent}
      d="M10.389 9.025a2.348 2.348 0 0 0 1.67-.696 2.376 2.376 0 0 0 .691-1.679c0-.63-.249-1.234-.692-1.68a2.354 2.354 0 0 0-3.339 0 2.382 2.382 0 0 0 0 3.36 2.354 2.354 0 0 0 1.67.695Zm0-9.025C14.034 0 17 2.974 17 6.65 17 11.637 10.389 19 10.389 19S3.778 11.637 3.778 6.65a6.67 6.67 0 0 1 1.936-4.702A6.592 6.592 0 0 1 10.39 0Zm-8.5 6.65c0 4.275 4.798 10.127 5.667 11.22L6.61 19S0 11.637 0 6.65A6.65 6.65 0 0 1 4.722.275 8.555 8.555 0 0 0 1.89 6.65Z"
    />
  </Svg>
);
export default SvgMap;
