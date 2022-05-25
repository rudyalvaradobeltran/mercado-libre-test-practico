import { useRouter } from 'next/router'

export default function Items () {
  const router = useRouter()
  const { search } = router.query

  return <p>Search: {search}</p>
}
