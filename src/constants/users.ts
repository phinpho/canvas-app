import type { AuthUserProps } from "../contexts/AuthContext.js";

export const USERS: AuthUserProps[] = [
  {
    avatarUrl: "/avatar/7375fe703a9d2e76b8fc6694cfe84f324eabe5b7_full.jpg",
    email: "phinpho@users.noreply.github.com",
    name: "Miss Scarlett",
    username: "scarlett",
  },
  {
    avatarUrl: "/avatar/dd81f191bbdeb2f465ffb61512f833b24e979f9d_full.jpg",
    email: "phinpho@users.noreply.github.com",
    name: "Colonel Mustard",
    username: "mustard",
  },
  {
    avatarUrl: "/avatar/abac86f8eb22eff58f1450630bbf401e92dd3990_full.jpg",
    email: "phinpho@users.noreply.github.com",
    name: "Mrs. White",
    username: "white",
  },
  {
    avatarUrl: "/avatar/8a21d0507705e2758f105d18ebe9d842a29da1fb_full.jpg",
    email: "phinpho@users.noreply.github.com",
    name: "Mr. Green",
    username: "green",
  },
  {
    avatarUrl: "/avatar/036042ac6e76f4c40b59c28d5d3e57ea08d51d42_full.jpg",
    email: "phinpho@users.noreply.github.com",
    name: "Professor Plum",
    username: "plum",
  },
  {
    avatarUrl: "/avatar/d631f805e66cee679481f93ebc14a306df92a949_full.jpg",
    email: "phinpho@users.noreply.github.com",
    name: "Mrs. Peacock",
    username: "peacock",
  },
] as const;
