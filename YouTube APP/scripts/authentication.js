
class User{

constructor(){


}

validate_username(username){


    return username.includes("@")? false:true;
   

}

validate_password(password){


    return (password.length<8)? false:true;
    
}


async sign_up(n,e,u,p,m,d){

    let validation= (this.validate_username(u) && this.validate_password(p));


    if(validation)
    {
        this.name=n;
        this.email=e;
        this.username=u;
        this.password=p;
        this.mobile=m;
        this.description=d;


    const registered_api="https://masai-api-mocker.herokuapp.com/auth/register";

    const ans= await fetch(registered_api,{

          method:"POST",
          body:JSON.stringify(this),
          headers:{

              "Content-Type": "application/json",
          }

    });

    const data = await ans.json();

    console.log("hello");
      console.log(data);
    }


}


async log_in(u,p){


    let login_data_object={

        username:u,
        password:p
    }

     let login_api="https://masai-api-mocker.herokuapp.com/auth/login";


    let ans=await fetch(login_api,{


        method:"POST",
        body:JSON.stringify(login_data_object),
        headers:{

            "Content-Type":"application/json"
        }
    });

    let data= await ans.json();

    return data;

}

}








let user =new User();

const Register=() =>{

   
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;
const mobile=document.getElementById("mobile").value;
const description=document.getElementById("description").value;


user.sign_up(name,email,username,password,mobile,description);

console.log(user);

};


const Login= async()=>{

let username=document.getElementById("login-username").value;
let password=document.getElementById("login-password").value;


let {token}= await user.log_in(username,password);

getProfile(username,token);

};


const getProfile= async(username,token)=>{

let api_link=`https://masai-api-mocker.herokuapp.com/user/${username}`;

let ans= await fetch(api_link,{
        

    headers:{

        Authorization: `Bearer ${token}` ,
        "Content-Type":"application/json"
    }
});

let data= await ans.json();

console.log(data);

localStorage.setItem("user_data",JSON.stringify(data));

window.location.href="index.html";


}