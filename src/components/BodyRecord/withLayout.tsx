import { type ReactNode } from "react";

export default function withLayout(Component: ReactNode) {
  const Container = () => (
    <div className="record-layout">
      <div className="record-layout__header">
        <div className="record-layout__title en">MY EXERCISE</div>
        <div className="record-layout__time en">2021.05.21</div>
      </div>
      <div className="record-layout__body">{Component}</div>
    </div>
  );
  return Container;
}
