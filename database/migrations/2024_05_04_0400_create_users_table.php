git <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastname');
            $table->string('surname')->nullable();
            $table->date('birthdate');
            $table->boolean('is_admin')->default(false);
            $table->unsignedInteger('report_counter')->default(0);
            $table->unsignedInteger('utilized_counter')->default(0);
            $table->float('rating');
            $table->string('city');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
