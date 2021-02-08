import {OfferRoomType} from '~/common/enums/enums';

const roomTypeToDescMap = {
  [OfferRoomType.APARTMENT]: `Apartment`,
  [OfferRoomType.ROOM]: `Private Room`,
  [OfferRoomType.HOUSE]: `House`,
  [OfferRoomType.HOTEL]: `Hotel`,
};

export {roomTypeToDescMap};
