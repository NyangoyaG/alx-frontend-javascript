// 0-classroom.js - Define the ClassRoom class and export it
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

// main.js - Import the ClassRoom class and implement initializeRooms
import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  return [room1, room2, room3];
}

// Usage example
const rooms = initializeRooms();
console.log(rooms); // This will print the array of ClassRoom objects to the console.

