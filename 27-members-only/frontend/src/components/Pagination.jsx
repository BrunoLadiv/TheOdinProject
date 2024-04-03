import { useEffect } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'react-router-dom'

export default function Pagination({ active, setActive, totalPages }) {
  const [, setSearchParams] = useSearchParams({})

  useEffect(() => {
    setSearchParams({ page: active })
  }, [active])

  const next = () => {
    if (active === totalPages) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active <= 1) return

    setActive(active - 1)
  }

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-8">
        <div
          className={active === 1 ? 'hidden' : ''}
          onClick={prev}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </div>
        <p color="gray" className="font-normal">
          Page <strong className="text-gray-900">{active}</strong> of{' '}
          <strong className="text-gray-900">{totalPages}</strong>
        </p>
        <div className={active === totalPages ? 'hidden' : ''} onClick={next}>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
