<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

use App\Models\PaymentsModel;

class PaymentsController extends Controller
{
    public function createPayment(Request $request)
    {
        $data = $request->post();

        // Валидация данных
        $validate = Validator::make($data, 
        [
            'login' => ['required', 'string', 'max:20'],
            'properties' => ['required', 'string'],
            'sum'=> ['required', 'numeric'],
            'currency'=> ['required', Rule::in(['RUB', 'USD'])],
        ], 
        [
            'login.required' => 'Поле "Логин" не должно быть пустым',
            'login.max' => 'Поле "Логин" не быть больше 20 символов',
            'properties.required' => 'Поле "Реквизиты" не быть пустым',
            'sum.required' => 'Поле "Сумма" не должно быть пустым',
            'sum.numeric' => 'Поле "Сумма" должно быть числом',
            'currency.required' => 'Поле "Валюта" не должно быть пустым',
        ]);
        
        // Если валидация не пройдена, возвращаем ошибку
        if($validate->fails()){
            return response()->json(['code' => 'payments_001', 'message' => 'Некоторые поля заполнены неверно', 'errors' => $validate->errors()], 405);
        }

        // Создаём новую выплату
        $model = new PaymentsModel;
        $model->login = $data['login'];
        $model->properties = $data['properties'];
        $model->sum = $data['sum'] ?? 0;
        $model->currency = $data['currency'];
        $model->status = false;

        try {
            $model->save();
        } catch (\Throwable $th) {
            return response()->json(['code' => 'payments_002', 'message' => 'Не удалось создать выплату'], 401);
        }
    }

    public function getList(Request $request)
    {
        $model = PaymentsModel::orderBy('created_at', 'desc')->get();

        return response()->json(['result' => $model]);
    }

    public function updateStatus(Request $request)
    {
        $data = $request->post();

        // Валидация данных
        $validate = Validator::make($data, 
        [
            'id' => ['required', 'numeric'],
            'status' => ['required', Rule::in([true, false])]
        ]);
        
        // Если валидация не пройдена, возвращаем ошибку
        if($validate->fails()){
            return response()->json(['code' => 'payments_001', 'message' => 'Некоторые поля заполнены неверно', 'errors' => $validate->errors()], 405);
        }

        // Получаем выплату по идентификатору
        $model = PaymentsModel::where('id', $data['id'])->first();

        // Если выплата с таким ID не существует, возвращаем ошибку
        if(!$model){
            return response()->json(['code' => 'payments_003', 'message' => 'Не удалось изменить статус выплаты. Выплата с такими параметрами не существует'], 401);
        }

        $model->status = $data['status'];

        try {
            $model->save();
        } catch (\Throwable $th) {
            return response()->json(['code' => 'payments_004', 'message' => 'Не удалось выполнить операцию'], 401);
        }
    }
}
