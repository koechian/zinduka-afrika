export async function POST(request: Request) {
  try {
    const response = await fetch(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + encoder(),
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log(response.text);
    }

    return new Response(JSON.stringify(await response.text()), { status: 200 });
  } catch (error) {
    return new Response("Failed to auth", { status: 400 });
  }
}

function encoder() {
  return Buffer.from(
    process.env.KEY + ":" + process.env.SECRET,
    "utf-8"
  ).toString("base64");
}
