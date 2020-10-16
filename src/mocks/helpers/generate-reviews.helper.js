import {
  generateRandomId,
  getRandomItem,
  getRandomNumber,
} from '~/helpers/helpers';
import {generateUser} from '~/mocks/helpers/generate-user.helper';

const ReviewConfig = {
  RATING: {
    MIN: 1,
    MAX: 4,
    FRACTIONAL_PART_COUNT: 1,
  },
  COMMENTS: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. `,
    `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `In rutrum ac purus sit amet tempus.`,
  ],
};

const generateReview = () => ({
  id: generateRandomId(),
  user: generateUser(),
  rating: getRandomNumber(
      ReviewConfig.RATING.MIN,
      ReviewConfig.RATING.MAX,
      ReviewConfig.RATING.FRACTIONAL_PART_COUNT
  ),
  comment: getRandomItem(ReviewConfig.COMMENTS),
  date: new Date(),
});

const generateReviews = (count) => {
  const reviews = Array.from(new Array(count), generateReview);

  return reviews;
};

export {generateReviews, generateReview};
