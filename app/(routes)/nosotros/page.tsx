import React from "react";
import { Banner, Values, Vision, Who } from "./components";

export default function NosotrosPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 to-blue-50">
        <Banner />
        <Who />
        <Vision />
        <Values />
      </div>
    </>
  );
}
