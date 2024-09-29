<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');            // Book title
            $table->string('author');           // Book author
            $table->integer('quantity');        // Quantity available for rent
            $table->unsignedBigInteger('category_id'); // Reference to category
            $table->unsignedBigInteger('owner_id');    // Reference to book owner (user)
            $table->decimal('rental_price', 8, 2);     // Rental price for the book
            $table->boolean('approved')->default(false); // Admin approval status
            $table->timestamps();

            // Foreign key references
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
