import { useQuery } from "@tanstack/react-query";
import Select from "./components/ui/Select";
import { TFL_API_BASE_URL } from "./constants";
import { StationCard } from "./components/StationCard";
import { useState } from "react";

const stationList = ["Rectory Road", "Clapton"];

export default function Departures() {
  const defaultQuery = window.location.pathname.split("/")[1] ?? stationList[0];

  const [query, setQuery] = useState(defaultQuery);

  const { data: stationData, isPending: stationDataLoading } = useQuery({
    queryKey: ["station-data"],
    queryFn: async () => {
      const response = await fetch(
        `${TFL_API_BASE_URL}/StopPoint/Search/${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    select: (data) =>
      data.matches.filter((item: any) => item.modes.includes("overground")),
  });

  console.log(stationData);

  const { data: departuresData, isPending: departuresDataLoading } = useQuery({
    queryKey: ["departures-data"],
    queryFn: async () => {
      const response = await fetch(
        `${TFL_API_BASE_URL}/StopPoint/${stationData[0]?.id}/ArrivalDepartures?lineIds=weaver`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!stationData,
    select: (data) =>
      data

        .map((item) => ({
          departureStatus: item.departureStatus,
          destination: item.destinationName,
          estimatedTimeOfDeparture: item.estimatedTimeOfDeparture,
          timeToDeparture: item.minutesAndSecondsToDeparture,
        }))
        .sort(
          (a, b) =>
            new Date(a.estimatedTimeOfDeparture) -
            new Date(b.estimatedTimeOfDeparture)
        ),
  });

  if (stationDataLoading || departuresDataLoading) {
    return <div>Loading...</div>;
  }

  console.log("departuresData", departuresData);

  return (
    <div className="container w-2/3 m-auto">
      <header className="border-b-2 border-border pb-2 mt-12 mb-14">
        <h1 className="text-3xl">Departures</h1>
      </header>
      <main className="space-y-8">
        <Select options={stationList} />
        {departuresData.map((d) => (
          <StationCard
            estimatedTimeOfDeparture={d.estimatedTimeOfDeparture}
            destination={d.destination}
            status={d.departureStatus}
          />
        ))}
      </main>
    </div>
  );
}
