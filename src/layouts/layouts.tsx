import Header from "@/components/Header";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { FC } from "react";
import { Outlet } from "umi";

const BasicLayout: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Header />
      <Outlet />
    </ConfigProvider>
  );
};
export default BasicLayout;
