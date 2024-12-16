export type TRoom = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: ['Projector', 'Whiteboard'];
  isDeleted: boolean;
};
