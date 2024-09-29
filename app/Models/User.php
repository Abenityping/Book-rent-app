<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * Role constants.
     */
    const ROLE_ADMIN = 'admin';
    const ROLE_OWNER = 'owner';
    const ROLE_RENTER = 'renter';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Check if the user is an admin.
     *
     * @return bool
     */
    public function isAdmin()
    {
        return $this->role === self::ROLE_ADMIN;
    }

    /**
     * Check if the user is an owner.
     *
     * @return bool
     */
    public function isOwner()
    {
        return $this->role === self::ROLE_OWNER;
    }

    /**
     * Check if the user is a renter.
     *
     * @return bool
     */
    public function isRenter()
    {
        return $this->role === self::ROLE_RENTER;
    }
}
