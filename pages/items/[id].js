import { useRouter } from 'next/router'

export default function ItemById () {
  const router = useRouter()
  const { id } = router.query

  return <p>Item: {id}</p>
}
