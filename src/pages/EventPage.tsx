import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EventList from "../components/EventList";
import { Events, getEvents } from "../service/api";

const EventPage = () => {
  const { data } = useQuery<Events[]>("events", getEvents, {
    initialData: [],
  });

  const params = useParams();
  const { id } = params;

  console.log("IDDD", data);
  const viewEvent = data?.find((event) => event.id === Number(id));

  const otherEvent = data?.filter((event) => event.id !== Number(id));

  return (
    <div className="App">
      <h1>{viewEvent?.title}</h1>
      <hr />
      <h2>{viewEvent?.title}</h2>
      <p>{viewEvent?.description}</p>
      <h3>{viewEvent?.date}</h3>
      <h3>{viewEvent?.time}</h3>

      <h2 className="pt-4">Other Events</h2>
      <EventList otherEvent={otherEvent} />
    </div>
  );
};

export default EventPage;
