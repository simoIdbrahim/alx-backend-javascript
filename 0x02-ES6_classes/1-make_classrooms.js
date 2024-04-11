import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = [];
  sizes.forEach((size) => rooms.push(new ClassRoom(size)));
  return rooms;
}
