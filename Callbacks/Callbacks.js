
const wall = {
    isBuilt: false,
    isPlanished: false,
    isPainted: false
}

function build(wallToBuild,callback) {    
    setTimeout(() => {
        wallToBuild.isBuilt = true 
        console.log('wall is built') 
        const error = wallToBuild.isBuilt ? null : 'cannot build'
        callback(error, wallToBuild)    
    }, 3000)
    return wallToBuild
}

function planish(wallToPlanish, callback) {
    setTimeout(()=>{
        wallToPlanish.isPlanished = true
        const error = wallToPlanish.isPlanished ? null : 'cannot planish'
        callback(error ,wallToPlanish)
    },2000)   
   
    
}

function paint(wallToPaint, callback) {
    setTimeout(()=>{
        wallToPaint.isPainted = true
        const error = wallToPaint ? null : 'cannot paint'
        callback(error, wallToPaint)
    },4000)
}

build (wall, (error, wallbuilt) => {
    if (error) return console.log('the wall dont build')
    console.log('build')
 planish(wallbuilt,(planishError,wallPlanished)=>{
     if(planishError) return console.log('the wall cant be planished')
     console.log('the wall is already planished')
     paint(wallPlanished,(paintError,wallpanited)=>{
         if ( paintError ) return console.log('the wall cant be paint')
                 console.log('the wall is al ready')
     })

 })
})
