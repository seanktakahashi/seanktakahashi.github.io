import React from "react";
import { useNavigate } from "react-router-dom";

namespace NavigateAway {
  type OwnProps = {
    to: string;
  }

  export type Props = OwnProps;
}


export default function NavigateAway({ to }: NavigateAway.Props) {
  const navigate = useNavigate();

  return (
    <div>
      Navigate Away
    </div>
  );
}