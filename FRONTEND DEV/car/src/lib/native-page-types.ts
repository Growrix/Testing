import type { ComponentType } from "react";

export type NativePageDefinition = {
  fileName: string;
  title: string;
  description: string;
  Component: ComponentType;
};
