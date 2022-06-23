export type Project = 'pokedex' | 'join' | 'sharky' | 'portfolio' | 'jelly' | 'logo' | 'buche';

export interface Asset {
  pictures: Record<Project, string>;
}
