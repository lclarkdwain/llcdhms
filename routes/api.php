<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');

    Route::get('getAllEmployees', 'EmployeesController@getAllEmployees');
    Route::post('addEmployee', 'EmployeesController@addEmployee');
    Route::post('removeEmployee', 'EmployeesController@removeEmployee');
    Route::post('deactivateEmployee', 'EmployeesController@deactivateEmployee');
    Route::post('activateEmployee', 'EmployeesController@activateEmployee');

    Route::get('getAllPatients', 'PatientsController@getAllPatients');

    Route::get('getAllLab', 'LaboratoryController@getAllLab');

    Route::get('getAllMedicines', 'MedicinesController@getAllMedicines');

    Route::get('getAllHistory', 'HistoryController@getAllHistory');
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});
