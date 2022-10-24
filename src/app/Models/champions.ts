export interface Champions {
    Name: string;
    id: string;
    key: string;
    title: string;
    blurb: string;
    info: {
      attack: number,
      defense: number,
      magic: number,
      difficulty: number
    };
    image: {
    };
    tags: []
}
