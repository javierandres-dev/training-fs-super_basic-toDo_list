import { Component, OnInit } from '@angular/core';
import { PrivateService } from '../../services/private.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  constructor(private privateService: PrivateService) {}

  todos = <any>[];

  ngOnInit(): void {
    this.privateService.readTodos().subscribe(
      (res) => {
        this.todos = res.success;
      },
      (err) => console.log('err:', err)
    );
  }
}
