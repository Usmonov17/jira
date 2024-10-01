import { useQuery } from "@tanstack/vue-query"
import { Query } from "appwrite"
import { COLLECTION_DATA, DATA_ID, status } from "~/constants"
import { DATABASE } from "~/libs/appwrite"
import { useAuthStore } from "~/store/auth"
import type { IDeal } from "~/types"

export const useStatusQuery = () => {
  const { currentUser } = useAuthStore()

  return useQuery({
    queryKey: ['deals'],
    queryFn: () =>
      DATABASE.listDocuments(DATA_ID, COLLECTION_DATA, [
        Query.equal('userID', currentUser.id)
      ]),
    select: data => {
      const newBoard = status.map(item => ({
        ...item,
        items: []
      }))
      const deals = data.documents as unknown as IDeal[]

      for (const deal of deals) {
        const column = newBoard.find(item => item.id === deal.status)
      }
    }
  })
}