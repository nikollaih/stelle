<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    public function handle(Request $request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            // Redirect authenticated users away from the login page
            return redirect('/dashboard'); // Change '/home' to your desired route
        }

        return $next($request);
    }
}
