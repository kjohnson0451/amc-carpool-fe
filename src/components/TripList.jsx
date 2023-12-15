import { format, parseISO } from "date-fns"
import useTripData from "@hooks/useTripData"
import LabelValuePair from "@ui/LabelValuePair"

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
          } hover:bg-custom-purple-dark border-stone-600 grid-cols-fr group grid grid-cols-2 gap-4 rounded-lg border bg-custom-gray-darkest p-4 hover:cursor-pointer lg:grid-cols-4`}
          key={trip.id}
        >
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">Trip:</span>
            <span className="group-hover:text-custom-purple-link-hover link truncate group-hover:underline">
              {trip?.name}
            </span>
          </div>
          <LabelValuePair
            value={trip?.date && format(parseISO(trip?.date), "dd/MM/yy")}
          />
          <LabelValuePair label="Trailhead" value={trip?.trailhead} />
          <LabelValuePair
            label="Number of participants"
            value={trip?.totalParticipantCount}
          />
        </div>
      ))}
    </>
  )
}

export default TripList
