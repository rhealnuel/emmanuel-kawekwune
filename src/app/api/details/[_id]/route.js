import { connectToDatabase } from '@/lib/mongodb';
import MyModel from '@/models/myModel';

// GET a Single Entry
export async function GET(req, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    const detail = await MyModel.findById(id);
    if (!detail) return Response.json({ error: 'Not found' }, { status: 404 });

    return Response.json(detail, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

// UPDATE an Entry
export async function PUT(req, { params }) {
  await connectToDatabase();
  const { id } = params;
  const body = await req.json();

  try {
    const updated = await MyModel.findByIdAndUpdate(id, body, { new: true });
    if (!updated) return Response.json({ error: 'Not found' }, { status: 404 });

    return Response.json(updated, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to update' }, { status: 500 });
  }
}

// DELETE an Entry
export async function DELETE(req, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    await MyModel.findByIdAndDelete(id);
    return Response.json({ message: 'Deleted successfully' }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
