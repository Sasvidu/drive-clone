import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  path: string[]
  onNavigate: (index: number) => void
}

export function Breadcrumb({ path, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="#" className="text-gray-400 hover:text-white" onClick={() => onNavigate(-1)}>
            My Drive
          </Link>
        </li>
        {path.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <Link
                href="#"
                className="ml-1 text-sm font-medium text-gray-400 hover:text-white md:ml-2"
                onClick={() => onNavigate(index)}
              >
                {item}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

