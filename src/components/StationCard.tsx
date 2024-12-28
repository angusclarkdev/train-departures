interface StationCardProps {
  status: string;
  destination: string;
  estimatedTimeOfDeparture: string;
}

export function StationCard({
  destination = "Liverpool Street",
  estimatedTimeOfDeparture,
}: StationCardProps) {
  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(new Date(estimatedTimeOfDeparture));

  const timeToDeparture = Math.floor(
    (new Date(estimatedTimeOfDeparture) - new Date()) / (1000 * 60)
  );
  return (
    <div className="text-xl bg-surface p-2 border-border border-2 rounded-md flex justify-between">
      <div>
        <h2 className="text-sm text-accent">Destination</h2>
        <p>{destination}</p>
      </div>
      <div className="flex gap-12">
        <div>
          <h2 className="text-sm text-accent">Expected</h2>
          <p>{formattedTime}</p>
        </div>
        <div>
          <h2 className="text-sm text-accent">In</h2>
          <p>{`${timeToDeparture} minutes`}</p>
        </div>
      </div>
    </div>
  );
}
