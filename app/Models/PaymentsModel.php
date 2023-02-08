<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentsModel extends Model
{
    protected $table = 'payments';

    protected $attributes = [
        'sum' => 0,
        'currency' => 'RUB',
        'status' => false
    ];
}