export type Project = "pokedex" | "join" | "sharky" | "portfolio" | "jelly";

export interface Asset {
  pictures: Record<Project, string>;
}
