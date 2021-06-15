import type { MenuModule } from "/@/router/types";
import { t } from "/@/hooks/web/useI18n";

const menu: MenuModule = {
  orderNo: 20,
  menu: {
    name: t("routes.demo.page.page"),
    path: "/page-demo",

    children: [
      {
        path: "desc",
        name: t("routes.demo.page.desc"),

        children: [
          {
            path: "basic",
            name: t("routes.demo.page.descBasic"),
          },
          {
            path: "high",
            name: t("routes.demo.page.descHigh"),
          },
        ],
      },
    ],
  },
};
export default menu;
