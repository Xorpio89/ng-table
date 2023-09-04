import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    CdkDropList,
    CdkDrag,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
  ],
})
export class AppTableComponent implements OnChanges, AfterViewInit {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  pageSize: number = 10;
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get columnProperties(): string[] {
    return this.columns.map((column) => column.property);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.data) {
      this.dataSource.data = this.data;
    }
  }

  columnSettings(identifier: string): any[] {
    return this.columns.map((column) => column[`${identifier}`]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
