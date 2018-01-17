import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RoomService} from '../../service/room.service';
import {Room} from '../../model/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomService]
})
export class RoomComponent implements OnInit{

  displayedColumns = ['name', 'description', 'actions'];
  dataSource: MatTableDataSource<Room>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public roomService: RoomService) {
    this.dataSource = new MatTableDataSource();
    this.roomService.list().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {

  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }


  add(){

  }

  view(id:string){
    console.log(id);
  }

  delete(id:string){
    console.log(id);
  }

}
