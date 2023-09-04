export interface Column {
  header: string;
  property: string;
  type?: 'text' | 'textarea' | 'number' | 'edit';
  editable?: boolean;
}
