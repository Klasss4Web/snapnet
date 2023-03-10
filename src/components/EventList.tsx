import { Link } from "react-router-dom";
import { Events } from "../service/api";


const EventList = ({ otherEvent }: any) => (
  <> 
    {otherEvent?.map((eve: Events) => (
      <Link
        className="article-list-linkstyle p-4"
        key={eve?.id}
        to={`/event/${eve.id}`}
      >
        <div className="card-small">
          <h3>{eve.title}</h3>
          <hr />
        </div>
      </Link>
    ))}
  </>
);

export default EventList;
