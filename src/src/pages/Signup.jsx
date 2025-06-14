function SignupPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <input className="w-full p-2 border mb-4" type="text" placeholder="Name" />
          <input className="w-full p-2 border mb-4" type="email" placeholder="Email" />
          <input className="w-full p-2 border mb-4" type="password" placeholder="Password" />
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
        </div>
      </div>
    );
  }
  
  export default SignupPage;
  