import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Edit profile picture',
      buttons: [{
        text: 'Choose from gallery',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Take a photo',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
