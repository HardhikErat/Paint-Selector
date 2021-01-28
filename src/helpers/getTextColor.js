import chroma from 'chroma-js'

function getTextColor(color){
    if(chroma.contrast(color, 'white') < 4.5){
        return 'black'
    }else{
        return 'white'
    }
}
export default getTextColor