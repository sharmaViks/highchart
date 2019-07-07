import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }
    getData(): any {
        return this.httpClient.get('assets/data.json')
    }
    getSidebarData() {
        return this.httpClient.get('assets/sidebarMenu.json');
    }
    getInvolvedTeam(){
        return this.httpClient.get('assets/teamMembers.json')
    }

}