import { useQuery } from "@tanstack/react-query";
import Select from "./components/ui/Select";
import { TFL_API_BASE_URL } from "./constants";

interface StationCardProps {
  stationName: string;
  destination: string;
  time: string;
}

export function StationCard({
  destination = "Liverpool Street",
  time = "16:10",
}: StationCardProps) {
  return (
    <div className="text-xl bg-red-500 p-2 rounded-md flex justify-between">
      <h2>{destination}</h2>
      <ul className="">
        <li>{time}</li>
      </ul>
    </div>
  );
}

interface StationDropdownProps {
  onStationChange: (station: string) => void;
}

export function StationDropdown({ onStationChange }: StationDropdownProps) {
  return (
    <div className="text-xl bg-red-500 p-2 rounded-md flex justify-between">
      <h2>{destination}</h2>
      <ul className="">
        <li>{time}</li>
      </ul>
    </div>
  );
}

const stationList = ["Rectory Road", "Clapton"];

export default function Departures() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(`${TFL_API_BASE_URL}/Search?query={query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="container w-screen m-auto">
      <header className="border-b-2 pb-2 my-2">
        <h1 className="text-2xl">Departures</h1>
      </header>
      <main className="space-y-4">
        <Select options={stationList} />
        <StationCard />
      </main>
    </div>
  );
}
