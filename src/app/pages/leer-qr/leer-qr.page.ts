import { Component, OnInit } from '@angular/core';
//import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQRPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}

//Escanear = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below

//await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below

    //BarcodeScanner.hideBackground();

   // const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content

//   if (result.hasContent) {
//     console.log(result.content); // log the raw scanned content
// }
// };


//}
