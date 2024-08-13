import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  // return <EventsList events={events} />;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents(params) {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // const res = new Response(resData, { status: 201 });
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}
