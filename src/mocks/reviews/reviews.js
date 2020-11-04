const mockedReview = {
  id: 1,
  user: {
    id: 11,
    isPro: false,
    name: `Jack`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
  },
  rating: 4,
  comment: `I stayed here for one night and it was an unpleasant experience.`,
  date: new Date(`2020-10-04T09:29:21.139Z`),
};

const mockedFetchedReview = {
  id: 1,
  user: {
    'id': 11,
    'is_pro': false,
    'name': `Jack`,
    'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
  },
  rating: 4,
  comment: `I stayed here for one night and it was an unpleasant experience.`,
  date: `2020-10-04T09:29:21.139Z`,
};

const mockedReviews = [
  mockedReview,
  {
    id: 2,
    user: {
      id: 14,
      isPro: true,
      name: `Corey`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
    },
    rating: 4,
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: new Date(`2020-10-04T09:29:21.139Z`),
  },
  {
    id: 3,
    user: {
      id: 12,
      isPro: true,
      name: `Isaac`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    },
    rating: 4,
    comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    date: new Date(`2020-10-04T09:29:21.139Z`),
  },
];

const mockedFetchedReviews = [
  mockedFetchedReview,
  {
    id: 2,
    user: {
      'id': 14,
      'is_pro': true,
      'name': `Corey`,
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
    },
    rating: 4,
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2020-10-04T09:29:21.139Z`,
  },
  {
    id: 3,
    user: {
      'id': 12,
      'is_pro': true,
      'name': `Isaac`,
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    },
    rating: 4,
    comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    date: `2020-10-04T09:29:21.139Z`,
  },
];

export {mockedReview, mockedFetchedReview, mockedReviews, mockedFetchedReviews};
