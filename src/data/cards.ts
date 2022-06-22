import Assets from '../assets/assets';

type Tech = 'Javascript' | 'API' | 'HTML' | 'CSS' | 'WebGl';

export interface ICard {
  image: string;
  title: string;
  tech: Tech[];
  description: string;
}

const cardsData: ICard[] = [
  {
    title: 'Pokedex',
    image: Assets.pictures.pokedex,
    description: 'A collection and description of all 898 Pokémon',
    tech: ['API', 'HTML', 'Javascript']
  },
  {
    title: 'Sharky',
    image: Assets.pictures.sharky,
    description: 'JavaScript based jump-and-run game',
    tech: ['API', 'HTML', 'Javascript']
  },
  {
    title: 'Join',
    image: Assets.pictures.join,
    description: 'Group managment tool to optimize workflows',
    tech: ['API', 'HTML', 'Javascript']
  },
  {
    title: 'Jelly',
    image: Assets.pictures.jelly,
    description: 'Play as Jelly and fight against three other Jellys in a multiplayer free-for-all game',
    tech: ['API', 'HTML', 'Javascript']
  },
  {
    title: 'Portfolio',
    image: Assets.pictures.portfolio,
    description: 'A case study for this project is currently being written. Follow me on Twitter to stay up to date.',
    tech: ['API', 'HTML', 'Javascript']
  }
];

export default cardsData;
