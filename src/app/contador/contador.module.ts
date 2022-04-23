import {NgModule} from '@angular/core'
import { contadorComponet } from './contador/contador.component';

@NgModule({
    declarations:[
        contadorComponet
    ],
    exports:[
        contadorComponet
    ]
})
export class ContadorModule{

}