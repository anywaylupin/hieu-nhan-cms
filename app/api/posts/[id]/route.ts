import { getPageById } from '@/lib/notion';

export async function GET(request: Request, { params }: BlogRequest) {
  try {
    const { id } = await params;
    const response = await getPageById(Number(id));

    return Response.json(response);
  } catch (error) {
    return Response.json({ error });
  }
}
