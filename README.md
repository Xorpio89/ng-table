# 📊 Angular AI Data Table

> A fully-featured, AI-powered data table component built with Angular 17 — Signals, inline editing, and natural language filtering.

![Angular](https://img.shields.io/badge/Angular_17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

## What it does

Drop-in Angular table component with column configuration, inline editing, and an AI filter bar — type "show users from Berlin joined last month" and it just works.

- ✏️ **Inline editing** — click any cell to edit, type-safe per column
- 🤖 **AI Filter** — natural language queries via Claude API
- ⚡ **Angular Signals** — zero-boilerplate reactive state
- 🎨 **Headless styling** — bring your own CSS or use the included dark theme
- 🔌 **Generic types** — works with any data shape

## Usage

```typescript
@Component({
  template: `
    <app-table
      [data]="products()"
      [columns]="columns"
      [aiFilter]="true"
      (rowEdit)="onEdit($event)"
    />
  `
})
export class ProductsComponent {
  products = signal<Product[]>([]);

  columns: Column[] = [
    { header: 'Name',     property: 'name',  type: 'text' },
    { header: 'Price',    property: 'price', type: 'number', editable: true },
    { header: 'Category', property: 'cat',   type: 'text',   editable: true },
  ];
}
```

## AI Filter Example

```
"show products under €50"           → filters price < 50
"only active users"                 → filters status = active
"sort by latest and show top 5"     → sorts + limits
```

## Stack

| | |
|--|--|
| Framework | Angular 17 (Standalone Components) |
| State | Angular Signals |
| Reactivity | RxJS |
| AI | Claude API (filter parsing) |
| Styling | CSS Custom Properties (themeable) |

## Column Config

```typescript
interface Column {
  header: string;
  property: string;
  type?: 'text' | 'textarea' | 'number' | 'edit';
  editable?: boolean;
  sortable?: boolean;   // v2
  filterable?: boolean; // v2
}
```

## Demos

| View | Dataset |
|------|---------|
| Products List | 500 mock products, AI filter enabled |
| Users List | 200 users, inline edit enabled |

---

Built as a modern Angular showcase — demonstrates Signals, generics, and LLM-powered UX patterns.
