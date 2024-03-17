import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let data = await request.json();
  let token = data.token;
  const payload = payloadAssembler(data);

  try {
    const response = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + (await token),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.log(response.text);
    }

    return new Response(JSON.stringify(await response.text()), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to send", { status: 400 });
  }
}

function payloadAssembler(data: any) {
  let token = data.token;

  //   Constructing final payload
  let userInfo = {
    title: data.title,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
  };

  delete data.token;
  delete data.title;
  delete data.firstname;
  delete data.lastname;
  delete data.email;

  data["Password"] = encoder(token, data.timestamp);

  return data;
}
function encoder(token: string, timestamp: string) {
  return Buffer.from("88990" + token + timestamp, "utf-8").toString("base64");
}

// {"BusinessShortCode":"88990",
// "Timestamp":"20240317184142","TransactionType":"CustomerBuyGoodsOnline",
// "Amount":"10",
// "PartyA":"799038737",
// "PartyB":"88990",
// "PhoneNumber":"799038737",
// "CallBackURL":"https://zinduka-afrika.org/thanks.html","AccountReference":"Zinduka Afrika Foundation","TransactionDesc":"This donation will help further our goals",

// "title":"Mr",
// "firstname":"Ian",
// "lastname":"Koech",
// "email":"ianovic8@live.com",
// "token":"2Py2Fof8MQcY0kqCtXipsXMLK7OS"}
