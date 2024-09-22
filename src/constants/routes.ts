export const PAGE: { [key: string]: string } = {
  CONTACT: "contact",
  HOME: "carolyn.lynch.github.io",
  PROJECTS: "projects",
}

export const PAGE_ROUTE: { [key in keyof typeof PAGE]: string } = {
  [PAGE.CONTACT]: "/" + PAGE.CONTACT,
  [PAGE.HOME]: "/" + PAGE.HOME,
  [PAGE.PROJECTS]: "/" + PAGE.PROJECTS,
}