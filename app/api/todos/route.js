import { connectMongoDB } from "@/app/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";


// Fungsi untuk mendapatkan semua todo
// Mengambil semua todo dari database dan mengembalikannya sebagai respons JSON.
export const GET = async () => {
  try {
    await connectMongoDB(); // Sambungkan ke MongoDB
    const todos = await Todo.find(); // Dapatkan semua todo dlm variabel todoschema
    return NextResponse.json(todos); // Kembalikan respons JSON
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

// Fungsi untuk membuat todo baru
// Mengambil data dari permintaan untuk mencipta todo baru, menyimpannya ke dalam database, dan mengembalikan todo yang baru dicipta.
export const POST = async (request) => {
    try {
      const { title,completed } = await request.json(); // Ambil data dari permintaan (input field)
      await connectMongoDB(); // Sambungkan ke MongoDB
      const todo = new Todo({ title,completed }); // Buat todo baru
      const newTodo = await todo.save(); // Simpan todo ke dalam database
      return NextResponse.json(newTodo, { status: 201 }); // Kembalikan respons JSON
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 });
    }
}

// Fungsi untuk mengemas kini todo
// Mengambil data dari permintaan untuk mengemas kini todo berdasarkan ID, dan mengembalikan todo yang telah dikemas kini.
export const PUT = async (request) => {
    try {
      const { _id, title, completed } = await request.json(); // Ambil data dari permintaan (frontend side)
      await connectMongoDB(); // Sambungkan ke MongoDB
      const updatedTodo = await Todo.findByIdAndUpdate(_id,{ title, completed },{ new: true }); // Kembalikan dokumen yang telah dikemas kini
       if (!updatedTodo) {
         return NextResponse.json({ error: "Todo not found" }, { status: 404 });
       }
       return NextResponse.json(updatedTodo); // Kembalikan respons JSON
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 });
    }
}

// Fungsi untuk menghapus todo
// Mengambil ID dari permintaan untuk menghapus todo, dan mengembalikan mesej kejayaan jika todo berjaya dihapus.
export const DELETE = async (request) => {
    try {
      const { _id } = await request.json(); // Ambil data dari permintaan .Backend menerima ID tersebut melalui request.json()
      await connectMongoDB(); // Sambungkan ke MongoDB
      const deletedTodo = await Todo.findByIdAndDelete(_id); // Hapus todo berdasarkan ID
      if (!deletedTodo) {
        return NextResponse.json({ error: "Todo not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Todo deleted successfully" }); // Kembalikan respons JSON
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 });
    }
}