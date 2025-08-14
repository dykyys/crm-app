import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <h1>home page</h1>
      <Image src="/GHL.png" alt="test" width={300} height={300} />
      {/* <Image
        src="https://picsum.photos/seed/picsum/300/300"
        alt="test"
        width={300}
        height={300}
      /> */}
    </main>
  );
}
const customers = [
  {
    id: "u1",
    name: "Олена",
    tier: "gold",
    city: "Kyiv",
    orders: [
      {
        id: "o101",
        createdAt: "2025-07-28T10:15:00Z",
        items: [
          { sku: "SKU-1", title: "Mouse", qty: 1, price: 25 },
          { sku: "SKU-2", title: "Keyboard", qty: 1, price: 75 }
        ],
        payment: { method: "card", amount: 100, currency: "USD", status: "captured" },
        shipment: { carrier: "NovaPoshta", fee: 3.5, delivered: true }
      }
    ],
    reviews: [
      { sku: "SKU-1", rating: 4, text: "Good mouse" }
    ]
  },
  {
    id: "u2",
    name: "Іван",
    tier: "silver",
    city: "Lviv",
    orders: [
      {
        id: "o102",
        createdAt: "2025-07-30T08:05:00Z",
        items: [
          { sku: "SKU-2", title: "Keyboard", qty: 1, price: 80 },
          { sku: "SKU-4", title: "Webcam", qty: 1, price: 50 }
        ],
        payment: { method: "cash", amount: 130, currency: "USD", status: "pending" },
        shipment: { carrier: "NovaPoshta", fee: 4.1, delivered: true }
      }
    ],
    reviews: [
      { sku: "SKU-2", rating: 5, text: "Love it" },
      { sku: "SKU-4", rating: 3, text: "Okay" }
    ]
  },
  {
    id: "u3",
    name: "Марія",
    tier: "gold",
    city: "Kyiv",
    orders: [
      {
        id: "o103",
        createdAt: "2025-08-05T14:10:00Z",
        items: [
          { sku: "SKU-5", title: "Monitor", qty: 1, price: 200 }
        ],
        payment: { method: "card", amount: 200, currency: "USD", status: "captured" },
        shipment: { carrier: "NovaPoshta", fee: 6.0, delivered: false }
      }
    ],
    reviews: []
  },
  {
    id: "u4",
    name: "Петро",
    tier: "bronze",
    city: "Odessa",
    orders: [
      {
        id: "o104",
        createdAt: "2025-06-15T09:30:00Z",
        items: [
          { sku: "SKU-6", title: "Printer", qty: 1, price: 150 },
          { sku: "SKU-1", title: "Mouse", qty: 2, price: 20 }
        ],
        payment: { method: "cash", amount: 190, currency: "USD", status: "captured" },
        shipment: { carrier: "UkrPoshta", fee: 5.0, delivered: true }
      }
    ],
    reviews: [
      { sku: "SKU-6", rating: 4, text: "Works fine" }
    ]
  },
  {
    id: "u5",
    name: "Сергій",
    tier: "silver",
    city: "Dnipro",
    orders: [
      {
        id: "o105",
        createdAt: "2025-07-20T12:45:00Z",
        items: [
          { sku: "SKU-7", title: "Laptop Stand", qty: 1, price: 40 }
        ],
        payment: { method: "card", amount: 40, currency: "USD", status: "captured" },
        shipment: { carrier: "NovaPoshta", fee: 3.0, delivered: true }
      }
    ],
    reviews: []
  },
  {
    id: "u6",
    name: "Андрій",
    tier: "gold",
    city: "Kharkiv",
    orders: [
      {
        id: "o106",
        createdAt: "2025-08-01T15:25:00Z",
        items: [
          { sku: "SKU-3", title: "Headphones", qty: 1, price: 60 },
          { sku: "SKU-7", title: "Laptop Stand", qty: 1, price: 45 }
        ],
        payment: { method: "card", amount: 105, currency: "USD", status: "captured" },
        shipment: { carrier: "NovaPoshta", fee: 4.5, delivered: false }
      }
    ],
    reviews: [
      { sku: "SKU-3", rating: 5, text: "Amazing" }
    ]
  },
  {
    id: "u7",
    name: "Тетяна",
    tier: "silver",
    city: "Lviv",
    orders: [],
    reviews: []
  },
  {
    id: "u8",
    name: "Віктор",
    tier: "bronze",
    city: "Kyiv",
    orders: [
      {
        id: "o107",
        createdAt: "2025-05-10T11:00:00Z",
        items: [
          { sku: "SKU-8", title: "USB Hub", qty: 1, price: 15 }
        ],
        payment: { method: "cash", amount: 15, currency: "USD", status: "captured" },
        shipment: { carrier: "UkrPoshta", fee: 2.5, delivered: true }
      }
    ],
    reviews: []
  },
  {
    id: "u9",
    name: "Михайло",
    tier: "gold",
    city: "Kharkiv",
    orders: [
      {
        id: "o108",
        createdAt: "2025-08-06T16:00:00Z",
        items: [
          { sku: "SKU-2", title: "Keyboard", qty: 1, price: 78 },
          { sku: "SKU-3", title: "Headphones", qty: 2, price: 65 }
        ],
        payment: { method: "card", amount: 208, currency: "USD", status: "captured" },
        shipment: { carrier: "NovaPoshta", fee: 5.0, delivered: true }
      }
    ],
    reviews: [
      { sku: "SKU-2", rating: 4, text: "Nice" }
    ]
  },
  {
    id: "u10",
    name: "Оксана",
    tier: "silver",
    city: "Kyiv",
    orders: [
      {
        id: "o109",
        createdAt: "2025-07-18T13:20:00Z",
        items: [
          { sku: "SKU-9", title: "External SSD", qty: 1, price: 120 }
        ],
        payment: { method: "card", amount: 120, currency: "USD", status: "pending" },
        shipment: { carrier: "NovaPoshta", fee: 4.0, delivered: false }
      }
    ],
    reviews: []
  }
];
export const flattenOrders = (customers) => { /* ... */ };
export const sortByDateDesc = (orders, n=3) => { /* ... */ };
export const markOrderValidity = (orders) => { /* ... */ };
export const findPriceConflicts = (customers) => { /* ... */ };
export const revenueByCity = (orders) => { /* ... */ };
export const customersRanking = (orders) => { /* ... */ };
export const tiersSummary = (orders) => { /* ... */ };
export const skuStats = (customers) => { /* ... */ };
export const mergeReviewsIntoSkuStats = (skuStats, customers) => { /* ... */ };
export const frequentCombos = (customers, topK=5) => { /* ... */ };
export const buildCohorts = (customers) => { /* ... */ };
export const applyPriceOverrides = (customers, overrides) => { /* ... */ };
export const normalizeData = (customers) => { /* ... */ };
export const buildIndexes = (normalized) => { /* ... */ };
export const getOrdersBySku = (indexes, sku) => { /* ... */ };
export const getOrdersByUser = (indexes, userId) => { /* ... */ };
export const getOrdersByCity = (indexes, city) => { /* ... */ };
export const checkCapturedConsistency = (orders) => { /* ... */ };
export const buildReport = (customers) => { /* ... */ };
