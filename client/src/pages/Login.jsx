import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = ()=> {
    const [signupData, setSignupData] = useState({
        name:"",
        email:"",
        password:""
    });
    const[loginData, setLoginData] = useState({
        email:"",
        password:"",
    })
    const handleChange = (e, type)=>{
        const{name,value} = e.target;
        if(type==='signup'){
            setSignupData({...signupData, [name]:value})
        }
        else{
            setLoginData({...loginData, [name]:value})
        }
    }
    const handleRegister = (type)=>{
        const inputData = type === 'signup' ? signupData : loginData;
        console.log(inputData)
    }
  return (
    <div className="flex items-center w-full justify-center">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="SignUp">SignUp</TabsTrigger>
        <TabsTrigger value="Login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="SignUp">
        <Card>
          <CardHeader>
            <CardTitle>SignUp</CardTitle>
            <CardDescription>
              Create an account click on the signUp button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input type="text" 
              name="name"
              value={signupData.name}
              onChange={(e)=>handleChange(e,'signup')}
              placeholder="Mohd Shamsher" 
              required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input 
              type="email" 
              name="email"
              value={signupData.email}
              onChange={(e)=>handleChange(e,'signup')}
              placeholder="mohd@gmail.com" 
              required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input 
              type="password" 
              name="password"
              value={signupData.password}
              onChange={(e)=>handleChange(e,'signup')}
              placeholder="enter your password"
               required="true" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=>handleRegister("signup")}>SignUp</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Please click on the button and you can login
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input 
              type="email" 
              name="email"
              value={loginData.email}
              onChange={(e)=>handleChange(e,'login')}
              placeholder="mohd@gmail.com"
              required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input 
              type="password" 
              name="password"
              value={loginData.password}
              onChange={(e)=>handleChange(e,'login')}
              placeholder="enter your password" 
              required="true" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=>handleRegister("login")} >Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}


export default Login