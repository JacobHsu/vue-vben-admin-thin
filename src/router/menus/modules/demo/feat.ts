import type { MenuModule } from "/@/router/types";
import { t } from "/@/hooks/web/useI18n";

const menu: MenuModule = {
  orderNo: 19,
  menu: {
    name: t("routes.demo.feat.feat"),
    path: "/feat",
    tag: {
      dot: true,
    },
    children: [
      {
        path: "context-menu",
        name: t("routes.demo.feat.contextMenu"),
      },
    ],
  },
};
export default menu;
