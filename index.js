function animalsound(name){
    const soundeff = sound.find(item=>{
        if(item.name===name){
         return item.soundname;
    }
    })
    const plug = new Audio(soundeff.soundname);
    plug.play();
    
       
    }
    
        const sound =[
            {
                name:"Dog",
                soundname:"/sound/dog.wav"
        
           },
           {
                name:"Cat",
                soundname:"/sound/cat.wav"
        
           },
           {
                name:"Hen",
                soundname:"/sound/chicken.mp3"
        
           },
           {
                name:"Dove",
                soundname:"/sound/dove.mp3"
        
           },
           {
                name:"Bat",
                soundname:"/sound/Bat.mp3"
        
           },
           {
                name:"Duck",
                soundname:"/sound/duck.mp3"
        
           },
           {
                name:"Lion",
                soundname:"/sound/Lion.mp3"
        
           },
           {
                name:"Wolf",
                soundname:"/sound/wolf.mp3"
        
           },
           {
                name:"Elephant",
                soundname:"/sound/elephant.mp3"
        
           },
           {
                name:"Bee",
                soundname:"/sound/bee.mp3"
        
           },
           {
                name:"Cow",
                soundname:"/sound/cow.wav"
        
           },
           {
                name:"Horse",
                soundname:"/sound/horse.mp3"
        
           },
        ];
    
    const divelement = [];
    document.querySelectorAll("div").forEach((item,index)=>{
      if(index>2){  
     divelement.push(item);
      } 
      });
     divelement.forEach(ele=>{
         let eleid = ele.id;
         document.getElementById(`${eleid}`).addEventListener('click',function(e){
           animalsound(eleid);
         }
         );
     })