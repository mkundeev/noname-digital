import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../theme";
const SvgMenu = () => (
  <Svg width={20} height={17} fill="none">
    <Path
      fill={COLORS.text}
      d="M0 1.214A1.214 1.214 0 0 1 1.214 0h17a1.214 1.214 0 0 1 0 2.429h-17A1.214 1.214 0 0 1 0 1.214Zm0 14.572a1.214 1.214 0 0 1 1.214-1.215h17a1.214 1.214 0 0 1 0 2.429h-17A1.214 1.214 0 0 1 0 15.786Zm4.5-8.5a1.214 1.214 0 0 0 0 2.428h13.714a1.214 1.214 0 0 0 0-2.428H4.5Z"
    />
  </Svg>
);
export default SvgMenu;
