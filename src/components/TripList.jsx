import { format, parseISO } from "date-fns"
import pluralize from "pluralize"
import useTripData from "@hooks/useTripData"

function TripList() {
  useTripData()
  const { data: trips, isLoading, isError } = useTripData()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching trips</p>
  }

  return (
    <>
      {trips.map((trip, index) => (
        <div
          className={`${
            index !== 0 ? "mt-2" : ""
          } grid-cols-fr group grid grid-cols-[1fr_125px] gap-4 rounded-lg border border-stone-600 bg-custom-gray-darkest p-4 text-sm hover:cursor-pointer hover:bg-custom-purple-dark lg:grid-cols-[1fr_90px_1fr_125px]`}
          key={trip.id}
        >
          <div className="truncate">
            <span className="font-semibold">Trip:</span>
            <span className="link ml-1 group-hover:text-custom-purple-link-hover group-hover:underline">
              {trip?.name}
            </span>
          </div>
          <span className="truncate">
            {trip?.date && format(parseISO(trip?.date), "dd/MM/yy")}
          </span>
          <div className="truncate">
            <span className="font-semibold">Trailhead:</span>
            <span className="ml-1">{trip?.trailhead}</span>
          </div>
          <span className="truncate">
            {`${trip?.totalParticipantCount} ${pluralize(
              "participant",
              trip?.totalParticipantCount,
            )}`}
          </span>
        </div>
      ))}
    </>
  )
}

export default TripList
