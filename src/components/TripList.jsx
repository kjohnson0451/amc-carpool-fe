import { format, parseISO } from "date-fns"
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
    <table className="min-w-full divide-y divide-stone-600">
      <thead>
        <tr>
          <th className="py-2 px-4">Trip title</th>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Trailhead</th>
          <th className="py-2 px-4">Number of Participants</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-600">
        {trips.map((trip) => (
          <tr key={trip.id} className="hover:bg-purple-900">
            <td className="py-2 px-4">{trip?.name}</td>
            <td className="py-2 px-4">
              {trip?.date && format(parseISO(trip?.date), "dd/MM/yy")}
            </td>
            <td className="py-2 px-4">{trip?.trailhead}</td>
            <td className="py-2 px-4">{trip?.totalParticipantCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TripList
