import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "events",
    list: "/calendar",
    create: "/calendar/create",
    edit: "/calendar/edit/:id",
    show: "/calendar/show/:id",
    meta: {
      label: "Calendar",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <CalendarOutlined />,
    },
  },
  {
    name: "administration",
    meta: {
      label: "Administration",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <CrownOutlined />,
    },
  },
  {
    name: "settings",
    list: "/administration/settings",
    meta: {
      label: "Settings",
      parent: "administration",
    },
  },
  {
    name: "audits",
    list: "/administration/audit-log",
    meta: {
      label: "Audit Log",
      parent: "administration",
    },
  },
];
