const instance = require("./axios")
let {token}=require("./axios")
const data = {
    email: "anamika12@gmail.com",
    password: "anamika@11"
}
const login = async () => {
    try {
        const response = await instance.post("/api/login",
            data
        )

        console.log(response);
        token = response.data.token

    } catch (error) {
        console.log(error)
    }

}
login()