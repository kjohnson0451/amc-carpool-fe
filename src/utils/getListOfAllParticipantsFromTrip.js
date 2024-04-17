// A trip includes of a collection of ungrouped participants
// and participants grouped in carpools. This function takes
// a trip as an arg, steps through the ungrouped and grouped
// participants, and returns a list of all participants without
// considering if they're ungrouped or which group they're part of.

const getListOfAllParticipantsFromTrip = (trip) => {
  if (!trip) return null

  const participants = trip.Participants
  const carpoolParticipants = trip.CarpoolGroups.flatMap(
    (group) => group.Participants,
  )
  return [...participants, ...carpoolParticipants]
}

export default getListOfAllParticipantsFromTrip
