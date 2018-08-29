import ChatBuilder from "./containers/ChatBuilder/ChatBuilder";
import ProfileBuilder from "./containers/ProfileBuilder/ProfileBuilder";

export const routes = [
  {
    path: "/",
    name: "home",
    component: ChatBuilder
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileBuilder
  }
];
