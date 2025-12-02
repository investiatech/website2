import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, BarChart3 } from 'lucide-react'
import type { Webinar } from '@/lib/webinar-data'

interface WebinarCardProps {
    webinar: Webinar
}

export function WebinarCard({ webinar }: WebinarCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('pl-PL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Początkujący':
                return 'text-green-600 bg-green-50 border-green-200'
            case 'Średniozaawansowany':
                return 'text-blue-600 bg-blue-50 border-blue-200'
            case 'Zaawansowany':
                return 'text-purple-600 bg-purple-50 border-purple-200'
            default:
                return 'text-gray-600 bg-gray-50 border-gray-200'
        }
    }

    return (
        <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
            <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                    src={webinar.image || "/placeholder.svg"}
                    alt={webinar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {webinar.isUpcoming && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Nadchodzący
                    </div>
                )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(webinar.level)}`}>
                        {webinar.level}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {webinar.category}
                    </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {webinar.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {webinar.description}
                </p>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="size-4" />
                        <span>{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="size-4" />
                        <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="size-4" />
                        <span>{webinar.instructor}</span>
                    </div>
                </div>

                <Button asChild className="w-full mt-auto">
                    <Link href={`/webinar/register/${webinar.id}`}>
                        Zarejestruj się
                    </Link>
                </Button>
            </div>
        </Card>
    )
}
