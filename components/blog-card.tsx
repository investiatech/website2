import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'
import { BlogPost } from '@/app/lib/blog-data'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full transition-colors hover:bg-accent overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.image || "/images/investia.tech_stock.png"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="font-mono text-xs">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {new Date(post.date).toLocaleDateString('pl-PL')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {post.readTime}
              </span>
            </div>
          </div>
          <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
          <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Autor: {post.author}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
