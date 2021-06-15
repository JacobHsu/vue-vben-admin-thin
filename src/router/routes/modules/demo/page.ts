import type { AppRouteModule } from "/@/router/types";

import { getParentLayout, LAYOUT } from "/@/router/constant";
import { ExceptionEnum } from "/@/enums/exceptionEnum";
import { t } from "/@/hooks/web/useI18n";

const ExceptionPage = () => import("/@/views/sys/exception/Exception.vue");

const page: AppRouteModule = {
  path: "/page-demo",
  name: "PageDemo",
  component: LAYOUT,
  redirect: "/page-demo/form/basic",
  meta: {
    icon: "ion:aperture-outline",
    title: t("routes.demo.page.page"),
  },
  children: [
    // =============================desc start=============================
    {
      path: "desc",
      name: "DescPage",
      component: getParentLayout("DescPage"),
      redirect: "/page-demo/desc/basic",
      meta: {
        title: t("routes.demo.page.desc"),
      },
      children: [
        {
          path: "basic",
          name: "DescBasicPage",
          component: () => import("/@/views/demo/page/desc/basic/index.vue"),
          meta: {
            title: t("routes.demo.page.descBasic"),
          },
        },
        {
          path: "high",
          name: "DescHighPage",
          component: () => import("/@/views/demo/page/desc/high/index.vue"),
          meta: {
            title: t("routes.demo.page.descHigh"),
          },
        },
      ],
    },
    // =============================desc end=============================
  ],
};

export default page;
