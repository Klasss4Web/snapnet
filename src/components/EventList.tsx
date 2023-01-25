import { Link } from "react-router-dom";
import { Events } from "../service/api";

export interface EventListProps {
  users: Events[];
}

const EventList = ({ otherEvent }: any) => (
  <>
    {otherEvent?.map((eve: Events) => (
      <Link
        className="article-list-linkstyle p-4"
        key={eve?.id}
        to={`/event/${eve.id}`}
      >
        <h3>{eve.title}</h3>
        <hr />
      </Link>
    ))}
  </>
);

export default EventList;
