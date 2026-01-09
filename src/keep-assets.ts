import horusLogo from "@/assets/horus-logo.png";
import djiLogo from "@/assets/dji-authorized-reseller.png";
import platform from "@/assets/flighthub-platform.png";

// Exporting these ensures they are included in the build bundle
// even if not rendered in the UI, enabling CDN usage.
export const keptAssets = {
  horusLogo,
  djiLogo,
  platform
};