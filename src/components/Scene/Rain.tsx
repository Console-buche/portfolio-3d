import { useFrame } from "@react-three/fiber";
import * as React from "react";

interface IRainProps {}

export function Rain(props: IRainProps) {
  useFrame(() => {});

  return <div></div>;
}
