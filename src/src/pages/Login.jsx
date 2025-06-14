function LoginPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <input className="w-full p-2 border mb-4" type="email" placeholder="Email" />
          <input className="w-full p-2 border mb-4" type="password" placeholder="Password" />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
  