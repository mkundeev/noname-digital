import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../theme";
const SvgPrice = () => (
  <Svg width={20} height={16} fill="none">
    <Path
      fill={COLORS.accent}
      d="M18.938 0h-6c-.412 0-.989.239-1.28.53L4.219 7.969a.752.752 0 0 0 0 1.061l6.439 6.439a.752.752 0 0 0 1.061 0l7.439-7.439c.292-.292.53-.868.53-1.28v-6a.752.752 0 0 0-.75-.75Zm-3.75 6a1.501 1.501 0 1 1 .001-3.002A1.501 1.501 0 0 1 15.188 6Z"
    />
    <Path
      fill={COLORS.accent}
      d="m1.688 8.5 8.5-8.5h-1.25c-.412 0-.989.239-1.28.53L.219 7.969a.752.752 0 0 0 0 1.061l6.439 6.439a.752.752 0 0 0 1.061 0l.47-.47-6.5-6.5-.001.001Z"
    />
  </Svg>
);
export default SvgPrice;
