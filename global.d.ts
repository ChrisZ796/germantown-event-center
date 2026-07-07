import "@tanstack/react-router";

declare module '*.module.css' {
const classes: { [key: string]: string };
export default classes;
}

declare module '*.module.scss' {
const classes: { [key: string]: string };
export default classes;
}

declare module '@tanstack/react-router' {
  interface HistoryState {
    isOrg?: boolean;
  }
}