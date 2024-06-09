import React,{useState} from 'react'

const Signup = () => {

  const [credentials, setCredentials] =useState({name:"",email:"",password:"",confirmpassword:""})

 
  const onchange=(event) => {
      const data = setCredentials({...credentials,[event.target.name]:event.target.value})
      console.log(data);
  }





  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-top">
      {/* <h2 className="text-5xl font-bold">Signup now!</h2> */}
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
       
       
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="username" placeholder="username" name='username' value={credentials.username} onChange={onchange} className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' value={credentials.email} onChange={onchange} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' value={credentials.password} onChange={onchange} className="input input-bordered" required />
          <label className="label">
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm_Password" name='confirmpassword' value={credentials.confirmpassword} onChange={onchange} className="input input-bordered" required />
          <label className="label">
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>

        </div>
      
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Signup