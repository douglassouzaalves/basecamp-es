const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(() => {
        reject("W.A.R.N.I.N.G")
    }, 2000)
})

//myPromise().then(() => {
//    console.log("Primeira vez")
//}).catch((error) => {
//    console.warn(error)
//})

const exec = async () => {
    try {
        await myPromise()
        console.log("Primeira vez.")
    } catch (error) {
        console.warn(error)
    } finally {
        console.log("Tente novamente mais tarde :)")
    }
} 

exec()



