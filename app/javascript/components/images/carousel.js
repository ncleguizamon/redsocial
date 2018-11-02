import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import KeyboartdArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';import keyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
;

const styles ={
    image:{
        maxWidth: "100%"
    }, 
    container: {
      overflow: "hidden"
    },
    infiniteWidth: {
        whiteSpace: 'nowrap',
        position: "relative",
        transition: "all 0.4s", 
        left: "0px"
    }, 
    controls: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    leftButton: {
        position:"absolute",
        top: "48%",
        left:"-1.8em"
    },
    rightButton: {  
   position:"absolute",
    top: "48%",
    right:"-1.8em"}
}


export class Carousel extends React.Component{
   
    constructor(props){
       super(props);

       this.state ={
           images: []
       }
    }
 images() {
     return this.props.images.map(image => {
    return  <img style={styles.image} src={image.urls.original} />  
     });
 }

getLetftValue() { // obtemos la posicion de donde se encuentra la propiedad left
    let styles = window.getComputedStyle(this.refs.carousel, null);
return parseInt(styles.getPropertyValue("left"));
}


goLeft() {
let currentPosition = this.getLetftValue();
let newPosition= currentPosition + 300;
if(newPosition > 0) newPosition = 0;
    this.refs.carousel.style.left =  newPosition + "px";

}
getContainerWidth() {
    let styles = window.getComputedStyle(this.refs.carousel.firstChild, null);
    let imgWidth =  parseInt(styles.getPropertyValue("width"));
    return imgWidth * (this.props.images.length -1);
}

goRight() {
    let currentPosition = this.getLetftValue();
    let newPosition= currentPosition - 300;
    if((newPosition * -1) > this.getContainerWidth()) newPosition = -this.getContainerWidth();
        this.refs.carousel.style.left =  newPosition + "px";

}

controls() {
    if(this.props.images.length <= 1) return "";
    return(
        <div  style={styles.controls} >
        <FloatingActionButton  onClick={(e) => this.goLeft() } style={styles.leftButton} secondary={true} >
            <KeyboartdArrowLeft />
        </FloatingActionButton>
        <FloatingActionButton  onClick={(e) => this.goRight() } style={styles.rightButton}  secondary={true}>
            <KeyboardArrowRight />
        </FloatingActionButton>
</div>
    );
}

    render() {
        return(
        <div style={{position: "relative"}} >
      {this.controls()}
            <div style={styles.container}>
           <div  style={styles.infiniteWidth} ref="carousel"  >       
                {this.images()}
            </div>
        </div>
    </div>
        );
    }
}