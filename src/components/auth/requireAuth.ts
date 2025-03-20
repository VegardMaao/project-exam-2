
const user = true;
export function requireAuth(){
    if(!user){
        console.log("goodbye");
    } else {
        console.log("hello")
    }
}