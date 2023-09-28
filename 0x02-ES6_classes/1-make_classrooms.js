// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implement the initializeRooms function
function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  return [room1, room2, room3];
}

// Usage example
const rooms = initializeRooms();
console.log(rooms); // This will print the array of ClassRoom objects to the console
