import React from "react";
import BPOs from "./BPOs";
import StartupServices from "./StartupServices";

export default function otherServices() {
  return (
    <div>
      <div className="gap-4 mb-5">
        <BPOs />
      </div>
      <div className="gap-4">
        <StartupServices />
      </div>
    </div>
  );
}
