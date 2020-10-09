import {generateRandomId} from '~/helpers/mocks/generate-random-id.helper';

const generateOffer = () => ({
  id: generateRandomId(),
});

export {generateOffer};
