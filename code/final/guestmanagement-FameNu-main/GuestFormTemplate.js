import { createGuestList } from './data/guestdata.js'

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {}

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {}

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {}

  // 4. Function to search and display matching guests
  function searchGuest(event) {}

  // 5. Function to add a new guest
  function addGuest() {}

  // 6. Function to remove a guest
  function removeGuest(event) {}

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
