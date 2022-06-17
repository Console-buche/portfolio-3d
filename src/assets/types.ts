export type Project =
  | "pokedex"
  | "join"
  | "sharky"
  | "portfolio"
  | "jelly"
  | "logo";

export interface Asset {
  pictures: Record<Project, string>;
}
