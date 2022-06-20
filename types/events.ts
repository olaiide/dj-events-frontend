

export interface Event {
  id : number;
  // id: number;
  // name: string;
  // slug: string;
  // venue: string;
  // address: string;
  // performers: string;
  // date: string;
  // time: string;
  // description: string;
  length: number;
  attributes: {
    name: string;
    slug: string;
    venue: string;
    address: string;
    performers: string;
    date: string;
    time: string;
    description: string;
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
            medium: {
              url: string;
            };
          };
        };
      };
    };
  };
}

