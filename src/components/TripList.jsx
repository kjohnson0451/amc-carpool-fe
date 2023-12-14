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
          } hover:bg-custom-purple-dark border-stone-600 group grid grid-cols-2 gap-4 rounded-lg border bg-custom-gray-darkest p-4 hover:cursor-pointer md:grid-cols-4`}
          key={trip.id}
        >
          <div>
            <p className="mr-3 inline-block font-semibold">Trip:</p>
            <p className="group-hover:text-custom-purple-link-hover link inline-block group-hover:underline">
              {trip?.name}
            </p>
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
