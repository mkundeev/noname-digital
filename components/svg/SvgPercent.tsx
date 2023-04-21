import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../theme";

const SvgPercent = () => (
  <Svg width={19} height={19} fill="none">
    <Path
      fill={COLORS.accent}
      d="M9.5 0C4.275 0 0 4.275 0 9.5S4.275 19 9.5 19 19 14.725 19 9.5 14.725 0 9.5 0ZM6.489 4.798c.93 0 1.681.75 1.681 1.69 0 .931-.75 1.682-1.681 1.682a1.68 1.68 0 0 1-1.691-1.681c0-.941.75-1.691 1.69-1.691Zm6.07 9.452c-.931 0-1.681-.76-1.681-1.691s.75-1.681 1.681-1.681 1.691.75 1.691 1.681-.76 1.691-1.691 1.691Zm-6.384.028L4.75 12.853l8.104-8.103 1.425 1.425-8.104 8.104Z"
    />
  </Svg>
);
export default SvgPercent;
