import { LightningElement } from 'lwc';
import FONT_AWESOME from '@salesforce/resourceUrl/fontawesome';
import { loadStyle} from 'lightning/platformResourceLoader';

export default class MemoryGameLwc extends LightningElement {

    isLibLoaded = false

    renderedCallback(){
        if(this.isLibLoaded){
            return
        }else{
            loadStyle(this, FONT_AWESOME + '/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log("loaded succesfully")
            }).catch(error=>{
                console.error(error)
            })
            this.isLibLoaded = true
        }
    }

}