



function build(wallToBuild) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToBuild.isBuild = true

            if (wallToBuild.isBuild) {
                resolve(wallToBuild)
            } else {
                reject('cannot build')
            }
        }, 3000)
    })

}
function planish(wallToPlanish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToPlanish.isPlanished = true

            if (wallToPlanish.isPlanished) {
                resolve(wallToPlanish)
            } else {
                reject('cannot planish')
            }
        }, 2000)
    })

}
function paint(wallToPaint) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToPaint.isPaint = true

            if (wallToPaint.isPaint) {
                resolve(wallToPaint)
            } else {
                reject('cannot paint')
            }
        }, 3000)
    })

}

build({})
    .then((builtWall) => {
        console.log('the wall has been built',builtWall)    
        planish(builtWall)
            .then((planisheddWall) => {
                console.log('the wall has been planished',planisheddWall)
                paint(planisheddWall)
                    .then((paintedWall) => {
                        console.log('the wall has been paint and is complete',paintedWall)
                        
                        
                    })
            })
    })
    .catch((error) => {
        console.error('the wall cannot be complete')

    })
    .catch((errorplanished)=>{
        console.log('the wall cannot be planished')
    })
    .catch((errorPainted)=>{
        console.log('the wall cannot be painted')
    })
