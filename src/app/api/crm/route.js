import { NextResponse } from "next/server";
import { createCrmData, getCrmData, updateCrmData } from "@/lib/keycrm";

// GET: Получение массива данных
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || "15";
    const page = searchParams.get("page") || "1";

    // Пример: получение карточек воронок (Pipelines Cards)
    const data = await getCrmData("/pipelines/cards", { limit, page });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Создание новой записи
export async function POST(request) {
  try {
    const body = await request.json();

    // Пример создания карточки в KeyCRM
    const newCard = await createCrmData("/pipelines/cards", body);

    return NextResponse.json(newCard, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Обновление записи
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateFields } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required for update" },
        { status: 400 },
      );
    }

    // Пример обновления карточки по ID
    const updatedCard = await updateCrmData(
      `/pipelines/cards/${id}`,
      updateFields,
    );

    return NextResponse.json(updatedCard);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
