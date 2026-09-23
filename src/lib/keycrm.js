const KEYCRM_API_URL = "https://openapi.keycrm.app/v1";

/**
 * Базовая функция для выполнения запросов к KeyCRM API
 */
async function keyCrmFetch(endpoint, options = {}) {
  const token = process.env.KEYCRM_API_KEY;

  if (!token) {
    throw new Error("KEYCRM_API_KEY is not defined in environment variables");
  }

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(`${KEYCRM_API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `KeyCRM API Error: ${response.status}`,
    );
  }

  return response.json();
}

/**
 * Получение списка сущностей (например, карточек, заказов или контактов)
 * @param {string} endpoint - путь эндпоинта (например, '/pipelines/cards' или '/order')
 * @param {Object} params - параметры фильтрации/пагинации
 */
export async function getCrmData(endpoint = "/pipelines/cards", params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;

  return keyCrmFetch(url, {
    method: "GET",
    next: { revalidate: 0 }, // Отключаем кеширование для получения актуальных данных
  });
}

/**
 * Создание новой записи
 * @param {string} endpoint - путь эндпоинта (например, '/pipelines/cards' или '/order')
 * @param {Object} payload - данные для создания
 */
export async function createCrmData(endpoint, payload) {
  return keyCrmFetch(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Обновление существующей записи
 * @param {string} endpoint - путь эндпоинта с ID (например, '/pipelines/cards/123')
 * @param {Object} payload - данные для обновления
 */
export async function updateCrmData(endpoint, payload) {
  return keyCrmFetch(endpoint, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}
