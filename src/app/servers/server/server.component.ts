import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  allowEdit = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // With Resolver
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

    //// Without resolver
    // this.server = this.serversService.getServer(+this.route.snapshot.params['id']);


    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    // this.route.queryParams.subscribe(
    //   (params: Params) => {
    //     this.allowEdit = params['allowEdit'] === '1';
    //   }
    // );


  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }

}
