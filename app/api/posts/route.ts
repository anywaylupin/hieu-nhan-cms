import { getBlogPosts } from '@/lib/notion';

export async function GET() {
  try {
    const response = await getBlogPosts({
      filter: { and: [{ type: 'checkbox', property: 'Published', checkbox: { equals: true } }] }
    });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error });
  }
}
