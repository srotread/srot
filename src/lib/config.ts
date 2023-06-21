const isDev = process.env.NODE_ENV === "development"

export const url = isDev ? "http://localhost:3000" : "https://srot.vercel.app"

export const pages: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Story",
    path: "/story",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Workshops",
    path: "/workshops",
  },
  {
    name: "Centres",
    path: "/centres",
  },
  {
    name: "Media",
    path: "/media",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Work with Us",
    path: "/work",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
]
