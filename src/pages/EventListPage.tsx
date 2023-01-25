import React, { useState } from "react";
// import EventList from "../components/ArticlesList";
import { Events, getEvents } from "../service/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const EventListPage = () => {
  const { data } = useQuery<Events[]>("events", getEvents, {
    initialData: [],
  });

  const [SearchedData, setSearchedData] = useState<Events[]>([]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const results = data?.filter((dat) => {
      if (e.target.value === "") return data;
      return (
        dat?.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        dat?.organizer.toLowerCase().includes(e.target.value.toLowerCase()) ||
        dat?.location.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setSearchedData(results ?? []);
  };

   const handleFilterByPetsAllowed = (): void => {
     const results = data?.filter((dat) => {
      //  if (e.target.value === "") return data;
       return dat?.petsAllowed;
     });

     setSearchedData(results ?? []);
   };

  console.log("data", SearchedData);
  const mapData = SearchedData.length > 0 ? SearchedData : data;
  return (
    <div className="App container mx-auto  p-4">
      <h1>List of events in our archive</h1>
      <input placeholder="Search event by title, organizer or location" onChange={handleFilter} />
      <button className="mx-2" onClick={handleFilterByPetsAllowed}>Pets Allowed?</button>
      {mapData?.map((datum) => {
        return (
          <Link
            className="article-list-linkstyle"
            key={datum?.id}
            to={`/event/${datum.id}`}
          >
            <div key={datum.id} className="card">
              <h2>{datum?.title}</h2>
              <p>{datum?.description}</p>
              <h3>{datum?.date}</h3>
              <h3>{datum?.time}</h3>
              <h3>{datum?.location}</h3>
              <h3>Organizer: {datum?.organizer}</h3>
            </div>
          </Link>
        );
      })}
      {/* <EventList otherEvent={data} /> */}
    </div>
  );
};

export default EventListPage;
