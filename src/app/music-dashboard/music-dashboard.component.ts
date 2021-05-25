import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-music-dashboard',
  templateUrl: './music-dashboard.component.html',
  styleUrls: ['./music-dashboard.component.scss']
})

export class MusicDashboardComponent implements OnInit {
  musicData: any;
  filteredMusicData= [];
  searchText: string;
  constructor(private apiservice: ApiService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.loadMusic();
  }

  search() {
    console.log(this.searchText)
    const s: any = document.getElementById('searchText')
    this.filterMusicList(this.musicData, s.value)
  }
  filterMusicList(filters: any, searchText: any): void {
    searchText = searchText.toLowerCase();
    let filteredArr: any = []
    if(searchText) {
      filters.forEach((t: any) => {
        console.log(t)
       if (t.keywords.includes(searchText) || t.title.toLowerCase().includes(searchText)
        || t.description.includes(searchText)) {
         filteredArr.push(t);
       }
      });
      this.filteredMusicData = filteredArr;
    } else {
      this.filteredMusicData = this.musicData;
    }
		}

		loadMusic(): void {
      this.storageService.isLoader = true;
			this.apiservice.getMusicData().subscribe((data: any) => {
        if(data && data.sections && data.sections[0] && data.sections[0].assets) {
          this.musicData = data.sections[0].assets;
          this.filteredMusicData = this.musicData;
        }
        this.storageService.isLoader = false;
      });
  
		}
}
