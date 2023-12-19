import { ReactNode } from "react";

export interface RestrictedRoutePropsType {
  children: ReactNode;
  redirectTo?: string;
}
