import type { AppRouteModule } from "/@/router/types";

import { LAYOUT } from "/@/router/constant";
import { t } from "/@/hooks/web/useI18n";

const system: AppRouteModule = {
  path: "/system",
  name: "System",
  component: LAYOUT,
  redirect: "/system/home",
  meta: {
    icon: "ion:settings-outline",
    title: t("routes.demo.system.moduleName"),
  },
  children: [
    {
      path: "home",
      name: "AccountManagement",
      meta: {
        title: t("routes.demo.system.account"),
        ignoreKeepAlive: true,
      },
      component: () => import("/@/views/demo/system/home/index.vue"),
    },
    {
      path: "role",
      name: "RoleManagement",
      meta: {
        title: t("routes.demo.system.role"),
        ignoreKeepAlive: true,
      },
      component: () => import("/@/views/demo/system/role/index.vue"),
    },
  ],
};

export default system;
