<?php

namespace App\Http\Middleware;

use Closure;

use App\Models\UsersModel;

class AuthApi
{
    public function handle($request, Closure $next, $roles)
    {
        
        $user = UsersModel::select('id', 'role', 'token_date')->where('token', $request->bearerToken())->first();
        
        // Если пользователя с таким токеном нет, возвращаем ошибку
        if(!$user){
            return response()->json(['code' => 'auth_001', 'message' => 'Авторизуйтесь для получения доступа к данному действию'], 403);
        }

        // Если срок действия токена истёк, возвращаем ошибку
        if(strtotime(date('Y-m-d H:i:s')) - strtotime($user->token_date) >= 86400){
            return response()->json(['code' => 'auth_002', 'message' => 'Срок действия токена авторизации истёк'], 403);
        }

        // Если роль пользователя не соответствует указанным ролям доступа, возвращаем ошибку
        if($roles){
            if(!in_array($user->role, explode('|', $roles))){
                return response()->json(['code' => 'auth_003', 'message' => 'У вас нет прав доступа к данному действию'], 403);
            }
        }

        return $next($request);
    }
}
