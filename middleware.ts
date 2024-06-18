import { NextResponse } from 'next/server'

export const middleware = (request) => {
  // Redirect every request to Home page
  return NextResponse.redirect(new URL('/', request.url))
}

export default middleware

// Export matchers (where we want this to run)
// (If we run on /todos endpoint requests then it will go Home)
// In this case, we'll run on /home
export const config = {
  matcher: ['/home'],
}
