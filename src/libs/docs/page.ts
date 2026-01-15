// import {TAG, FORCE_TAG, CONTENT_PATH, ASSETS_PATH} from "./config";

// import {getLatestTag} from "@/libs/github/api";
// import {getRawFileFromRepo, getRawAssetFromRepo} from "@/libs/github/raw";
// import {__PROD__, __PREVIEW__, removeFromLast} from "@/utils";
// import localRoutes from "@/config/routes.json";

export interface Route {
  key?: string;
  title?: string;
  subtitle?: string;
  section?: string;
  heading?: boolean;
  keywords?: string;
  iconSrc?: string;
  defaultOpen?: boolean;
  path?: string;
  routes?: Route[];
  updated?: boolean;
  newPost?: boolean;
  comingSoon?: boolean;
}

export interface Doc {
  _id: string;
  _raw: Local.RawDocumentData;
  type: string;
  title: string;
  description: string;
  slug: string;
  slugAsParams: string;
  url: string;
}

export interface RouteContext {
  parent?: Route;
  route?: Route;
  nextRoute?: Route;
  prevRoute?: Route;
}

export interface Carry {
  params: {slug: any};
}