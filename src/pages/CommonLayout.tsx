import "./CommonLayout.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { type ReactNode } from "react";
import ScrollUpButton from "@components/ScrollUpButton";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="common-layout">
      <Header />
      {children}
      <div className="common-layout__fixed-btn">
        <ScrollUpButton />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
