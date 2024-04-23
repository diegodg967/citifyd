import axios from "axios";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const url = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_URL || "";

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      query,
    },
  });

  return Response.json(response.data.results || []);
}
