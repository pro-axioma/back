<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

use App\Models\UsersModel;

class UsersController extends Controller
{
    // Создание пользователя с ролью именно админа
    public function createUser(Request $request)
    {
        $data = $request->post();

        // Валидация данных
        $validate = Validator::make($data, 
        [
            'name' => ['required', 'string', 'max:20'],
            'email' => ['required', 'email'],
            'password'=> ['required']
        ], 
        [
            'name.required' => 'Поле "Имя" не должно быть пустым',
            'name.max' => 'Поле "Имя" не должно содержать более 20 символов',
            'email.required' => 'Поле "Электронная почта" не должно быть пустым',
            'email.email' => 'Поле "Поле "Электронная почта" должно содержать знак @',
            'password.required' => 'Поле "Пароль" не должно быть пустым'
        ]);
        
        // Если валидация не пройдена, возвращаем ошибку
        if($validate->fails()){
            return response()->json(['code' => 'users_001', 'message' => 'Некоторые поля заполнены неверно', 'errors' => $validate->errors()], 405);
        }
        
        // Создаём нового пользователя
        $model = new UsersModel;
        $model->name = $data['name'];
        $model->email = $data['email'];
        $model->password = Hash::make($data['password']);
        $model->role = 'admin';
        $model->token = Str::random(30);
        $model->token_date = date('Y-m-d H:i:s');

        try {
            $model->save();
        } catch (\Throwable $th) {
            return response()->json(['code' => 'users_002', 'message' => 'Не удалось зарегистрировать пользователя'], 401);
        }
        
        return response()->json(['result' => $model->token]);
    }
}