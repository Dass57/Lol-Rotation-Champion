export interface Champions {
  Nom : string;
  id: string;
  key: number;
  title: string;
  blurb:string;
  info: {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number
  };
  image : string;
  tags : []
}
