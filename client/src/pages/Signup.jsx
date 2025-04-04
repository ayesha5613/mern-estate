import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, SetError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    const res = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log(data);
    if(data.success === false){
      setLoading(false);
      SetError(data.message);
      return;
    }
    setLoading(false);
    SetError(null);
    navigate('/Signin');
    } catch (error) {
      setLoading(false);
      SetError(error.message);
      
    }
    
  }
 return (
  <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
    <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
    <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'loading...' : 'Sign up'}
        </button>
        <OAuth/>
    </form>
    <div className='flex gap-2 mt-5 items-center'>
        <p>Have an account?</p>
        <Link to='/sign-in'></Link>
        <span className='text-blue-700'>Sign in</span>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
  </div>
 )}