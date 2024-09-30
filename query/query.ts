import { useQuery } from "@tanstack/vue-query"
import { Query } from "appwrite"
import { COLLECTION_DATA, DATA_ID } from "~/constants"
import { DATABASE } from "~/libs/appwrite"
import { useAuthStore } from "~/store/auth"

export const useStatusQuery = () => {
  const { currentUser } = useAuthStore()

  return useQuery({
    queryKey: ['deals'],
    queryFn: () => {
      DATABASE.listDocuments(DATA_ID, COLLECTION_DATA), [
        Query.equal('userID', currentUser.id)
      ]
    }
  })
}