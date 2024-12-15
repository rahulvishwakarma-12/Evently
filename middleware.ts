import { clerkMiddleware ,createRouteMatcher } from '@clerk/nextjs/server'

const PublicRoutes = createRouteMatcher([
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    'api/uploadthing',
    '/sign-in(.*)', '/sign-up(.*)'

])
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
export default clerkMiddleware(async (auth, request) => {
    if (!PublicRoutes(request)) {
      await auth.protect()
    }
  })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    
  ],
}