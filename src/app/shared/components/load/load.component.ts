import { Component, OnInit } from '@angular/core';


let showLoad: boolean;
export let load = {


  /**
   * Exibe o load em Fullscreen
   */
  show()
  {
    showLoad = true;
  },
  /**
     * Esconde o load em Fullscreen
     */
  hide()
  {
    showLoad = false;
  }
};

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit
{

  public showLoad: boolean;

  constructor() { showLoad = true }

  ngOnInit() { }

  public get loading()
  {
    return showLoad;
  }

}
