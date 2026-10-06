import { NextResponse } from "next/server";

const KEYCRM_API_URL = "https://openapi.keycrm.app/v1";

/**
 * Вспомогательная функция отправки запроса в KeyCRM
 */
async function sendToKeyCrm(endpoint, payload) {
  const token = process.env.KEYCRM_API_KEY;

  if (!token) {
    throw new Error("KEYCRM_API_KEY не установлен в переменном окружения");
  }

  const response = await fetch(`${KEYCRM_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `KeyCRM Error: ${response.status}`);
  }

  return data;
}

/**
 * POST обработчик Next.js Route Handler
 */
export async function POST(request) {
  try {
    const orderPayload = await request.json();

    // Отправляем заказ на эндпоинт /order
    const result = await sendToKeyCrm("/order", orderPayload);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Ошибка сервера" },
      { status: 500 },
    );
  }
}
