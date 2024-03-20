// some import topic

function fun1(params){
return new Promise((resolve, reject) =>{
    throw new Error(" Somthing is Wrong.... ");
    setTimeout(() => {
        resolve("Nayan V Dangar")
    },2000);
})
}
function fun2(name) {
    console.log("My Name is ",name);
}
async function main() {
    try {
        let name = await fun1();
        console.log("----------name------->",name);
        fun2(name)
    } catch (error) {
        console.log("--error----->", error.message)
        
    }
}
main()