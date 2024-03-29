import { format, parseISO } from "date-fns"
import useDeleteTrip from "@hooks/trips/useDeleteTrip"
import pluralize from "pluralize"
import { Link } from "react-router-dom"
import ConfirmDeleteModal from "@ui/ConfirmDeleteModal"

function TripListEntry({ trip, index }) {
  const { mutate: deleteTrip, isPending: isDeleting } = useDeleteTrip()

  return (
    <Link to={`/trips/${trip.id}`}>
      <div
        className={`${
          index !== 0 ? "mt-2" : ""
        } group grid grid-cols-[1fr_125px] gap-4 rounded-lg border border-stone-600 bg-custom-gray-darkest p-4 text-sm hover:cursor-pointer hover:bg-custom-purple-dark lg:grid-cols-[1fr_90px_1fr_125px_80px]`}
      >
        <div className="self-center truncate">
          <span className="font-semibold">Trip:</span>
          <span className="link ml-1 group-hover:text-custom-purple-link-hover group-hover:underline">
            {trip?.name}
          </span>
        </div>
        <span className="self-center truncate">
          {trip?.date && format(parseISO(trip?.date), "MM/dd/yy")}
        </span>
        <div className="self-center truncate">
          <span className="font-semibold">Trailhead:</span>
          <span className="ml-1">{trip?.trailhead}</span>
        </div>
        <span className="self-center truncate">
          {`${trip?.totalParticipantCount} ${pluralize(
            "participant",
            trip?.totalParticipantCount,
          )}`}
        </span>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <span
          onClick={(e) => {
            e.preventDefault()
          }}
          className="col-start-2 self-center lg:col-start-5"
        >
          <ConfirmDeleteModal
            resourceName="Trip"
            onConfirm={() => deleteTrip(trip.id)}
            disabled={isDeleting}
          />
        </span>
      </div>
    </Link>
  )
}

export default TripListEntry
