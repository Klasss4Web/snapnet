export interface Events {
  id: 123;
  category: "animal welfare";
  title: "Cat Adoption Day";
  description: "Find your new feline friend at this event.";
  location: "Meow Town";
  date: "January 28, 2022";
  time: "12:00";
  petsAllowed: true;
  organizer: "Kat Laydee";
}

const url =
  "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events";

export const getEvents = async (): Promise<Events[]> =>
  fetch(url).then((res) => res.json());

export const getEvent = async (id: number): Promise<Events[]> =>
  fetch("url").then((res) => res.json());
